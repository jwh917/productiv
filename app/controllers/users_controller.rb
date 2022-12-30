class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
    render json: @current_user
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  def update
    user = @current_user
    user.update(user_params)
    render json: user
  end 

  def destroy
    user = @current_user
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end