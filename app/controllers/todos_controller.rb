class TodosController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    todos = @current_user.todos
    render json: todos
  end

  def show
    todo = find_td
    render json: todo
  end

  def create
    todo = @current_user.todos.create!(td_params)
    render json: todo, status: :created
  end

  def update
    todo = find_td
    todo.update(td_params)
    render json: todo
  end 

  def destroy
    todo = find_td
    todo.destroy
    head :no_content
  end


  private

  def find_td
    @current_user.todos.find(params[:id])
  end

  def td_params
    params.permit(:user_id, :todo_category_id, :title, :completed)
  end

  def render_not_found_response
    render json: { error: "Todo not found" }, status: :not_found
  end
end