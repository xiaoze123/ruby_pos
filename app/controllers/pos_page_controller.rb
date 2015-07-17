class PosPageController < ApplicationController
  def new
  end

  def home_page

  end

  def item_list
    @items = Items.all
  end

  def get_cart_list
    items=CartList.get_goods(params[:id])
    respond_to do |format|
      format.json { render json: items }
    end
  end

  def show_number
    item=CartList.find_by_id(params[:id])
    if params[:status]=='+'
      item.count=item.count+1
    else
      item.count=item.count-1
    end
    if item.save
      items=CartList.all
      respond_to do |format|
        format.json { render json: items }
      end
    end
    if item.count==0
      item.delete
    end
  end

  def cart
    @items = CartList.all
  end
end
