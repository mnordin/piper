set :application, "piper"
set :deploy_to, "/var/www/apps/#{application}"

role :app, "mnordin.net"
role :web, "mnordin.net"
role :db, "mnordin.net", :primary => true

default_run_options[:pty] = true
set :repository, "git://github.com/mnordin/piper.git"
set :scm, "git"
set :branch, "master"
set :deploy_via, :remote_cache

set :user, "nordin"
set :admin_runner, "nordin"
