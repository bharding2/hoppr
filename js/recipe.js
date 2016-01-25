'use strict';

function Grain (grainName, degLov, extractPot) {
  this.grainName = grainName;
  this.degLov = degLov;
  this.extractPot = extractPot;
}

function Yeast (yeastName, attenuation) {
  this.yeastName = yeastName;
  this.attenuation = attenuation;
}

function Beer(beerName, beerClass, beerStyle, baseGrain, baseAmount, specGrain1, spec1Amount, specGrain2, spec2Amount, bitHop, bitAmount, flavHop, flavAmount, dryHop, dryAmount, yeast) {
  this.beerName = beerName;
  this.beerClass = beerClass;
  this.beerStyle = beerStyle;
  this.baseGrain = baseGrain;
  this.baseAmount = baseAmount;
  this.specGrain1 = specGrain1;
  this.spec1Amount = spec1Amount;
  this.specGrain2 = specGrain2;
  this.spec2Amount = spec2Amount;
  this.bitHop = bitHop;
  this.bitAmount = bitAmount;
  this.bitTime = 60;
  this.flavHop = flavHop;
  this.flavAmount = flavAmount;
  this.flavTime = 15;
  this.dryHop = dryHop;
  this.dryAmount = dryAmount;
  this.yeast = yeast
  this.batchSize = 5;
  this.mashEff = 0.75;
  this.colorSRM = this.calcSRM();
  this.oGrav = this.calcOG();
  this.fGrav = this.calcFG();
  this.alcBV = this.calcABV();
  this.totalIBU = this.calcIBU();
}

Beer.prototype.calcIBU = function() {
  var bitIBU = 1.65 * Math.pow(0.000125, this.oGrav - 1) * (1-Math.pow(Math.E, -0.04 * this.bitTime / 4.14)) * this.bitAmount * this.bitHop.alphaAcid/100 * 7490 / (this.batchSize * (1 + (this.oGrav - 1.05)/0.02));

  var flavIBU = 1.65 * Math.pow(0.000125, this.oGrav -1) * (1-Math.pow(Math.E, -0.04 * this.flavTime / 4.14)) * this.flavAmount * this.flavHop.alphaAcid/100 * 7490 / (this.batchSize * (1 + (this.oGrav - 1.05)/0.02));

  var totalIBU = bitIBU + flavIBU;
  return totalIBU;
}

Beer.prototype.calcSRM = function() {
  var baseMCU = this.baseAmount * this.baseGrain.degLov;
  var spec1MCU = this.spec1Amount * this.specGrain1.degLov;
  var spec2MCU = this.spec2Amount * this.specGrain2.degLov;
  var totalMCU = (baseMCU + spec1MCU + spec2MCU)/this.batchSize;
  var colorSRM = 1.4922 * Math.pow(totalMCU, 0.6859);
  return colorSRM;
}

Beer.prototype.calcOG = function() {
  var baseGU = this.baseAmount * this.baseGrain.extractPot * this.mashEff;
  var spec1GU = this.spec1Amount * this.specGrain1.extractPot * this.mashEff;
  var spec2GU = this.spec2Amount * this.specGrain2.extractPot * this.mashEff;
  var totalGU = (baseGU + spec1GU + spec2GU)/this.batchSize;
  var totalOG = 1 + (totalGU/1000);
  return totalOG;
}

Beer.prototype.calcFG = function(){
  var totalFG = this.oGrav - ((this.oGrav - 1) * this.yeast.attenuation);
  return totalFG;
}

Beer.prototype.calcABV = function(){
  var totalABV = (this.oGrav - this.fGrav) * 131;
  return totalABV;
}

