  (function($) {
    
    var Photo = Backbone.Model.extend({
      defaults: {'imgsrc': 'test.jpg'},
      initialize: function() {
      
        this.on('change', function() {
         
          console.log( this.get('imgsrc'));
        });

      },
      changeSrc: function(source) {
        this.set('imgsrc', source);
      }
    });

    var photo = new Photo;
    photo.changeSrc('testsss.jpg');
  })(jQuery);