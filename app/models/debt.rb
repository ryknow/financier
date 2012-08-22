class Debt
  include Mongoid::Document
  has_many :transactions
  field :name, :type => String
  field :amount_owed, :type => Integer
end
