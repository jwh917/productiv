class TodoSerializer < ActiveModel::Serializer
  attributes :id, :todo_category, :title, :completed
end
