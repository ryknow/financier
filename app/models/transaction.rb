class Transaction
  include Mongoid::Document

  field :name, :type => String
  field :category, :type => String
  field :amount, :type => Integer
  field :date, :type => Date
end
