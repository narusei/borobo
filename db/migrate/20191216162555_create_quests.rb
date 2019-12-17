class CreateQuests < ActiveRecord::Migration[6.0]
  def change
    create_table :quests do |t|
      t.string :title
      t.text :detail
      t.string :tag
      t.string :from_to
      t.string :author
      t.string :reward
      t.string :status

      t.timestamps
    end
  end
end
