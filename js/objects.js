
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
var chinook = new Hops('Chinook', 13, 5, 0, 7, 5, 0);
var citra =  new Hops('Citra', 12, 7, 7, 0, 0, 3);
var columbus = new Hops ('Columbus', 15, 5, 0, 3, 7, 0);
var cluster = new Hops('Cluster', 7, 0, 0, 3, 7, 7);
var fuggle = new Hops('Fuggle', 4, 3, 7, 3, 0, 3);
var galena = new Hops('Galena', 13, 5, 5, 0, 7, 0);
var glacier = new Hops('Glacier', 6, 5, 0, 3, 5, 3);
var golding = new Hops ('Golding', 5, 0, 5, 0, 3, 7);
var hallertau = new Hops('Hallertau', 4, 0, 3, 0, 7, 5);
var horizon = new Hops('Horizon', 12, 0, 3, 3, 7, 5);
var liberty = new Hops('Liberty', 4, 5, 3, 0, 7, 3);
var magnum = new Hops('Magnum', 13, 0, 3, 5, 5, 3);
var millenium = new Hops('Millenium', 15, 0, 3, 3, 3, 7);
var mtHood = new Hops('Mt.Hood', 6, 0, 0, 3, 7, 5);
var nelsonSauvin = new Hops('Nelson Sauvin', 13, 3, 7, 0, 3, 7);
var northernBrewer = new Hops('Northern Brewer', 9, 0, 0, 7, 3, 3);
var nugget = new Hops('Nugget', 15, 0, 3, 0, 7, 7);
var perle = new Hops('Perle', 8, 0, 3, 0, 7, 5);
var saaz = new Hops('Saaz', 4, 0, 0, 3, 5, 5);
var simcoe = new Hops('Simcoe', 13, 7, 5, 5, 0, 0);
var sorachiAce = new Hops('Sorachi Ace', 14, 7, 5, 0, 0, 0);
var sterling = new Hops('Sterling', 8, 3, 0, 3, 7, 5);
var summit = new Hops('Summit', 18, 7, 0, 3, 7, 0);
var tettnang = new Hops('Tettnang', 4, 0, 0, 3, 7, 5);
var ultra = new Hops('Ultra', 3, 0, 3, 0, 5, 7);
var warrior = new Hops('Warrior', 16, 5, 0, 5, 0, 5);
var willamette = new Hops('Willamette', 5, 0, 3, 3, 5, 5);

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
