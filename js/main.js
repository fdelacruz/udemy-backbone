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

  initialize: function(){
    this.model.on("destroy", this.remove, this); // 3. Listen for when the model is destroyed..
  },

  events: {
    "click .delete": "onClickDelete" // 1. Add click event..
  },

  onClickDelete: function(){
    this.model.destroy(); // 2. Call the Backbone.js destroy method on the model..
  },

  remove: function(){
    this.$el.remove(); // 4. Call the jQuery remove method on the corresponding LI..
  },

  render: function(){
    this.$el.html(this.model.get("vehicleMake") + " " + this.model.get("vehicleModel") + ", Registration Number: " + this.model.get("registrationNumber") + " <button class='delete'>Delete</button>");

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
