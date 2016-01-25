
var allHops = [];

function Hops (alphaAcid, citrus, fruity, piney, spicey, floral) {
  this.alphaAcid = alphaAcid;
  this.citrus = citrus;
  this.fruity = fruity;
  this.piney = piney;
  this.spicey = spicey;
  this.floral = floral;
  allHops.push(this);

}

var amarillo = new Hops(9 ,7, 5, 0, 0, 3);
var cascade = new Hops(5, 5, 3, 3, 3, 5);
var centennial = new Hops(10, 7, 0, 3, 0, 7);
var chinook = new Hops(13, 5, 0, 7, 5,0);
var citra =  new Hops(12 ,7 ,7 ,0 , 0, 3);
var columbus = new Hops (15, 5, 0, 3, 7,0);
