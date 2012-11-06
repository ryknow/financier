Financier.Collection.Transactions = Backbone.Collection.extend({
  initialize: function() {
    this.fetched = false;
  },

  model: Financier.Model.Transaction,

  url: 'transaction',

  fetch: function() {
    Backbone.Collection.prototype.fetch.call(this);
    this.fetched = true;
  }
})