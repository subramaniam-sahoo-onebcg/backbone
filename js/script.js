  $(function() {

    var ListView = Backbone.View.extend({
      el: $('body'),
      initialize: function() {
        this.render();

      },
      render: function() {
        $(this.el).append('<h2>Hello world</h2>');
      }
    });

    listView = new ListView();
    
  });