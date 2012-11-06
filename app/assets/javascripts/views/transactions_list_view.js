Financier.View.TransactionsList = Support.CompositeView.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.collection.on('reset', this.render, this);
  },

  tagName: 'tbody',

  renderList: function() {
    var self = this;

    $.each(this.collection.models,function(key, value) {
      var transactionItem = new Financier.View.TransactionItem({model: value});
      self.appendChild(transactionItem);
    });
  },

  render: function() {
    this.$el.html(JST['transaction/transaction_list_template']());

    if(this.collection.fetched) {
      this.renderList();
    }

    return this;
  }


})