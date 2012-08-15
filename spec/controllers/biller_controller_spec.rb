require File.expand_path('../../spec_helper', __FILE__)

describe BillerController do

  before(:all) do
    @new_biller = Biller.create(:name => "Test1")
    @new_biller2 = Biller.create(:name => "Test2")
  end

  after(:all) do
    Biller.all.each {|biller| biller.destroy} unless Biller.count == 0
  end

  describe "GET #index" do
    it "should return json" do
      get :index
      response.header['Content-Type'].should match /json/
    end

    it "should return all billers" do
      get :index
      response.status.should == 200
    end
  end

  describe "#show" do
    it "should return a single biller" do
      true.should == false
    end
  end
end
