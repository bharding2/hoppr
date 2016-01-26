
var allHops = [];

function Hops (hopName, alphaAcid, citrus, fruity, piney, spicey, floral) {
  this.hopName = hopName;
  this.alphaAcid = alphaAcid;
  this.citrus = citrus;
  this.fruity = fruity;
  this.piney = piney;
  this.spicey = spicey;
  this.floral = floral;
  this.percentAlike = 0;
  allHops.push(this);
}

var amarillo = new Hops('Amarillo', 9 ,7, 5, 0, 0, 3);
var cascade = new Hops('Cascade', 5, 5, 3, 3, 3, 5);
var centennial = new Hops('Centennial', 10, 7, 0, 3, 0, 7);
var chinook = new Hops('Chinook', 13, 5, 0, 7, 5,0);
var citra =  new Hops('Citra', 12 ,7 ,7 ,0 , 0, 3);
var columbus = new Hops ('Columbus', 15, 5, 0, 3, 7,0);

var allGrains = [];

function Grains (grainName, degLov, extractPot) {
  this.grainName = grainName;
  this.degLov = degLov;
  this.extractPot = extractPot;
  allGrains.push(this);
}

var twoRow = new Grains('Two Row', 2, 36);
var wheat = new Grains('Wheat', 2, 36)
var vienna = new Grains('Vienna', 5, 36);
var munich = new Grains('Munich', 10, 35);
var biscuit = new Grains('Biscuit', 15, 35);
var crystal80 = new Grains('Crystal 80', 80, 33);
var chocolate = new Grains('Chocolate', 350, 27);

var allYeasts = [];

function Yeasts (yeastName, attenuation) {
  this.yeastName = yeastName;
  this.attenuation = attenuation;
  allYeasts.push(this);
}

var us05 = new Yeasts('US-05 American', 0.75);
var s04 = new Yeasts('S-04 British', 0.75);
var s23 = new Yeasts('S-23 Lager', 0.75);
var wb06 = new Yeasts('WB-06 Wheat Beer', 0.75);
var be256 = new Yeasts('BE-256 Belgian', 0.75);
