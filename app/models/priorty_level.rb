class PriortyLevel < ApplicationRecord
  has_many :priorties
  has_many :user, through: :priorties


end
