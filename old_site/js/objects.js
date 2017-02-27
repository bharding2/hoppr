
var allHops = JSON.parse(localStorage.getItem('allHops'));
var allGrains = JSON.parse(localStorage.getItem('allGrains'));
var allYeasts = JSON.parse(localStorage.getItem('allYeasts'));

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

function Grains (grainName, degLov, extractPot) {
  this.grainName = grainName;
  this.degLov = degLov;
  this.extractPot = extractPot;
  allGrains.push(this);
}

function Yeasts (yeastName, attenuation) {
  this.yeastName = yeastName;
  this.attenuation = attenuation;
  allYeasts.push(this);
}

var hopStatsArray = [
  'Alpha Acid: 8 - 11% Beta Acid: 6 - 7% Co-Humulone: 21 - 24% Total Oil: 1.5 - 1.9 mL/100g',
  'Alpha Acid: 4.5 - 7% Beta Acid: 4.5 - 7% Co-Humulone: 33 - 40% Total Oil: 0.8 - 1.5 mL/100g',
  'Alpha Acid: 9.5 - 11.5% Beta Acid: 3.5 - 4.5% Co-Humulone: 28 -30% Total Oil: 1.5 - 2.5 mL/100g',
  'Alpha Acid: 12 - 14% Beta Acid: 3 - 4% Co-Humulone: 29 - 34% Total Oil: 1.5 - 2.5 mL/100g',
  'Alpha Acid: 11 - 13% Beta Acid: 3.5 - 4.5% Co-Humulone: 22 - 24% Total Oil: 2.2 - 2.8 mL/100g',
  'Alpha Acid: 14 - 16% Beta Acid: 4 - 5% Co-Humulone: 30 -35% Total Oil: 1.5 - 2.0 mL/100g',
  'Alpha Acid: 5.5 - 8.5% Beta Acid: 4.5 - 5.5% Co-Humulone: 36 - 42% Total Oil: 0.4 - 0.8 mL/100g',
  'Alpha Acid: 4 - 5.5% Beta Acid: 1.5 - 2% Co-Humulone: 25 - 32% Total Oil: 0.7 - 1.2 mL/100g',
  'Alpha Acid: 12 - 14% Beta Acid: 7 - 9% Co-Humulone: 37 - 42% Total Oil: 0.9 - 1.2 mL/100g',
  'Alpha Acid: ~5.5% Beta Acid: ~8.2% Co-Humulone: 11 - 13% Total Oil: 0.7 - 1.6 mL/100g',
  'Alpha Acid: 4 - 6% Beta Acid: 2 - 3% Co-Humulone: 20 -25% Total Oil: 0.4 - 1.0 mL/100g',
  'Alpha Acid: 3.5 - 5.5% Beta Acid: 3.5 - 5.5% Co-Humulone: 18 - 25% Total Oil: 0.6 - 1.5 mL/100g',
  'Alpha Acid: 11 - 13% Beta Acid: 6.5 - 8.5% Co-Humulone: 16 - 19% Total Oil: 1.5 - 2 mL/100g',
  'Alpha Acid: 3 - 5% Beta Acid: 3 - 4% Co-Humulone: 24 - 30% Total Oil: 0.6 - 1.8 mL/100g',
  'Alpha Acid: 10 - 14% Beta Acid: 4.5 - 7% Co-Humulone: 24 - 30% Total Oil: 1.9 - 3.0 mL/100g',
  'Alpha Acid: 14.5 - 16.5% Beta Acid: 4.3 - 5.3% Co-Humulone: 28 - 32% Total Oil: 1.2 - 2.2 mL/100g',
  'Alpha Acid: 4 - 8% Beta Acid: 5 - 7% Co-Humulone: 22 - 27% Total Oil: 1.6 - 3.4 mL/100g',
  'Alpha Acid: 12 - 13% Beta Acid: 6 - 8% Co-Humulone: ~24% Total Oil: ~1.1 mL/100g',
  'Alpha Acid: 8 - 10% Beta Acid: 3 - 5% Co-Humulone: 22 - 26% Total Oil: 1.5 - 2.0 mL/100g',
  'Alpha Acid: 12 - 14.5% Beta Acid: 4 - 6% Co-Humulone: 27 - 32% Total Oil: 0.7 - 0.9 mL/100g',
  'Alpha Acid: 7 - 9.5% Beta Acid: 4 - 5% Co-Humulone: 27 - 32% Total Oil: 0.7 - 0.9 mL/100g',
  'Alpha Acid: 3 - 4.5% Beta Acid: 3 - 4.5% Co-Humulone: 24 - 28% Total Oil: 0.5 - 1.0 mL/100g',
  'Alpha Acid: 12 - 14% Beta Acid: 4 - 5% Co-Humulone: 15 - 20% Total Oil: 2.0 - 2.5 mL/100g',
  'Alpha Acid: 10 - 16% Beta Acid: 6 - 7% Co-Humulone: ~23% Total Oil: 2.0 - 2.8 mL/100g',
  'Alpha Acid: 6 - 9% Beta Acid: 4 - 6% Co-Humulone: 22 - 28% Total Oil: 1.3 - 1.9 mL/100g',
  'Alpha Acid: 16 - 19% Beta Acid: 3.3 - 6% Co-Humulone: 26 - 33% Total Oil: 1.5 - 2.5 mL/100g',
  'Alpha Acid: 3 - 6% Beta Acid: 3 - 5% Co-Humulone: 22 - 29% Total Oil: 0.5 - 0.9 mL/100g',
  'Alpha Acid: 2 - 3.5% Beta Acid: 3 - 4.5% Co-Humulone: 23 - 38% Total Oil: 1.3 - 1.5 mL/100g',
  'Alpha Acid: 15 - 17% Beta Acid: 4.5 - 5.5% Co-Humulone: 24 - 26% Total Oil: 1.0 - 2.0 mL/100g',
  'Alpha Acid: 4 - 6% Beta Acid: 3 - 4.5% Co-Humulone: 30 - 35% Total Oil: 1 - 1.5 mL/100g'
];

