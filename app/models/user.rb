class User < ApplicationRecord
  has_one :profile

  has_many :todos
  has_many :todos_categories, through: :todos

  has_many :priorties
  has_many :priorty_levels, through: :priorties


  has_secure_password

  validates :username, presence: true, uniqueness: true



end
