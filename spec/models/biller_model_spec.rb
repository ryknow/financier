require File.expand_path('../../spec_helper', __FILE__)

describe Biller do
  before(:each) do
    @biller = Biller.new
  end

  after(:all) do
    Biller.all.each {|biller| biller.destroy} unless Biller.count == 0
  end

  it "should be valid" do
    @biller.should be_valid
  end

  it "should create a new Biller" do
    @biller.name = "Test Biller"
    @biller.save!
    Biller.find(@biller.id).should be_true
  end

end