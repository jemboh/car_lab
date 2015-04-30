function Car(make, model, year, color){
  this.year = new Date().getFullYear();
}

Car.prototype.sale = function(newOwner){

};

Car.prototype.paint = function(newColor){

};


module.exports=Car;