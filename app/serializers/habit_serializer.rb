class HabitSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :title, :created_at 

  belongs_to :profile
end
