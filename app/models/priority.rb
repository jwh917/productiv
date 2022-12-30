class Priority < ApplicationRecord
  belongs_to :user
  belongs_to :priority_level

  validates :title, presence: true
  validates :comment, presence: true
end