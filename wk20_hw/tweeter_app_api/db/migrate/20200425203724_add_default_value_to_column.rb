class AddDefaultValueToColumn < ActiveRecord::Migration[6.0]
  def change
    change_column_default :tweets, :content, 'I have interesting things to say'
  end
end
