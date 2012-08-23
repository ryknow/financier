Financier.View.TransactionInput = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.model = new Financier.Model.Transaction();
    this.debtList = options.debtList;
    this.debtList.on('reset', this.render, this);
  },

  el: '#transaction-input',

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
        self.collection.fetch();
      }
    });
  },

  updateDebt: function(debtId, change) {
    var self = this;
    this.debtModel = this.debtList.get(debtId);
    var currentAmount = this.debtModel.get('amount_owed');
    var debtName = this.debtModel.get('name');

    // Adds to debt unless it is from the bank account then subtracts from what is there
    // TODO: separate bank account from debt
    if (debtName === "Bank Account") {
      this.debtModel.save({amount_owed: (parseInt(currentAmount) - parseInt(change))}, { success: function() { self.debtList.fetch(); }})
    } else {
      this.debtModel.save({amount_owed: (parseInt(currentAmount) + parseInt(change))}, { success: function() { self.debtList.fetch(); }});
    }
  },

  render: function() {
    console.log(this.debtList);
    this.$el.html(JST['transaction/transaction_input_template']({debt: this.debtList.toJSON()}));
  }

})