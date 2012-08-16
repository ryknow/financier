Financier.View.TransactionInput = Backbone.View.extend({
  render: function() {
    this.$el.html(JST['transaction/transaction_input_template']);
    return this;
  }

})