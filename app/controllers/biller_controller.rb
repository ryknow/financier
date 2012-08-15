class BillerController < ApplicationController
  respond_to :json

  def index
    render :json => Biller.all
  end

  def show
    render :json => Biller.find(params[:id])
  end

  def create
    new_biller = Biller.create(params)
    render :json => new_biller
  end

  def update
  end

  def destroy
    biller = Biller.find(params[:id])
    biller.destroy
  end
end