var hopDescriptionArray = [
  'Floral, tropical and citrusy (lemon orange & grapefruit)',
  'Medium intense floral, citrus and grapefruit tones',
  'Medium intensity floral and citrus (lemon) tones',
  'Medium intensity Spice and Pine with subtle notes of grapefruit',
  'Strong citrus and tropical (grapefruit, passionfruit) tones',
  'Pungent, black pepper and licorice with subtle citrus overtone',
  'Strong floral and Spicy charecteristics',
  'Mild wood and fruit charecteristics',
  'Spicy, blackcurrant and citrus overtones',
  'Pleasant hoppy aroma',
  'Mild and delicate sweet floral aroma',
  'Mild yet spicy with herbal floral charecteristics',
  'Pleasant and spicy with floral charecteristics',
  'Mild and spicy with subtle lemon and citrus charecteristics',
  'No aroma',
  'Mild and resinous with floral and herbal tones',
  'Mild, herbal somewhat pungent or spicy',
  'White wine fruitiness with gooseberry and grape infused flavors',
  'Medium intensity, pine and mint characteristics',
  'Mild and pleasant with spicy, herbal tones',
  'Slightly spicy with herbal and floral characteristics',
  'Mild spice and earth tones',
  'Unique passionfruit, pine, earth and citrus characteristics',
  'Unique lemon and dill characteristics',
  'Herbal and spicy with a hint of floral and citrus characteristics',
  'Distinct spice, earthy, onion, garlic, and citrus tones',
  'Mild and pleasant with balanced earthy, herbal and floral impressions',
  'Mild and pleasant with spicy and floral tones',
  'Mild and resinous with subtle citrus, pine and herbal characteristics',
  'Mild and pleasant with slightly spicy and floral tones'
];

var beerStylesArray = [
  'IPA',
  'American Pale Ale',
  'American Ale',
  'American Pale Ale',
  'IPA',
  'Pale Ale',
  'Stout',
  'English Ale',
  'English Ale',
  'American Pale Ale',
  'Bitter',
  'Belgian Ale',
  'American Ale',
  'Bock',
  'Lager',
  'Stout',
  'Light Lager, Bock, and Hefeweizen',
  'American-style Pale Ale, IPA',
  'IPA,  Abbey Ale, Pale Ale, Hefeweizen, Porter',
  'Barley Wine, Stout, Strong Bitter',
  'Hefeweizen, Lager, Pilsner, Stout',
  'Belgian-style Ales',
  'IPA, American Pale Ale',
  'American Pale Ale, IPA, Saison',
  'Belgian-style Ales',
  'IPA, American Pale Ale, Stout',
  'Belgian-style Ales',
  'Lager, Pilsner',
  'IPA, American Pale Ale',
  'English-style Ale'
];

