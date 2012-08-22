Financier.View.Transactions = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.collection.on('reset', this.render, this);
  },

  el: '#transaction-list',

  events: {
    'click a.trans-delete'    : 'deleteTransaction'
  },

  deleteTransaction: function(ev) {
    var self = this;
    var transaction = this.collection.get($(ev.currentTarget).attr("id"));
    transaction.destroy({
      success: function() {
        self.collection.fetch();
      },
      error: function(response) {
        console.log(response);
      }
    });

  },

  render: function() {
    this.$el.html(JST['transaction/transaction_item_template']({collection: this.collection.toJSON()}));
  }

})