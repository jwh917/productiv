class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.integer :user_id
      t.integer :todo_category_id
      t.string :title
      t.boolean :completed

      t.timestamps
    end
  end
end
