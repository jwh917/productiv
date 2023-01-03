class PriorityLevel < ApplicationRecord
  has_many :priorities
  has_many :user, through: :priorities
end