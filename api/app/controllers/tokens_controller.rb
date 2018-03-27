class TokensController < ApplicationController
  def create
      user = User.find_by(email: params[:email])

      if user&.authenticate(params[:password])
        render json: {
          jwt: encode_token({
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              full_name: user.full_name
          })
        }
      else
        head :not_found
      end
  end
end
