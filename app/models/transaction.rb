class Transaction
  include Mongoid::Document

  belongs_to :debt

  field :name, :type => String
  field :category, :type => String
  field :amount, :type => Integer
  field :date, :type => Date
end
