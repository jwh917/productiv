class PriortySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :priorty_level_id, :title, :comment
  
end
