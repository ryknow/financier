Financier.View.Debt = Support.CompositeView.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.collection.on('reset', this.render, this);
  },

  // TODO: Render Debt Items individually
  render: function() {
    this.$el.html(JST['debt_template']({debt: this.collection.toJSON()}));
    return this;
  }
})