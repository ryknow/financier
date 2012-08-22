Financier.Router.Finances = Backbone.Router.extend({
  initialize: function() {
    this.el = $("#main-content");
  },

  routes: {
    ''  : 'home'
  },

  home: function() {
    var transactionsCollection = new Financier.Collection.Transactions();
    transactionsCollection.fetch();
    var transactionsView = new Financier.View.Transactions({collection: transactionsCollection});

    var debtCollection = new Financier.Collection.Debt();
    debtCollection.fetch();
    var debtView = new Financier.View.Debt({collection: debtCollection});

    var transactionInput = new Financier.View.TransactionInput({collection: transactionsCollection});
  }

});