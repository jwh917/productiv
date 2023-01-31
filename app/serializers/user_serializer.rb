class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile, :custom_todos, :custom_priorities

  def custom_todos
    object.todos.map do |todo|
      {
        id: todo.id,
        title: todo.title,
        category: todo.todo_category.name,
        completed: todo.completed
      }
    end

  end

  def custom_priorities
    object.priorities.map do |priority|
      {
        id: priority.id,
        title: priority.title,
        comment: priority.comment,
        level_id: priority.priority_level.id,
        level_name: priority.priority_level.name,
        level_color: priority.priority_level.color
      }
    end

  end

  has_many :todo_categories
  has_many :priority_levels
  


end