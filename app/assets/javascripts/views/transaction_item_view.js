Financier.View.TransactionItem = Support.CompositeView.extend({
  initialize: function(options) {
    this.model = options.model;
  },

  tagName: 'tr',

  events: {
   'click a.trans-delete'    : 'deleteTransaction'
  },

  deleteTransaction: function(ev) {
    this.model.destroy({
      // TODO: Refresh display on screen
      success: function() {
      },
      error: function(response) {
       console.log(response);
      }
    });
  },

  render: function() {
    this.$el.html(JST['transaction/transaction_item_template']({name:     this.model.get('name'),
                                                                category: this.model.get('category'),
                                                                amount:   this.model.get('amount'),
                                                                date:     this.model.get('date') }));
    return this;
  }
})