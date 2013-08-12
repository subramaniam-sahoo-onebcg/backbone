  (function($) {

    var Photo = Backbone.Model.extend({
      //defaults: {'imgsrc': 'test.jpg', 'title': 'test title'},
      validate: function(attributes) {
        if (attributes.title === undefined)
          return "Title blannk error";
      },
      initialize: function() {
        this.on('change:imgsrc', function() {
          // console.log(this.get('imgsrc') + ' changes');
        });
        this.on('invalid', function(model, error) {
          console.log(error);
        });
      },
      changeSrc: function(source) {
        this.set('imgsrc', source);
      }
    });

    var photo = new Photo;
    photo.set({imgsrc: 'testsss.jpg'}, {validate: true});

  })(jQuery);