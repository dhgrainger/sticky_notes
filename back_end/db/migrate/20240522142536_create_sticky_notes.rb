class CreateStickyNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :sticky_notes do |t|
      t.string :note_category
      t.string :note_description

      t.timestamps
    end
  end
end
