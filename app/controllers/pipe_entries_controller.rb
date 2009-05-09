class PipeEntriesController < ApplicationController
  def index
    @entries = Pipe.find(params[:pipe_id]).entries
  end
  
  def tumblr_image
    
  end
  
  def crop_youtube_id
   
    # http://gdata.youtube.com/feeds/base/videos/KPxE1aOiBNM
  end
  
end
