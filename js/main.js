var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

var VehicleView = Backbone.View.extend({
  tagName: "li",
  className: "vehicle",

  attributes: {
    "data-attribute": "data-color"
  },

  events: {
    "click .deleteVehicle": "onClickDelete"
  },

  onClickDelete: function(){
    this.remove();
    this.model.destroy();
  },

  render: function(){
    this.$el.html(this.model.get("vehicleMake") + " " + this.model.get("vehicleModel") + ", Registration Number: " + this.model.get("registrationNumber") + " <button class='deleteVehicle'>Delete</button>");

    return this;
  }
});

var VehiclesView = Backbone.View.extend({
  tagName: "ul",

  render: function(){
    var self = this;

    this.model.each(function(vehicle){
      var vehicleView = new VehicleView({ model: vehicle });
      self.$el.append(vehicleView.render().$el);
    });
  }
});

var vehicles = new Vehicles([
    new Vehicle({ vehicleMake: "Cadillac", vehicleModel: "ATS", registrationNumber: "XLI887", color: "White" }),
    new Vehicle({ vehicleMake: "Cadillac", vehicleModel: "CTS", registrationNumber: "ZNP123", color: "White" }),
    new Vehicle({ vehicleMake: "Cadillac", vehicleModel: "XTS", registrationNumber: "XUV456", color: "White" })
]);

var vehiclesView = new VehiclesView({ el: "#vehicles", model: vehicles });
vehiclesView.render();
