var Car = Backbone.Model.extend();

var Cars = Backbone.Collection.extend({
  model: Car
});

var cars = new Cars([
    new Car({ carMake: "Cadillac", carModel: "ATS" }),
    new Car({ carMake: "Buick", carModel: "Regal" }),
    new Car({ carMake: "Ford", carModel: "Fusion" })
]);

var CarView = Backbone.View.extend({
  tagName: "li",
  className: "car",

  render: function() {
    this.$el.html(this.model.get("carMake") + " " + this.model.get("carModel"));

    return this;
  }
});

var CarsView = Backbone.View.extend({
  tagName: "ul",

  render: function() {
    var self = this;

    this.model.each(function(car) {
      var carView = new CarView({ model: car });
      self.$el.append(carView.render().$el);
    });

    return this;
  }
});

var Truck = Backbone.Model.extend();

var Trucks = Backbone.Collection.extend({
  model: Truck
});

var trucks = new Trucks([
    new Truck({ truckMake: "Cadillac", truckModel: "Escalade" }),
    new Truck({ truckMake: "Buick", truckModel: "Enclave" }),
    new Truck({ truckMake: "Ford", truckModel: "F-150" })
]);

var TruckView = Backbone.View.extend({
  tagName: "li",
  className: "truck",

  render: function() {
    this.$el.html(this.model.get("truckMake") + " " + this.model.get("truckModel"));

    return this;
  }
});

var TrucksView = Backbone.View.extend({
  tagName: "ul",

  render: function() {
    var self = this;

    this.model.each(function(truck) {
      var truckView = new TruckView({ model: truck });
      self.$el.append(truckView.render().$el);
    });

    return this;
  }
});

var HomeView = Backbone.View.extend({
  render: function(){
    this.$el.html("");

    return this;
  }
});

var AppRouter = Backbone.Router.extend({
  routes: {
    "index": "index",
    "cars": "viewCars",
    "trucks": "viewTrucks",
    "*other": "defaultRoute"
  },

  index: function(){
    var view = new HomeView({ el: "#container" });
    view.render();
  },

  viewCars: function(){
    var view = new CarsView({ model: cars });
    $('#container').html(view.render().$el);
  },

  viewTrucks: function(){
    var view = new TrucksView({ model: trucks });
    $('#container').html(view.render().$el);
  }, 

  defaultRoute: function(){

  }
});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
  events: {
    "click": "onClick"
  },

  onClick: function(e){
    var $li = $(e.target);
    router.navigate($li.attr("data-url"), { trigger: true });
  }
});

var navView = new NavView({ el: "#nav" });
