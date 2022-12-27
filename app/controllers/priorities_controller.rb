class PrioritiesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    priorities = @current_user.priorities
    render json: priorities
  end

  def show
    priority = find_pty
    render json: priority
  end

  def create
    priority = @current_user.priorities.create!(pty_params)
    render json: priority, status: :created
  end

  def update
    priority = find_pty
    priority.update(pty_params)
    render json: priority
  end 

  def destroy
    priority = find_pty
    priority.destroy
    head :no_content
  end




  private

  def find_pty
    @current_user.priorities.find(params[:id])
  end

  def pty_params
    params.permit(:user_id, :priority_level_id, :title, :comment)
  end

  def render_not_found_response
    render json: { error: "Priority not found" }, status: :not_found
  end

end
