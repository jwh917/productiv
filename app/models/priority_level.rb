class PriorityLevel < ApplicationRecord
  has_many :priorities
  has_many :user, through: :priorities

  validates :name, presence: true, uniqueness: true
  validates :color, presence: true, uniqueness: true

end