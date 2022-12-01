class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :name
      t.string :email
      t.string :age_group
      t.integer :start_day
      t.integer :end_day
      t.text :bio

      t.timestamps
    end
  end
end
