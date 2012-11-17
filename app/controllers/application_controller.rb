class ApplicationController < ActionController::Base
  protect_from_forgery

  def bricks
    render :template => "application/bricks"
  end
end
