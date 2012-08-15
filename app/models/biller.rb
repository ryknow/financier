class Biller
  include Mongoid::Document
  has_many :Bill
  field :name, type: String
end
