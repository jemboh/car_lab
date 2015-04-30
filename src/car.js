function Car(make, model, year, color){
  this.year = new Date().getFullYear();
  this.state = 'off';
  this.previousOwners = [];
  this.currentOwner = 'Manufacturer';
  this.passengers = [];
}

Car.prototype.sale = function(newOwner){
  this.previousOwners.push(this.currentOwner);
  this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function() {
  this.state = 'on';
};

Car.prototype.off = function() {
  this.state = 'off';
};

Car.prototype.pickUp = function(passenger) {
  if(this.state === 'on') {
    this.passengers.push(passenger);  
  };
};

Car.prototype.dropOff = function(passenger) {
  if(this.state === 'on') {
    var passengerIndex = this.passengers.indexOf(passenger);
    this.passengers.splice(passengerIndex, 1);
  };
};

module.exports = Car;