class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile, :priorities, :custom_todos

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

end