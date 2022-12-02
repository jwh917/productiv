class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :email, :age_group, :start_day, :end_day, :bio

  has_many :habits
  belongs_to :user
end
