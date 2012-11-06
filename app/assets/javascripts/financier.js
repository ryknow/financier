window.Financier = {
  Model: {},
  Collection: {},
  Router: {},
  View: {},
  Support: {},
  initialize: function() {

    new Financier.Router.Finances({});
    
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
}