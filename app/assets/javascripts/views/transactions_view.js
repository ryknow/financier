Financier.View.Transactions = Support.CompositeView.extend({
  initialize: function(options) {
    this.transactionCollection = options.transactionCollection;
    this.transactionCollection.on('reset', this.renderTransactionList, this);
    this.model = new Financier.Model.Transaction();

    this.debtCollection = options.debtCollection;
    this.debtCollection.on('reset', this.renderDebt, this);
  },

  events: {
    'click #new-transaction'  : 'createTransaction'
  },

  createTransaction: function(ev) {
    ev.preventDefault();
    var self = this;
    var formInput = {};
    var debtId = $('.debt-item').val();

    $(':input[type=text]', 'form.new-transaction').each(function(index, value) {
      if ($(this).val().length > 0) {
        formInput[$(this).attr('id')] = $(this).val();
      } else {
        console.log("Empty Input", $(this));
      };
    });

    if(debtId) {
      formInput['debt_id'] = debtId;
      this.updateDebt(debtId, formInput['amount']);
    };

    this.model.save(formInput, {
      success: function() {
        self.transactionCollection.fetch();
      }
    });
  },

  updateDebt: function(debtId, change) {
    var self = this;
    this.debtModel = this.debtCollection.get(debtId);
    var currentAmount = this.debtModel.get('amount_owed');
    var debtName = this.debtModel.get('name');

    // Adds to debt unless it is from the bank account then subtracts from what is there
    // TODO: separate bank account from debt
    if (debtName === "Bank Account") {
      this.debtModel.save({amount_owed: (parseInt(currentAmount) - parseInt(change))}, { success: function() { self.debtCollection.fetch(); }})
    } else {
      this.debtModel.save({amount_owed: (parseInt(currentAmount) + parseInt(change))}, { success: function() { self.debtCollection.fetch(); }});
    }
  },

  renderDebt: function() {
    this.renderChildInto(new Financier.View.Debt({collection: this.debtCollection}), "#debt-list");
    this.renderTransactionInput();
  },

  renderTransactionList: function() {
    this.renderChildInto(new Financier.View.TransactionsList({collection: this.transactionCollection}), "#transaction-list");
  },

  renderTransactionInput: function() {
    $("#transaction-input", this.$el).html(JST['transaction/transaction_input_template']({debt: this.debtCollection.toJSON()}));
  },


  render: function() {
    this.$el.html(JST['transaction/transaction_template']());

    return this;
  }


})