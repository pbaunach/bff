# frozen_string_literal: true

namespace :static do
  desc "Export the documentation site to static HTML for GitHub Pages. Set BASE_PATH=/portfolio for project pages."
  task export: :environment do
    require "fileutils"
    require "json"

    # Use relative asset paths so the export works in any folder (e.g. portfolio/bff/)
    use_relative_paths = ENV["RELATIVE_PATHS"] != "0"
    out_dir = Rails.root.join("build")
    public_dir = Rails.root.join("public")

    FileUtils.rm_rf(out_dir)
    FileUtils.mkdir_p(out_dir)

    # Precompile assets so digest paths exist (idempotent if already done)
    puts "Precompiling assets..."
    Rake::Task["assets:clobber"].invoke if ENV["CLOBBER"]
    Rake::Task["assets:precompile"].invoke

    # Load manifest so we can rewrite dev .debug-* paths to actual precompiled filenames
    manifest_path = Dir.glob(public_dir.join("assets", ".sprockets-manifest-*.json")).first
    manifest = manifest_path ? JSON.parse(File.read(manifest_path)) : {}
    assets_map = manifest["assets"] || {}

    app = Rails.application
    # Allow mock requests during export (avoids Blocked hosts error)
    Rails.application.config.hosts.clear

    routes = [
      ["/", "index.html"],
      ["/fredinator/builder", "fredinator/builder.html"]
    ]

    routes.each do |path, file|
      puts "Rendering #{path} -> #{file}..."
      env = Rack::MockRequest.env_for("http://localhost#{path}", "REQUEST_METHOD" => "GET")
      _status, _headers, body = app.call(env)
      html = body.respond_to?(:join) ? body.join : body.to_s

      # Relative path from this HTML file to the assets folder (e.g. "assets/" or "../assets/")
      file_dir = File.dirname(file)
      depth = (file_dir == "." || file_dir.empty?) ? 0 : file_dir.split(File::SEPARATOR).size
      asset_prefix = depth.zero? ? "assets/" : "#{(['..'] * depth).join('/')}/assets/"

      if use_relative_paths
        # Rewrite any absolute asset paths (/assets/ or /anything/assets/) to relative paths
        html = html.gsub(%r{(href|src)="(?:/[^"]*?)?/assets/([^"]+)"}, "\\1=\"#{asset_prefix}\\2\"")
        # Remove <base> tag so relative paths resolve from the HTML file location
        html = html.sub(%r{\s*<base href="[^"]*">\s*}, "\n")
      else
        base_path = ENV["BASE_PATH"].to_s.chomp("/")
        base_path = "/#{base_path}" if base_path.present? && !base_path.start_with?("/")
        if base_path.present?
          html = html.gsub(%r{(href|src)="/(assets/)}, "\\1=\"#{base_path}/\\2")
          html = html.sub(%r{<head>}, "<head>\n  <base href=\"#{base_path}/\">")
        end
      end

      # Fix asset paths: development emits application.debug-*.css/js but we have precompiled application-*.css/js
      assets_map.each do |logical_path, digest_filename|
        ext = File.extname(logical_path)
        base = File.basename(logical_path, ext)
        # Match (href|src)="...assets/application.debug-xxx.css" or "...assets/application-xxx.css"
        pattern = %r{(href|src)="([^"]*assets/)#{Regexp.escape(base)}(?:\.debug)?-[^"]+\.(#{Regexp.escape(ext.delete_prefix('.'))})"}
        replacement = "\\1=\"\\2#{digest_filename}\""
        html = html.gsub(pattern, replacement)
      end

      out_file = out_dir.join(file)
      FileUtils.mkdir_p(out_file.dirname)
      File.write(out_file, html)
    end

    # Copy assets and other public files
    puts "Copying assets and public files..."
    FileUtils.cp_r(public_dir.join("assets"), out_dir.join("assets")) if Dir.exist?(public_dir.join("assets"))
    FileUtils.cp(public_dir.join("favicon.ico"), out_dir) if File.exist?(public_dir.join("favicon.ico"))
    FileUtils.cp(public_dir.join("robots.txt"), out_dir) if File.exist?(public_dir.join("robots.txt"))

    puts "Done. Static site is in build/"
    puts "For GitHub Pages at username.github.io/portfolio, run: BASE_PATH=portfolio rake static:export"
  end
end
