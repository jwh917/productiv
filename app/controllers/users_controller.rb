class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  # def index
  #   # users = User.all
  #   # render json: @current_user, include: :profile
  #   render json: User.all
  # end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    # if !@current_user
    #   render json: { errors: ["Not signed in"] }
    # else 
    #   render json: @current_user
    # end
    render json: @current_user, include: [:profile, :priorties, :todos]
  end

  def update
    user = @current_user
    user.update(user_params)
    render json: user

    # @current_user.update(pro_params)
    # render json: @current_user
    # updated status
    # stop patch from giving empty string for title or null for completed
  # rescue ActiveRecord::RecordInvalid => invalid
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end 

  # def destroy
  #   user = User.find(params[:id])
  #   user.destroy
  #   head :no_content
  # end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
