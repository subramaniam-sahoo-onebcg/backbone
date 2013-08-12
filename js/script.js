  (function($) {

    var Photo = Backbone.Model.extend({
      urlRoot: 'test',
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

    var photoObj = new Photo;
    
   // photo = {imgsrc: 'testsss.jpg',title:'title'};
    photo = {id:1};
    photoObj.save(photo, {
      success: function(photo) {
        consolr.log(photo.toJSON());
      }
    });
    
  })(jQuery);