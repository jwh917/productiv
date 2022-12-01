class TodoSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :todo_category, :title, :completed
end
