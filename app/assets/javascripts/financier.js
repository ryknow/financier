window.Financier = {
  Model: {},
  Collection: {},
  Router: {},
  View: {},
  initialize: function() {
    new Financier.Router.Finances({});
    
    if (!Backbone.history.started) {
      Backbone.history.start();
      Backbone.history.started = true;
    }
  }
}

/*
$(function(){
  $('button.new-transaction').on('click', function(ev){
    ev.preventDefault();
    var dataObj = {}
    $(':input["text"]', 'form.new-transaction').each(function(index, value) {
      if (typeof $(value).attr('id') !== "undefined" && $(value).val() !== "") {
        dataObj[$(value).attr('id')] = $(value).val();
      }
    })

    $.ajax("transaction", {
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(dataObj),
      success: function() {
        console.log(resp);
      }
    })
  })
})
*/