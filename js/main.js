var Vehicle = Backbone.Model.extend({
  validate: function(attrs){
    if (!attrs.registrationNumber)
      return "Registration is required.";
  },
  start: function(){
    console.log("Vehicle started.");
  }
});

var Car = Vehicle.extend({
  start: function(){
    console.log("Car with registration number "
        + this.get('registrationNumber') + " started.");
  }
});

var car = new Car({ registrationNumber: "XLI887", color: "Blue" });

car.start();
