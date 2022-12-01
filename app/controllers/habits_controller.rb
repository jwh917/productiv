class HabitsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    # habits = Habit.all
    habits = @current_user.profile.habits
    render json: habits
  end

  def show
    habit = find_ht
    render json: habit
  end

  def create
    # habit = Habit.create!(ht_params)
    habit = @current_user.profile.habits.create!(ht_params)
    render json: habit, status: :created
  # rescue ActiveRecord::RecordInvalid => invalid
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def update
    habit = find_ht
    habit.update(ht_params)
    render json: habit
    # updated status
    # stop patch from giving empty string for title or null for completed
  # rescue ActiveRecord::RecordInvalid => invalid
  #   render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end 

  def destroy
    habit = find_ht
    habit.destroy
    head :no_content
  end


  private

  def find_ht
    # Habit.find(params[:id])
    @current_user.profile.habits.find(params[:id])
  end

  def ht_params
    params.permit(:profile_id, :title)
  end

  def render_not_found_response
    render json: { error: "Habit not found" }, status: :not_found
  end
end
