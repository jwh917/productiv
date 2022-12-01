class TodoCategoriesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    todo_categories = TodoCategory.all
    render json: todo_categories
  end

  def show
    todo_category = find_tc
    render json: todo_category
  end

  private

  def find_tc
    TodoCategory.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Todo category not found" }, status: :not_found
  end
end
