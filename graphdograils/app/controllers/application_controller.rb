class ApplicationController < ActionController::API
    def current_user
        token = request.headers["Authorization"].to_s
        id = Base64.decode64(token)
        User.find_by(id: id)
    end
end
