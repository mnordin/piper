class PipeEntry
  attr_accessor :title, :source, :link, :date, :description
  
  def initialize(attributes)
    @title = attributes["title"]
    @source = attributes["type"]
    @link = attributes["link"]
    @date = attributes["pubDate"]
    @description = attributes["description"]
  end
end