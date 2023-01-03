class TodoCategory < ApplicationRecord
  has_many :todos, dependent: :destroy
  has_many :user, through: :todos, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end