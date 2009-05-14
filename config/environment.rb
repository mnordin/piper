# Be sure to restart your server when you modify this file

# Specifies gem version of Rails to use when vendor/rails is not present
RAILS_GEM_VERSION = '2.3.2' unless defined? RAILS_GEM_VERSION

# Bootstrap the Rails environment, frameworks, and default configuration
require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|

  config.frameworks -= [ :active_support, :active_record, :active_resource, :action_mailer ]

  config.gem "httparty"
  config.gem "crack"

  config.time_zone = 'UTC'
  
end