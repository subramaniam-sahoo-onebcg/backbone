  (function($) {
    
    var Photo = Backbone.Model.extend({
      defaults: {'imgsrc': 'test.jpg', 'title':'test title'},
      initialize: function() {
      
        this.on('change:imgsrc', function() {
         
          console.log( this.get('imgsrc')+' changes');
        });

      },
      changeSrc: function(source) {
        this.set('imgsrc', source);
      }
    });

    var photo = new Photo;
    photo.changeSrc('testsss.jpg');
  })(jQuery);