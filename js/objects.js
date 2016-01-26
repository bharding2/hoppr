
var allHops = [];

function Hops (hopName, alphaAcid, citrus, fruity, piney, spicey, floral, hopStats, hopDescription, beerStyles) {
  this.hopName = hopName;
  this.alphaAcid = alphaAcid;
  this.citrus = citrus;
  this.fruity = fruity;
  this.piney = piney;
  this.spicey = spicey;
  this.floral = floral;
  this.percentAlike = 0;
  this.hopStats = hopStats;
  this.hopDescription = hopDescription;
  this.beerStyles = beerStyles;
  allHops.push(this);
}

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

var hopStatsArray = [
  'Alpha Acid: 8 - 11% Beta Acid: 6 - 7% Co-Humulone: 21 - 24% Total Oil: 1.5 - 1.9 mL/100g',//Index 0
  'Alpha Acid: 4.5 - 7% Beta Acid: 4.5 - 7% Co-Humulone: 33 - 40% Total Oil: 0.8 - 1.5 mL/100g',//Index 1
  'Alpha Acid: 9.5 - 11.5% Beta Acid: 3.5 - 4.5% Co-Humulone: 28 -30% Total Oil: 1.5 - 2.5 mL/100g',//Index 2
  'Alpha Acid: 12 - 14% Beta Acid: 3 - 4% Co-Humulone: 29 - 34% Total Oil: 1.5 - 2.5 mL/100g',//Index 3
  'Alpha Acid: 11 - 13% Beta Acid: 3.5 - 4.5% Co-Humulone: 22 - 24% Total Oil: 2.2 - 2.8 mL/100g',//Index 4
  'Alpha Acid: 14 - 16% Beta Acid: 4 - 5% Co-Humulone: 30 -35% Total Oil: 1.5 - 2.0 mL/100g',//Index 5
  'Alpha Acid: 5.5 - 8.5% Beta Acid: 4.5 - 5.5% Co-Humulone: 36 - 42% Total Oil: 0.4 - 0.8 mL/100g',//Index 6
  'Alpha Acid: 4 - 5.5% Beta Acid: 1.5 - 2% Co-Humulone: 25 - 32% Total Oil: 0.7 - 1.2 mL/100g',//Index 7
  'Alpha Acid: 12 - 14% Beta Acid: 7 - 9% Co-Humulone: 37 - 42% Total Oil: 0.9 - 1.2 mL/100g',//Index 8
  'Alpha Acid: ~5.5% Beta Acid: ~8.2% Co-Humulone: 11 - 13% Total Oil: 0.7 - 1.6 mL/100g',//Index 9
  'Alpha Acid: 4 - 6% Beta Acid: 2 - 3% Co-Humulone: 20 -25% Total Oil: 0.4 - 1.0 mL/100g',//Index 10
  'Alpha Acid: 3.5 - 5.5% Beta Acid: 3.5 - 5.5% Co-Humulone: 18 - 25% Total Oil: 0.6 - 1.5 mL/100g',//Index 11
  'Alpha Acid: 11 - 13% Beta Acid: 6.5 - 8.5% Co-Humulone: 16 - 19% Total Oil: 1.5 - 2 mL/100g',//Index 12
  'Alpha Acid: 3 - 5% Beta Acid: 3 - 4% Co-Humulone: 24 - 30% Total Oil: 0.6 - 1.8 mL/100g',//Index 13
  'Alpha Acid: 10 - 14% Beta Acid: 4.5 - 7% Co-Humulone: 24 - 30% Total Oil: 1.9 - 3.0 mL/100g',//Index 14
  'Alpha Acid: 14.5 - 16.5% Beta Acid: 4.3 - 5.3% Co-Humulone: 28 - 32% Total Oil: 1.2 - 2.2 mL/100g',//Index 15
  'Alpha Acid: 4 - 8% Beta Acid: 5 - 7% Co-Humulone: 22 - 27% Total Oil: 1.6 - 3.4 mL/100g',//Index 16
  'Alpha Acid: 12 - 13% Beta Acid: 6 - 8% Co-Humulone: ~24% Total Oil: ~1.1 mL/100g',//Index 17
  'Alpha Acid: 8 - 10% Beta Acid: 3 - 5% Co-Humulone: 22 - 26% Total Oil: 1.5 - 2.0 mL/100g',//Index 18
  'Alpha Acid: 12 - 14.5% Beta Acid: 4 - 6% Co-Humulone: 27 - 32% Total Oil: 0.7 - 0.9 mL/100g',//Index 19
  'Alpha Acid: 7 - 9.5% Beta Acid: 4 - 5% Co-Humulone: 27 - 32% Total Oil: 0.7 - 0.9 mL/100g'//Index 20
  'Alpha Acid: 3 - 4.5% Beta Acid: 3 - 4.5% Co-Humulone: 24 - 28% Total Oil: 0.5 - 1.0 mL/100g',//Index 21
  'Alpha Acid: 12 - 14% Beta Acid: 4 - 5% Co-Humulone: 15 - 20% Total Oil: 2.0 - 2.5 mL/100g',//Index 22
  'Alpha Acid: 10 - 16% Beta Acid: 6 - 7% Co-Humulone: ~23% Total Oil: 2.0 - 2.8 mL/100g',//Index 23
  'Alpha Acid: 6 - 9% Beta Acid: 4 - 6% Co-Humulone: 22 - 28% Total Oil: 1.3 - 1.9 mL/100g',//Index 24
  'Alpha Acid: 16 - 19% Beta Acid: 3.3 - 6% Co-Humulone: 26 - 33% Total Oil: 1.5 - 2.5 mL/100g',//Index 25
  'Alpha Acid: 3 - 6% Beta Acid: 3 - 5% Co-Humulone: 22 - 29% Total Oil: 0.5 - 0.9 mL/100g',//Index 26
  'Alpha Acid: 2 - 3.5% Beta Acid: 3 - 4.5% Co-Humulone: 23 - 38% Total Oil: 1.3 - 1.5 mL/100g',//Index 27
  'Alpha Acid: 15 - 17% Beta Acid: 4.5 - 5.5% Co-Humulone: 24 - 26% Total Oil: 1.0 - 2.0 mL/100g',//Index 28
  'Alpha Acid: 4 - 6% Beta Acid: 3 - 4.5% Co-Humulone: 30 - 35% Total Oil: 1 - 1.5 mL/100g'//Index 29

];

