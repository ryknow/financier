Financier.View.Transactions = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.collection.fetch();
    this.collection.on('reset', this.render, this);
    this.model = new Financier.Model.Transaction();
  },

  events: {
    'click #new-transaction'  : 'createTransaction'
  },

  createTransaction: function(ev) {
    ev.preventDefault();
    console.log("HERE");
    var formInput = {};
    $(':input["text"]', 'form.new-transaction').each(function(index, value) {
      if ($(this).val().length > 0) {
        formInput[$(this).attr('id')] = $(this).val();
      } else {
        console.log("Empty Input");
      };
    });

    this.model.set(formInput);
    this.model.save();
  },

  render: function() {
    var transactionInput = new Financier.View.TransactionInput();
    this.$el.html(transactionInput.render().el);
    this.$el.append(JST['transaction/transaction_item_template']({collection: this.collection.toJSON}));

    return this;
  }

})