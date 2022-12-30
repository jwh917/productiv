class Habit < ApplicationRecord
  belongs_to :profile

  validates :title, presence: true
end