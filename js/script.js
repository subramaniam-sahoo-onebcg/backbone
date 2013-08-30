  $(function() {

    // Create a model for the services
    var Service = Backbone.Model.extend({
      // Will contain three attributes.
      // These are their default values


      // Helper function for checking/unchecking a service
      toggle: function() {
        this.set('checked', !this.get('checked'));
      }
    });


    // Create a collection of services
    var ServiceList = Backbone.Collection.extend({
      // Will hold objects of the Service model
      model: Service,
      // Return an array only with the checked services
      getChecked: function() {
        return this.where({checked: true});
      }
    });

    // Prefill the collection with a number of services.
//    var services = new ServiceList([
//      new Service({title: 'web development', price: 200}),
//      new Service({title: 'web design', price: 250}),
//      new Service({title: 'photography', price: 100}),
//      new Service({title: 'coffee drinking', price: 10})
//              // Add more here
//    ]);

    var services = new ServiceList();
    //new Service([{title: 'web development', price: 200}])
    services.add([new Service({title: 'web development', price: 200})]);

    // Add more here
    //);
    //console.log(services);
    // This view turns a Service model into HTML
    var ServiceView = Backbone.View.extend({
      tagName: 'li',
      events: {
        'click .test222': 'toggleService',
        'click button': 'delete'
      },
      delete: function(ev) {

        this.$el.html('<input class="test222" type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span><button>Delete</button>');

        console.log(this.model.get('title'));
        return false;

      },
      initialize: function() {

        // Set up event listeners. The change backbone event
        // is raised when a property changes (like the checked field)

        this.listenTo(this.model, 'change', this.render);
      },
      render: function() {

        // Create the HTML

        this.$el.html('<input class="test222" type="checkbox" value="1" name="' + this.model.get('title') + '" /> ' + this.model.get('title') + '<span>$' + this.model.get('price') + '</span><button>Delete</button>');
        this.$('input').prop('checked', this.model.get('checked'));

        // Returning the object is a good practice
        // that makes chaining possible
        return this;
      },
      toggleService: function() {
        this.model.toggle();
      }
    });
    $('#clk').click(function() {
      // console.log(services);
      services.add(new Service({title: 'web development1', price: 201}));


    });
    $('#clk1').click(function() {
      // console.log(services);
      services.add(new Service({title: 'web developmen333', price: 20122}));


    });
    // The main view of the application
    var App = Backbone.View.extend({
      // Base the view on an existing element
      el: $('#main'),
      initialize: function() {

        // Cache these selectors
        this.total = $('#total span');
        this.list = $('#services');

        // Listen for the change event on the collection.
        // This is equivalent to listening on every one of the 
        // service objects in the collection.
        this.listenTo(services, 'change', this.render);
        this.listenTo(services, 'add', this.appendRender);

        // Create views for every one of the services in the
        // collection and add them to the page

        services.each(function(service) {

          var view = new ServiceView({model: service});
          this.list.append(view.render().el);

        }, this);	// "this" is the context in the callback
      },
      render: function() {
        // Calculate the total order amount by agregating
        // the prices of only the checked elements
        //console.log(services);

        var total = 0;
        _.each(services.getChecked(), function(elem) {
          total += elem.get('price');
        });

        // Update the total price
        this.total.text('$' + total);
        return this;
      },
      appendRender: function(service) {

        var view = new ServiceView({model: service});
        this.list.append(view.render().el);
      }
    });
    new App();



  });