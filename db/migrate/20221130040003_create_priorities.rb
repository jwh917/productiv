class CreatePriorities < ActiveRecord::Migration[6.1]
  def change
    create_table :priorities do |t|
      t.integer :user_id
      t.integer :priority_level_id
      t.string :title
      t.text :comment

      t.timestamps
    end
  end
end
