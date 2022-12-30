class HabitsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    habits = @current_user.profile.habits
    render json: habits
  end

  def show
    habit = find_ht
    render json: habit
  end

  def create
    habit = @current_user.profile.habits.create!(ht_params)
    render json: habit, status: :created
  end

  def update
    habit = find_ht
    habit.update(ht_params)
    render json: habit
  end 

  def destroy
    habit = find_ht
    habit.destroy
    head :no_content
  end


  private

  def find_ht
    @current_user.profile.habits.find(params[:id])
  end

  def ht_params
    params.permit(:profile_id, :title)
  end

  def render_not_found_response
    render json: { error: "Habit not found" }, status: :not_found
  end
end