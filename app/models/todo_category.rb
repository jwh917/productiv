class TodoCategory < ApplicationRecord
  has_many :todos
  has_many :user, through: :todos

  validates :name, presence: true, uniqueness: true
end