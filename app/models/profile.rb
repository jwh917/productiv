class Profile < ApplicationRecord
  belongs_to :user
  has_many :habits, dependent: :destroy

  

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :bio, length: { minimum: 10 }

end
