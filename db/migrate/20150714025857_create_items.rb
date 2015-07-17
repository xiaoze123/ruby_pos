class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.float :price
      t.string :barcode
      t.string :name
      t.string :unit
      t.string :category

      t.timestamps
    end
  end
end
