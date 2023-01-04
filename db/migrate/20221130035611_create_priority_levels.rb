class CreatePriorityLevels < ActiveRecord::Migration[6.1]
  def change
    create_table :priority_levels do |t|
      t.string :name
      t.string :color

      t.timestamps
    end
  end
end
