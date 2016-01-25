
var allHops = [];

function Hops (hopName, alphaAcid, citrus, fruity, piney, spicey, floral) {
  this.hopName = hopName;
  this.alphaAcid = alphaAcid;
  this.citrus = citrus;
  this.fruity = fruity;
  this.piney = piney;
  this.spicey = spicey;
  this.floral = floral;
  allHops.push(this);

}

var amarillo = new Hops('Amarillo', 9 ,7, 5, 0, 0, 3);
var cascade = new Hops('Cascade', 5, 5, 3, 3, 3, 5);
var centennial = new Hops('Centennial', 10, 7, 0, 3, 0, 7);
var chinook = new Hops('Chinook', 13, 5, 0, 7, 5,0);
var citra =  new Hops('Citra', 12 ,7 ,7 ,0 , 0, 3);
var columbus = new Hops ('Columbus', 15, 5, 0, 3, 7,0);
