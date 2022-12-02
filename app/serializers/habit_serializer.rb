class HabitSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :title

  # belongs_to :profile
end