var hopDescriptionArray = [
  'Floral, tropical and citrusy (lemon orange & grapefruit)',//Index 0
  'Medium intense floral, citrus and grapefruit tones',//Index 1
  'Medium intensity floral and citrus (lemon) tones',//Index 2
  'Medium intensity Spice and Pine with subtle notes of grapefruit',//Index 3
  'Strong citrus and tropical (grapefruit, passionfruit) tones',//Index 4
  'Pungent, black pepper and licorice with subtle citrus overtone',//Index 5
  'Strong floral and Spicy charecteristics',//Index 6
  'Mild wood and fruit charecteristics',//Index 7
  'Spicy, blackcurrant and citrus overtones',//Index 8
  'Pleasant hoppy aroma',//Index 9
  'Mild and delicate sweet floral aroma',//Index 10
  'Mild yet spicy with herbal floral charecteristics',//Index 11
  'Pleasant and spicy with floral charecteristics',//Index 12
  'Mild and spicy with subtle lemon and citrus charecteristics',//Index 13
  'No aroma',//Index 14
  'Mild and resinous with floral and herbal tones',//Index 15
  'Mild, herbal somewhat pungent or spicy',//Index 16
  'White wine fruitiness with gooseberry and grape infused flavors',//Index 17
  'Medium intensity, pine and mint characteristics',//Index 18
  'Mild and pleasant with spicy, herbal tones',//Index 19
  'Slightly spicy with herbal and floral characteristics',//Index 20
  'Mild spice and earth tones',//Index 21
  'Unique passionfruit, pine, earth and citrus characteristics',//Index 22
  'Unique lemon and dill characteristics',//Index 23
  'Herbal and spicy with a hint of floral and citrus characteristics',//Index 24
  'Distinct spice, earthy, onion, garlic, and citrus tones',//Index 25
  'Mild and pleasant with balanced earthy, herbal and floral impressions',//Index 26
  'Mild and pleasant with spicy and floral tones',//Index 27
  'Mild and resinous with subtle citrus, pine and herbal characteristics',//Index 28
  'Mild and pleasant with slightly spicy and floral tones'//Index 29
];
var beerStylesArray = [
  'IPA',//Index 0
  'American Pale Ale',//Index 1
  'American Ale',//Index 2
  'American Pale Ale',//Index 3
  'IPA',//Index 4
  'Pale Ale',//Index 5
  'Stout',//Index 6
  'English Ale',//Index 7
  'English Ale',//Index 8
  'American Pale Ale',//Index 9
  'Bitter',//Index 10
  'Belgian Ale',//Index 11
  'American Ale',//Index 12
  'Bock',//Index 13
  'Lager',//Index 14
  'Stout',// Index 15
  'Light Lager, Bock, and Hefeweizen',//Index 16
  'American-style Pale Ale, IPA',//Index 17
  'IPA,  Abbey Ale, Pale Ale, Hefeweizen, Porter',//Index 18
  'Barley Wine, Stout, Strong Bitter',//Index 19
  'Hefeweizen, Lager, Pilsner, Stout',//Index 20
  'Belgian-style Ales',//Index 21
  'IPA, American Pale Ale',//Index 22
  'American Pale Ale, IPA, Saison',//Index 23
  'Belgian-style Ales',//Index 24
  'IPA, American Pale Ale, Stout',//Index 25
  'Belgian-style Ales',//Index 26
  'Lager, Pilsner',//Index 27
  'IPA, American Pale Ale',//Index 28
  'English-style Ale'//Index 29
];


  var amarillo = new Hops('Amarillo', 9 ,7, 5, 0, 0, 3, hopStatsArray[0], hopDescriptionArray[0], beerStylesArray[0]);
  var cascade = new Hops('Cascade', 5, 5, 3, 3, 3, 5, hopStatsArray[1], hopDescriptionArray[1], beerStylesArray[1]);
  var centennial = new Hops('Centennial', 10, 7, 0, 3, 0, 7, hopStatsArray[2],hopDescriptionArray[2], beerStylesArray[2]);
  var chinook = new Hops('Chinook', 13, 5, 0, 7, 5, 0, hopStatsArray[3], hopDescriptionArray[3], beerStylesArray[3]);
  var citra =  new Hops('Citra', 12, 7, 7, 0, 0, 3, hopStatsArray[4], hopDescriptionArray[4], beerStylesArray[4]);
  var columbus = new Hops ('Columbus', 15, 5, 0, 3, 7, 0, hopStatsArray[5], hopDescriptionArray[5], beerStylesArray[5]);
  var cluster = new Hops('Cluster', 7, 0, 0, 3, 7, 7, hopStatsArray[6], hopDescriptionArray[6], beerStylesArray[6]);
  var fuggle = new Hops('Fuggle', 4, 3, 7, 3, 0, 3, hopStatsArray[7], hopDescriptionArray[7], beerStylesArray[7]);
  var galena = new Hops('Galena', 13, 5, 5, 0, 7, 0, hopStatsArray[8], hopDescriptionArray[8], beerStylesArray[8]);
  var glacier = new Hops('Glacier', 6, 5, 0, 3, 5, 3, hopStatsArray[9], hopDescriptionArray[9], beerStylesArray[9]);
  var golding = new Hops ('Golding', 5, 0, 5, 0, 3, 7, hopStatsArray[10], hopDescriptionArray[10], beerStylesArray[10]);
  var hallertau = new Hops('Hallertau', 4, 0, 3, 0, 7, 5, hopStatsArray[11], hopDescriptionArray[11], beerStylesArray[11]);
  var horizon = new Hops('Horizon', 12, 0, 3, 3, 7, 5, hopStatsArray[12], hopDescriptionArray[12], beerStylesArray[12]);
  var liberty = new Hops('Liberty', 4, 5, 3, 0, 7, 3, hopStatsArray[13], hopDescriptionArray[13], beerStylesArray[13]);
  var magnum = new Hops('Magnum', 13, 0, 3, 5, 5, 3, hopStatsArray[14], hopDescriptionArray[14], beerStylesArray[14]);

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
