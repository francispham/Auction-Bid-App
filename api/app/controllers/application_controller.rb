class ApplicationController < ActionController::API
  def current_user
    token = request.headers["AUTHORIZATION"]
    begin
      payload = JWT.decode(
        token,
        Rails.application.secrets.secret_key_base
      )&.first
      @user ||= User.find_by(id: payload["id"])
    rescue JWT::DecodeError => error
      # p error
      nil
    end
  end
  helper_method :current_user

  private
  def authenticate_user!
    head :unauthorized unless current_user.present?
  end
  def encode_token(payload = {}, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i # important!!! otherwise token never expires!
    JWT.encode(
      payload,
      Rails.application.secrets.secret_key_base
    )
  end
end
