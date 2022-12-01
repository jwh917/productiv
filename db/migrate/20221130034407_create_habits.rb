class CreateHabits < ActiveRecord::Migration[6.1]
  def change
    create_table :habits do |t|
      t.integer :profile_id
      t.string :title

      t.timestamps
    end
  end
end
