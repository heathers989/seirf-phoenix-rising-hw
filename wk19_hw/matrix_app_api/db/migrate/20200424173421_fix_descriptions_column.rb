class FixDescriptionsColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :characters, :descriptions, :description
  end
end
