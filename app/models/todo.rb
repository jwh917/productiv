class Todo < ApplicationRecord
  belongs_to :user
  belongs_to :todo_category

  validates :title, presence: true

end
