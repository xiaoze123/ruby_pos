class CreateCartLists < ActiveRecord::Migration
  def change
    create_table :cart_lists do |t|
      t.float   :price
      t.string  :barcode
      t.string  :name
      t.string  :unit
      t.string  :category
      t.integer :count
      t.timestamps
    end
  end
end
