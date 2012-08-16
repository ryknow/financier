class ApplicationController < ActionController::Base
  protect_from_forgery

  protected

  def mongo_id (result)
    result.each do |rec|
      rec[:id] = rec[:_id]
    end
  end
end
