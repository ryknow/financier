class Bill
  include Mongoid::Document
  belongs_to :Biller
  field :amount, type: Integer
  field :due_date, type: Date
end
