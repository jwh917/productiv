class PriortyLevelsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    priorty_levels = PriortyLevel.all
    render json: priorty_levels
  end

  def show
    priorty_level = find_pl
    render json: priorty_level
  end

  private

  def find_pl
    PriortyLevel.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Priorty level not found" }, status: :not_found
  end

end
