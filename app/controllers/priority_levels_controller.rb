class PriorityLevelsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    priority_levels = PriorityLevel.all
    render json: priority_levels
  end

  def create
    priority_level = PriorityLevel.create!(pl_params)
    render json: priority_level, status: :created
  end

  def destroy
    priority_level = find_pl
    priority_level.destroy
    head :no_content
  end


  private

  def pl_params
    params.permit(:name, :color)
  end

  def find_pl
    PriorityLevel.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Priority level not found" }, status: :not_found
  end
end