class PrioritySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :priority_level_id, :title, :comment
  
end
