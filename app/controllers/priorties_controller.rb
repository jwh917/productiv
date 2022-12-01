class PriortiesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    # priorties = Priorty.all
    priorties = @current_user.priorties
    render json: priorties
  end

  def show
    priorty = find_pty
    render json: priorty
  end

  def create
    # priorty = Priorty.create!(pty_params)
    priorty = @current_user.priorties.create!(pty_params)
    render json: priorty, status: :created
  # rescue ActiveRecord::RecordInvalid => invalid
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def update
    priorty = find_pty
    priorty.update(pty_params)
    render json: priorty
    # updated status
    # stop patch from giving empty string for title 

  end 

  def destroy
    priorty = find_pty
    priorty.destroy
    head :no_content
  end


  private

  def find_pty
    @current_user.priorties.find(params[:id])
  end

  def pty_params
    params.permit(:user_id, :priorty_level_id, :title, :comment)
  end

  def render_not_found_response
    render json: { error: "Priorty not found" }, status: :not_found
  end

end
