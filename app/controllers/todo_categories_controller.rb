class TodoCategoriesController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    todo_categories = TodoCategory.all
    render json: todo_categories
  end

  def create
    todo_category = TodoCategory.create!(tc_params)
    render json: todo_category, status: :created
  end

  def destroy
    todo_category = find_tc
    todo_category.destroy
    head :no_content
  end


  private

  def tc_params
    params.permit(:name)
  end

  def find_tc
    TodoCategory.find(params[:id])
  end

  def render_not_found_response
    render json: { error: "Todo category not found" }, status: :not_found
  end
end