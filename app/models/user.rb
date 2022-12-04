class User < ApplicationRecord
  has_one :profile, dependent: :destroy

  has_many :todos, dependent: :destroy
  has_many :todos_categories, through: :todos

  has_many :priorties, dependent: :destroy
  has_many :priorty_levels, through: :priorties


  has_secure_password

  validates :username, presence: true, uniqueness: true



end


