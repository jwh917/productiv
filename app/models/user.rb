class User < ApplicationRecord
  has_one :profile, dependent: :destroy

  has_many :todos, dependent: :destroy
  has_many :todos_categories, through: :todos

  has_many :priorities, dependent: :destroy
  has_many :priority_levels, through: :priorities


  has_secure_password

  validates :username, presence: true, uniqueness: true
end