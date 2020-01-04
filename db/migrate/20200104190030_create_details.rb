class CreateDetails < ActiveRecord::Migration[6.0]
  def change
    create_table :details do |t|
      t.string :user_name
      t.text :profile
      t.integer :good
      t.integer :ok
      t.integer :bad

      t.timestamps
    end
  end
end
