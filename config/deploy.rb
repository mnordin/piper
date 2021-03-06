set :application, "piper"
set :deploy_to, "/vhosts/rails.mnordin.net/#{application}"

role :app, "ssh.starkast.net"
role :web, "ssh.starkast.net"
role :db, "ssh.starkast.net", :primary => true

default_run_options[:pty] = true
set :repository, "git://github.com/mnordin/piper.git"
set :scm, "git"
set :branch, "master"
set :deploy_via, :remote_cache

set :user, "nordin"
set :admin_runner, "nordin"


# --- FROM SKISTAR ---
set :application, "piper"

set :host, "skistar.eframe.se"

set :deploy_to, "/home/deploy/apps/#{application}"

set :use_sudo, false

ssh_options[:port] = 8888

default_run_options[:pty] = true