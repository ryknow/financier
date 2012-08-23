class TransactionController < ApplicationController

  def index
    transactions = Transaction.all
    render :json => transactions
  end

  def show
    render :json => Transaction.find(params[:id])
  rescue Mongoid::Errors::DocumentNotFound => e
    flash[:error] = "Error: #{e}"
  end

  def create
     transaction = Transaction.create!({name:     params[:name],
                                         category: params[:category],
                                         amount:   params[:amount],
                                         date:     params[:date]})
     render :json => transaction
  rescue Exception => e
   flash[:error] = "Error: #{e}"
  end

  def update
    transaction = Transaction.find(params[:id])
    render :json => transaction
  rescue Mongoid::Errors::DocumentNotFound => e
    flash[:error] = "Error: #{e}"
  end

  def destroy
    transaction = Transaction.find(params[:id])
    transaction.destroy
    render :json => transaction
  end
end
