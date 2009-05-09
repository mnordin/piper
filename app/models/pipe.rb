class Pipe
  include HTTParty
  format :json
  
  def self.find(id)
    result = get "http://pipes.yahoo.com/pipes/pipe.run", :query => { :_id => id, :_render => "json" }
    new(result)
  end
  
  def initialize(result)
    @result = result
  end
  
  def entries
    @result["value"]["items"].collect do |entry_attributes|
      PipeEntry.new(entry_attributes)
    end
  end
end