Beer.prototype.renderRecipe = function(){
  var testSection = document.getElementById('recipeSection');
  var h3El = document.createElement('h3');
  h3El.textContent = this.beerName + ' ' + this.beerClass + ' ' + this.beerStyle;
  testSection.appendChild(h3El);

  var grainHead = document.createElement('p');
  grainHead.textContent = 'Grain Bill';
  testSection.appendChild(grainHead);
  var grainBill = document.createElement('ul');
  testSection.appendChild(grainBill);
  var listBaseGrain = document.createElement('li');
  listBaseGrain.textContent = this.baseGrain.grainName + ' (' + this.baseGrain.degLov + 'L) : ' + this.baseAmount + ' lbs';
  grainBill.appendChild(listBaseGrain);

  if (this.spec1Amount > 0) {
    var listSpec1 = document.createElement('li');
    listSpec1.textContent = this.specGrain1.grainName + ' (' + this.specGrain1.degLov + 'L) : ' + this.spec1Amount + ' lbs';
    grainBill.appendChild(listSpec1);
  }

  if (this.spec2Amount > 0) {
    var listSpec2 = document.createElement('li');
    listSpec2.textContent = this.specGrain2.grainName + ' (' + this.specGrain2.degLov + 'L) : ' + this.spec2Amount + ' lbs';
    grainBill.appendChild(listSpec2);
  }

  var hopHead = document.createElement('p');
  hopHead.textContent = 'Hop Additions';
  testSection.appendChild(hopHead);
  var hopAdds = document.createElement('ul');
  testSection.appendChild(hopAdds);

  if (this.bitAmount > 0) {
    var listBitHop = document.createElement('li');
    listBitHop.textContent = this.bitHop.hopName + ' (' + this.bitHop.alphaAcid + '% AA) : ' + this.bitAmount + ' oz : boil time : ' + this.bitTime + ' min';
    hopAdds.appendChild(listBitHop);
  }

  if (this.flavAmount > 0) {
    var listFlavHop = document.createElement('li');
    listFlavHop.textContent = this.flavHop.hopName + ' (' + this.flavHop.alphaAcid + '% AA) : ' + this.flavAmount + ' oz : boil time : ' + this.flavTime + ' min';
    hopAdds.appendChild(listFlavHop);
  }

  if (this.dryAmount > 0) {
    var listDryHop = document.createElement('li');
    listDryHop.textContent = this.dryHop.hopName  + ' (' + this.dryHop.alphaAcid + '% AA) : ' + this.dryAmount + ' oz : dry hop time : 1 week';
    hopAdds.appendChild(listDryHop);
  }

  var yeastAdd = document.createElement('p');
  yeastAdd.textContent = this.yeast.yeastName;

  var beerStats = document.createElement('p');
  beerStats.textContent = 'Beer Stats';
  testSection.appendChild(beerStats);
  var statsList = document.createElement('ul');
  testSection.appendChild(statsList);
  var statsOG = document.createElement('li');
  statsOG.textContent = 'OG : ' + this.oGrav.toFixed(3);
  statsList.appendChild(statsOG);
  var statsFG = document.createElement('li');
  statsFG.textContent = 'FG : ' + this.fGrav.toFixed(3);
  statsList.appendChild(statsFG);
  var statsABV = document.createElement('li');
  statsABV.textContent = 'ABV : ' + this.alcBV.toFixed(1) + '%';
  statsList.appendChild(statsABV);
  var statsIBU = document.createElement('li');
  statsIBU.textContent = 'IBU : ' + this.totalIBU.toFixed(0);
  statsList.appendChild(statsIBU);
  var statsSRM = document.createElement('li');
  statsSRM.textContent = 'SRM : ' + this.colorSRM.toFixed(0);
  statsList.appendChild(statsSRM);
}

var twoRow = new Grain('Two Row', 2, 36);
var munich = new Grain('Munich', 10, 35);
var crystal80 = new Grain('Crystal 80', 80, 33);
var us05 = new Yeast('us05', 0.75);
var amber = new Beer('Prototype', 'session', 'amber ale', twoRow, 6, munich, 2, crystal80, 1, cascade, 1, amarillo, 1, amarillo, 1, us05);
amber.renderRecipe();
