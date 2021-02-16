class ApplicationController < ActionController::API
    include ActionDispatch::Session
    include ActionController::RequestForgeryProtection
    def current_user
        User.find_by(id: session[:kik])
    end
end
