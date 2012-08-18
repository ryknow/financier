Financier.Router.Finances = Backbone.Router.extend({
  initialize: function() {
    this.el = $("#main-content");
  },

  routes: {
    ''  : 'home'
  },

  home: function() {
    var transactionsCollection = new Financier.Collection.Transactions();
    var transactionsView = new Financier.View.Transactions({collection: transactionsCollection});

    this.el.html(transactionsView.render().el);
  }

});