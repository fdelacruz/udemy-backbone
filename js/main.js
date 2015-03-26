var Vehicle = Backbone.Model.extend({
  defaults: {
    vehicleMake: "Cadillac",
    vehicleModel: "ATS",
  }
});

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

var NewVehicleView = Backbone.View.extend({
  className: "input",

  initialize: function(options){
    this.bus = options.bus;
  },

  events: {
    'click input[type="submit"]' : 'onSubmit'
  },

  onSubmit: function() {
    var $input = this.$el.find('input[type=text]');
    var newVehicle = $input.val();
    $input.val("");
    this.bus.trigger('onAddVehicle', newVehicle);
  },

  render: function() {
    this.$el.html('<input type="text" placeholder="Registration Number"><input type="submit" value="Add">');

    return this;
  }
});

var VehiclesView = Backbone.View.extend({
  tagName: "ul",

  initialize: function(options) {
    this.model.on("add", this.prependVehicle, this);

    this.bus = options.bus;
    this.bus.on('onAddVehicle', this.addVehicle, this);
  },

  addVehicle: function(newregistrationNumber) {
    var newVehicle = new Vehicle({ registrationNumber: newregistrationNumber });
    this.model.add(newVehicle);
  },

  prependVehicle: function(newVehicle) {
    var newVehicleView = new VehicleView({ model: newVehicle, bus: this.bus });
    this.$el.prepend(newVehicleView.render().$el);
  },

  render: function(){
    var self = this;

    this.model.each(function(vehicle){
      var vehicleView = new VehicleView({ model: vehicle });
      self.$el.append(vehicleView.render().$el);
    });

    return this;
  }
});

var bus = _.extend({}, Backbone.Events); // Event Aggregator

var vehicles = new Vehicles([
    new Vehicle({ vehicleMake: "Cadillac", vehicleModel: "ATS", registrationNumber: "XLI887", color: "White" }),
    new Vehicle({ vehicleMake: "Cadillac", vehicleModel: "CTS", registrationNumber: "ZNP123", color: "White" }),
    new Vehicle({ vehicleMake: "Cadillac", vehicleModel: "XTS", registrationNumber: "XUV456", color: "White" })
]);

var vehiclesView = new VehiclesView({ model: vehicles, bus: bus });
var newVehicleView = new NewVehicleView({ bus: bus });

$('#vehicles').append(vehiclesView.render().$el);
$('#vehicles').prepend(newVehicleView.render().$el);
