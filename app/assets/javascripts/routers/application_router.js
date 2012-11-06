Financier.Router.Finances = Support.SwappingRouter.extend({
  initialize: function() {
    this.el = $("#main-content");
  },

  routes: {
    ''  : 'home'
  },

  home: function() {
    var transactionsCollection = new Financier.Collection.Transactions();
    var debtCollection = new Financier.Collection.Debt();
    var transactionsView = new Financier.View.Transactions({transactionCollection: transactionsCollection, debtCollection: debtCollection});

    transactionsCollection.fetch();
    debtCollection.fetch();

    this.swap(transactionsView);
  }

});