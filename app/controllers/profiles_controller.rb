class ProfilesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    # profile = Profile.all
    profile = @current_user.profile
    # byebug
    render json: profile
  end

  def show
    profile = find_pro
    render json: profile
    # include: profile.habits
  end

  def create
    # profile = Profile.create!(pro_params)
    profile = Profile.create!(pro_params)
    render json: profile, status: :created
  # rescue ActiveRecord::RecordInvalid => invalid
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def update
    profile = find_pro
    profile.update(pro_params)
    render json: profile
    # updated status
    # stop patch from giving empty string for title or null for completed
  # rescue ActiveRecord::RecordInvalid => invalid
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end 

  def destroy
    profile = find_pro
    profile.destroy
    head :no_content
  end


  private

  def find_pro
    Profile.find(params[:id])
  end

  def pro_params
    params.permit(:user_id, :name, :email, :age_group, :start_day, :end_day, :bio)
  end

  def render_not_found_response
    render json: { error: "Profile not found" }, status: :not_found
  end

end

