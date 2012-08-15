require File.expand_path('../../spec_helper', __FILE__)

describe Bill do
  before(:each) do
    @bill = Bill.new
  end

  after(:all) do
    Bill.all.each {|bill| bill.destroy} unless Bill.count == 0
  end

  it "should be valid" do
    @bill.should be_valid
  end
  
  it "should create a new Bill" do
    @bill.amount = 100
    @bill.due_date = Date.new(2012,12,1)
    @bill.save!
    Bill.find(@bill.id).should be_true
  end
  
end