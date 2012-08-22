Financier.View.Debt = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.collection.on('reset', this.render, this);
  },

  el: '#debt-list',

  render: function() {
    this.$el.html(JST['debt_template']({debt: this.collection.toJSON()}))

  }
})