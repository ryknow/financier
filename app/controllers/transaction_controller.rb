class TransactionController < ApplicationController

  def index
    @transactions = Transaction.all
    request.format do |format|
      format.html {render :html}
      format.json {render :json => @transactions}
    end
  end

  def show
    begin
      @transaction = Transaction.find(params[:id])
      render :json => Transaction.find(params[:id])
    rescue Mongoid::Errors::DocumentNotFound => e
      flash[:error] = "Error: #{e}"
    end
  end

  def create
   begin
     @transaction = Transaction.create!({name:     params[:name],
                                         category: params[:category],
                                         amount:   params[:amount],
                                         date:     params[:date]})
     redirect_to :index
   rescue Exception => e
     flash[:error] = "Error: #{e}"
   end
  end

  def update
    begin
      @transaction = Transaction.find(params[:id])

      render :json => @transaction
    rescue Mongoid::Errors::DocumentNotFound => e
      flash[:error] = "Error: #{e}"
    end
  end

  def destroy
    @transaction = Transaction.find(params[:id])
    @transaction.destroy
    redirect_to :root
  end
end
