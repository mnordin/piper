class PipeEntriesController < ApplicationController
  def index
    @entries = Pipe.find(params[:pipe_id]).entries
  end
  
end
