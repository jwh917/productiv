class TodosController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    # todos = Todo.all
    todos = @current_user.todos
    render json: todos
  end

  def show
    todo = find_td
    render json: todo
  end

  def create
    # todo = Todo.create!(td_params)
    todo = @current_user.todos.create!(td_params)
    render json: todo, status: :created
  # rescue ActiveRecord::RecordInvalid => invalid
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def update
    todo = find_td
    todo.update(td_params)
    render json: todo
    # updated status
    # stop patch from giving empty string for title or null for completed
  # rescue ActiveRecord::RecordInvalid => invalid
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end 

  def destroy
    todo = find_td
    todo.destroy
    head :no_content
  end


  private

  def find_td
    # Todo.find(params[:id])
    @current_user.todos.find(params[:id])
  end

  def td_params
    params.permit(:user_id, :todo_category_id, :title, :completed)
  end

  def render_not_found_response
    render json: { error: "Todo not found" }, status: :not_found
  end
end
