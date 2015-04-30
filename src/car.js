function Car(make, model, year, color){
  this.year = new Date().getFullYear();
  this.state = 'off';
  this.previousOwners = [];
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;