if (!allHops) {
  allHops = [];
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
  var millenium = new Hops('Millenium', 15, 0, 3, 3, 3, 7, hopStatsArray[15], hopDescriptionArray[15], beerStylesArray[15]);
  var mtHood = new Hops('Mt.Hood', 6, 0, 0, 3, 7, 5, hopStatsArray[16], hopDescriptionArray[16], beerStylesArray[16]);
  var nelsonSauvin = new Hops('Nelson Sauvin', 13, 3, 7, 0, 3, 7, hopStatsArray[17], hopDescriptionArray[17], beerStylesArray[17]);
  var northernBrewer = new Hops('Northern Brewer', 9, 0, 0, 7, 3, 3, hopStatsArray[18], hopDescriptionArray[18], beerStylesArray[18]);
  var nugget = new Hops('Nugget', 15, 0, 3, 0, 7, 7, hopStatsArray[19], hopDescriptionArray[19], beerStylesArray[19]);
  var perle = new Hops('Perle', 8, 0, 3, 0, 7, 5, hopStatsArray[20], hopDescriptionArray[20], beerStylesArray[20]);
  var saaz = new Hops('Saaz', 4, 0, 0, 3, 5, 5, hopStatsArray[21], hopDescriptionArray[21], beerStylesArray[21]);
  var simcoe = new Hops('Simcoe', 13, 7, 5, 5, 0, 0, hopStatsArray[22], hopDescriptionArray[22], beerStylesArray[22]);
  var sorachiAce = new Hops('Sorachi Ace', 14, 7, 5, 0, 0, 0, hopStatsArray[23], hopDescriptionArray[23], beerStylesArray[23]);
  var sterling = new Hops('Sterling', 8, 3, 0, 3, 7, 5, hopStatsArray[24], hopDescriptionArray[24], beerStylesArray[24]);
  var summit = new Hops('Summit', 18, 7, 0, 3, 7, 0, hopStatsArray[25], hopDescriptionArray[25], beerStylesArray[25]);
  var tettnang = new Hops('Tettnang', 4, 0, 0, 3, 7, 5, hopStatsArray[26], hopDescriptionArray[26], beerStylesArray[26]);
  var ultra = new Hops('Ultra', 3, 0, 3, 0, 5, 7, hopStatsArray[27], hopDescriptionArray[27], beerStylesArray[27]);
  var warrior = new Hops('Warrior', 16, 5, 0, 5, 0, 5, hopStatsArray[28], hopDescriptionArray[28], beerStylesArray[28]);
  var willamette = new Hops('Willamette', 5, 0, 3, 3, 5, 5, hopStatsArray[29], hopDescriptionArray[29], beerStylesArray[29]);
  localStorage.setItem('allHops', JSON.stringify(allHops));
}

if (!allGrains) {
  allGrains = [];
  var twoRow = new Grains('Two Row', 2, 36);
  var wheat = new Grains('Wheat', 2, 36);
  var vienna = new Grains('Vienna', 5, 36);
  var munich = new Grains('Munich', 10, 35);
  var biscuit = new Grains('Biscuit', 15, 35);
  var crystal80 = new Grains('Crystal 80', 80, 33);
  var chocolate = new Grains('Chocolate', 350, 27);
  var blackPatent = new Grains('Black Patent', 450, 26);
  var rye = new Grains('Rye', 3, 29);
  localStorage.setItem('allGrains', JSON.stringify(allGrains));
}

if (!allYeasts) {
  allYeasts = [];
  var us05 = new Yeasts('US-05 American', 0.75);
  var s04 = new Yeasts('S-04 British', 0.75);
  var s23 = new Yeasts('S-23 Lager', 0.75);
  var wb06 = new Yeasts('WB-06 Wheat Beer', 0.75);
  var be256 = new Yeasts('BE-256 Belgian', 0.75);
  localStorage.setItem('allYeasts', JSON.stringify(allYeasts));
}
