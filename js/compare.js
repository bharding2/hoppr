function hopComp(alphaAcid, citrus, fruity, piney, spicey, floral) {
  this.alphaAcid = alphaAcid;
  this.citrus = citrus;
  this.fruity = fruity;
  this.piney = piney;
  this.spicey = spicey;
  this.floral = floral;
  // allHops.push(this);
}

var A = new hopComp(13, 5, 7, 1, 4, 2);
var B = new hopComp(6, 2, 4, 2, 8, 9);
var C = new hopComp(9, 7, 1, 8, 5, 3);

hopComp.prototype.findPercentage = function(){
  Math.abs(Math.abs(A - B) - 68) / 68;
  this.findPercentage();
}

// function.prototype.compHops(){
//
// }
