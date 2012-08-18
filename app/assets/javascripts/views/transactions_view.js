Financier.View.Transactions = Backbone.View.extend({
  initialize: function(options) {
    this.collection = options.collection;
    this.collection.fetch();
    this.collection.on('reset', this.render, this);
    this.model = new Financier.Model.Transaction();
  },

  events: {
    'click #new-transaction'  : 'createTransaction',
    'click a.trans-delete'    : 'deleteTransaction'
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
    this.$el.html(JST['transaction/transaction_input_template']);
    this.$el.append(JST['transaction/transaction_item_template']({collection: this.collection.toJSON()}));

    return this;
  }

})