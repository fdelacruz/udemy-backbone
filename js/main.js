var Vehicle = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
  model: Vehicle
});

var vehicles = new Vehicles([
    new Vehicle({ registrationNumber: "XLI887", colour: "Blue"}),
    new Vehicle({ registrationNumber: "ZNP123", colour: "Blue"}),
    new Vehicle({ registrationNumber: "XUV456", colour: "Gray"})
]);

var blueVehicles = vehicles.where({ colour: "Blue"});

console.log("Blue Vehicles:", blueVehicles);

var foundVehicle = vehicles.where({ registrationNumber: "XLI887"});

console.log("Car with the registration number XLI887:", foundVehicle);

vehicles.remove(foundVehicle);

console.log("Vehicles Collection as JSON Objects:");
vehicles.each(function(vehicle){
  console.log(vehicle.toJSON());
});

console.log("Vehicles Collection:");
vehicles.each(function(vehicle){
  console.log(vehicle);
});
