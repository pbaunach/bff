require "active_support/core_ext/integer/time"

Rails.application.configure do
  config.enable_reloading = true
  config.eager_load = false
  config.consider_all_requests_local = true
  config.action_controller.perform_caching = false
  config.cache_store = :null_store
  config.action_mailer.raise_delivery_errors = false
  config.active_support.deprecation = :log
  config.active_support.disallowed_deprecation = :raise
  config.active_support.disallowed_deprecation_warnings = []
  config.active_record.migration_error = :page_load
  config.active_record.verbose_query_logs = true
  config.assets.debug = true
  config.assets.quiet = true
  config.public_file_server.enabled = true
  # Allow requests from any host in development (e.g. localhost, 127.0.0.1, or custom hostnames)
  config.hosts.clear
  config.secret_key_base = "bab441e37640f3c9abd69c66ba10f8b1a78210c1d6fb9f6659c2a83bcd4bcae60deefcd4dbda427f53edb2e5f1b83f6c79afb0948797a2a30b7d0db3f5a59c8e"
end
