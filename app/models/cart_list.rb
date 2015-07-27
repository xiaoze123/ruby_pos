class CartList < ActiveRecord::Base
  def self.count_shop
    number = 0
    items =CartList.all
    if items == []
      number
    else
      for i in 0..items.length-1
        number = number + items[i].count
      end
      number

    end
  end

  def  self.get_goods(id)
    item = Items.find_by_id(id)
    if CartList.find_by_name(item.name)==nil
      goods = CartList.new
      goods.name=item.name
      goods.barcode=item.barcode
      goods.price=item.price
      goods.category=item.category
      goods.unit=item.unit
      goods.count=1
    else
      goods = CartList.find_by_name(item.name)
      goods.count = goods.count+1
    end
    if goods.save
      items=CartList.all
    end
    items
  end
end
