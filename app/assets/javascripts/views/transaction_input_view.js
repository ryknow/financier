Financier.View.TransactionInput = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.collection.on('reset', this.render(), this);
    this.model = new Financier.Model.Transaction();
  },

  el: '#transaction-input',

  events: {
    'click #new-transaction'  : 'createTransaction'
  },

  createTransaction: function(ev) {
    ev.preventDefault();
    var self = this;
    var formInput = {};

    $(':input[type=text]', 'form.new-transaction').each(function(index, value) {
      if ($(this).val().length > 0) {
        formInput[$(this).attr('id')] = $(this).val();
      } else {
        console.log("Empty Input", $(this));
      };
    });

    this.model.save(formInput, {
      success: function() {
        self.collection.fetch();
      }
    });
  },

  render: function() {
    this.$el.html(JST['transaction/transaction_input_template']);
  }

})