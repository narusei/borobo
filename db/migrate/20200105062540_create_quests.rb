class CreateQuests < ActiveRecord::Migration[6.0]
  def change
    create_table :quests do |t|
      t.string :title
      t.string :stance
      t.string :category
      t.string :tags
      t.text :detail
      t.datetime :start_date
      t.datetime :due_date
      t.string :reward

      t.timestamps
    end
  end
end
