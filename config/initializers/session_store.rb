# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_piper_session',
  :secret      => '54a75806b2190cf744d09d2bdba52a22f929f5ae98c23ba42ced7f86562081577aa106870ffe0281c91b15992764785a7e24f0bc88c14fdd65bff0217626cdaa'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
