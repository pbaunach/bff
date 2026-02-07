require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Bff
  class Application < Rails::Application
    config.load_defaults 7.0

    config.assets.enabled = true
    config.assets.paths << Rails.root.join("app/assets/fonts").to_s
    config.public_file_server.enabled = true
  end
end
