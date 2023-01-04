class AddColorToPriorityLevels < ActiveRecord::Migration[6.1]
  def change
    add_column :priority_levels, :color, :string
  end
end
