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

var Bicycle = {
  make: "Mongoose",
  model: "Dolomite",
  year: 2021,
};
var bicycle1 = Car.getMarketingData.bind(Bicycle);
console.log(bicycle1());
