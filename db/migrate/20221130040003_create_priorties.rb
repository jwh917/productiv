class CreatePriorties < ActiveRecord::Migration[6.1]
  def change
    create_table :priorties do |t|
      t.integer :user_id
      t.integer :priorty_level_id
      t.string :title
      t.text :comment

      t.timestamps
    end
  end
end
