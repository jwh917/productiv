class Priorty < ApplicationRecord
  belongs_to :user
  belongs_to :priorty_level

  validates :title, presence: true
  validates :comment, presence: true

end
