class DebtController < ApplicationController
  respond_to :json

  def index
    render :json => Debt.all
  end

  def show
    render :json => Debt.find(params[:id])
  end

  def create
    new_debt = Debt.create(params)
    render :json => new_debt
  end

  def update
    debt = Debt.find(params[:id])
    debt.update_attributes(params)
    render :json => debt
  rescue Mongoid::Errors::DocumentNotFound => e
    flash[:error] = "Error: #{e}"
  end

  def destroy
    debt = Debt.find(params[:id])
    debt.destroy
  end
end
