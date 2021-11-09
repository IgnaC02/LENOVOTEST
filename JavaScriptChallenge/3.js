// 3) Using any JavaScript object creation pattern, create a Car object with the following attributes and methods:
//  **  Attributes
//  *  String: make *  String: model *  boolean: turnedOn *  int: engineDisplacement (cylinder volume)
//  *  int: year

// **  Methods:
//  *  boolean: isOn() *
// void: turnOn() *
// void: turnOff() *
// String: toString() [returns year, make, model and the engine displacement (cc)] *
// String: getMarketingData() [returns make, model and year]

// 4) Create a Bicycle object with only the make [String] , model [String] and year [int] attributes and no methods.
// Instantiate it and print to the console its internal state calling the getMarketingData method from the Car object.

// 3
var Car = {
  make: "Ford",
  model: "Mustang",
  turnedOn: false,
  engineDisplacement: 1200,
  year: 1977,

  isOn: function () {
    return (this.turnedOn = Car.turnedOn);
  },

  turnOn: function () {
    this.turnedOn = true;
    return this.turnedOn;
  },

  turnOff: function () {
    this.turnOff = false;
    return this.turnOff;
  },

  toString: function () {
    return [this.year, this.make, this.model, this.engineDisplacement];
  },

  getMarketingData: function () {
    return [this.year, this.make, this.model];
  },
};
console.log(Car.toString());

// 4
var Bicycle = {
  make: "Mongoose",
  model: "Dolomite",
  year: 2021,
};
var bicycle1 = Car.getMarketingData.bind(Bicycle);
console.log(bicycle1());
