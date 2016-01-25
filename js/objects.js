
var allHops [];

function hops (alphaAcid, citrus, fruity, piney, spicey, floral) {
  this.alphaAcid = alphaAcid;
  this.citrus = citrus;
  this.fruity = fruity;
  this.piney = piney;
  this.spicey = spicey;
  this.floral = floral;
  allHops.push(this);

}

var amarillo = new hops(9 ,7, 5, 0, 0, 3);
var cascade = new hops(5, 5, 3, 3, 3, 5);
var centennial = new hops(10, 7, 0, 3, 0, 7);
var chinook = new hops(13, 5, 0, 7, 5,0);
var citra =  new hops(12 ,7 ,7 ,0 , 0, 3);
var columbus = new hops (15, 5, 0, 3, 7,0);
