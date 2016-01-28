'use strict';

var beerHop = document.getElementById('beerHop');
for(var i = 0; i < allHops.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = allHops[i].hopName;
  option.value = i;
  beerHop.appendChild(option);
};

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
  this.yeast = yeast;
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
  var recipeSection = document.getElementById('recipeSection');

  var h3El = document.createElement('h3');
  h3El.textContent = this.beerName + ' ' + this.beerClass + ' ' + this.beerStyle;
  recipeSection.appendChild(h3El);

  var grainHead = document.createElement('h4');
  grainHead.textContent = 'Grain Bill';
  recipeSection.appendChild(grainHead);
  var grainBill = document.createElement('ul');
  recipeSection.appendChild(grainBill);
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

  var hopHead = document.createElement('h4');
  hopHead.textContent = 'Hop Additions';
  recipeSection.appendChild(hopHead);
  var hopAdds = document.createElement('ul');
  recipeSection.appendChild(hopAdds);

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

  var yeastHead = document.createElement('h4');
  yeastHead.textContent = 'Yeast';
  recipeSection.appendChild(yeastHead);
  var yeastUl = document.createElement('ul');
  recipeSection.appendChild(yeastUl);
  var yeastAdd = document.createElement('li');
  yeastAdd.textContent = this.yeast.yeastName;
  yeastUl.appendChild(yeastAdd);

  var beerStats = document.createElement('h4');
  beerStats.textContent = 'Beer Stats';
  recipeSection.appendChild(beerStats);
  var statsList = document.createElement('ul');
  recipeSection.appendChild(statsList);
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

  var colorBox = document.getElementById('colorBox');
  colorBox.removeAttribute('hidden');
  if (this.colorSRM <= 5) {
    colorBox.setAttribute('class', 'light');
  } else if (this.colorSRM > 5 && this.colorSRM <= 10) {
    colorBox.setAttribute('class', 'pale');
  } else if (this.colorSRM > 10 && this.colorSRM <= 15) {
    colorBox.setAttribute('class', 'amber');
  } else if (this.colorSRM > 15 && this.colorSRM <= 20) {
    colorBox.setAttribute('class', 'red');
  } else if (this.colorSRM > 20 && this.colorSRM <= 25) {
    colorBox.setAttribute('class', 'darkred');
  } else if (this.colorSRM > 25 && this.colorSRM <= 30) {
    colorBox.setAttribute('class', 'brown');
  } else if (this.colorSRM > 30 && this.colorSRM <= 35) {
    colorBox.setAttribute('class', 'darkbrown');
  } else if (this.colorSRM > 35 && this.colorSRM <= 40) {
    colorBox.setAttribute('class', 'black');
  } else {
    colorBox.setAttribute('class', 'darkblack');
  }

  var beerImg = document.getElementById('beerImg');
  beerImg.removeAttribute('hidden');
  if (this.colorSRM <= 5) {
    beerImg.setAttribute('class', 'lightBeer');
  } else if (this.colorSRM > 5 && this.colorSRM <= 10) {
    beerImg.setAttribute('class', 'paleBeer');
  } else if (this.colorSRM > 10 && this.colorSRM <= 15) {
    beerImg.setAttribute('class', 'amberBeer');
  } else if (this.colorSRM > 15 && this.colorSRM <= 20) {
    beerImg.setAttribute('class', 'redBeer');
  } else if (this.colorSRM > 20 && this.colorSRM <= 25) {
    beerImg.setAttribute('class', 'darkredBeer');
  } else if (this.colorSRM > 25 && this.colorSRM <= 30) {
    beerImg.setAttribute('class', 'brownBeer');
  } else if (this.colorSRM > 30 && this.colorSRM <= 35) {
    beerImg.setAttribute('class', 'darkbrownBeer');
  } else if (this.colorSRM > 35 && this.colorSRM <= 40) {
    beerImg.setAttribute('class', 'blackBeer');
  } else {
    beerImg.setAttribute('class', 'darkblackBeer');
  }
}




function getSecondHop(hopOne) {
  var percentAlikeArray = [];
  for (var i = 0; i < allHops.length; i++) {
    var diffCitrus = Math.abs(hopOne.citrus - allHops[i].citrus);
    var diffFruity = Math.abs(hopOne.fruity - allHops[i].fruity);
    var diffPiney = Math.abs(hopOne.piney - allHops[i].piney);
    var diffSpicey = Math.abs(hopOne.spicey - allHops[i].spicey);
    var diffFloral = Math.abs(hopOne.floral - allHops[i].floral);
    var totalDiff = diffCitrus + diffFruity + diffPiney + diffSpicey + diffFloral;
    allHops[i].percentAlike = ((50 - totalDiff) / 50).toFixed(2);

    percentAlikeArray.push(allHops[i]);
  }

  percentAlikeArray.sort(function (a, b) {return b.percentAlike - a.percentAlike;});
  var randomChoice = Math.floor(Math.random() * 5);

  return percentAlikeArray[randomChoice];
}

function getBaseGrain(beerStyle) {
  if (beerStyle === 'Hefe' || beerStyle ==='Weizenbock' || beerStyle === 'Dunkelweizen') {
    return allGrains[1];
  } else {
    return allGrains[0];
  }
}

function getBaseGrainAmount(beerClass) {
  if (beerClass === 'Session') {
    return 6;
  } else if (beerClass === 'Standard') {
    return 9;
  } else if (beerClass === 'Imperial') {
    return 12;
  } else {
    return 15;
  }
}

function getSpecGrains(beerStyle) {
  if (beerStyle === 'Pilsner') {
    return [allGrains[2], 3, allGrains[3], 0];
  } else if (beerStyle === 'Pale') {
    return [allGrains[2], 2, allGrains[3], 1];
  } else if (beerStyle === 'Amber') {
    return [allGrains[3], 2, allGrains[5], 1];
  } else if (beerStyle === 'Brown') {
    return [allGrains[5], 2.5, allGrains[6], 0.5];
  } else if (beerStyle === 'Red') {
    return [allGrains[5], 2, allGrains[3], 1];
  } else if (beerStyle === 'IPA') {
    return [allGrains[3], 2, allGrains[2], 1];
  } else if (beerStyle === 'Hefe') {
    return [allGrains[2], 2, allGrains[4], 1];
  } else if (beerStyle === 'Porter') {
    return [allGrains[3], 2, allGrains[7], 1];
  } else if (beerStyle === 'Stout') {
    return [allGrains[3], 1, allGrains[6], 2];
  } else if (beerStyle === 'Belgian'){
    return [allGrains[4], 2, allGrains[2], 1];
  } else if (beerStyle === 'Rye') {
    return [allGrains[8], 3, allGrains[3], 0];
  } else if (beerStyle === 'Blonde') {
    return [allGrains[1], 2, allGrains[3], 1];
  } else if (beerStyle === 'CDA') {
    return [allGrains[2], 2, allGrains[7], 1];
  } else if (beerStyle === 'Weizenbock') {
    return [allGrains[5], 3, allGrains[3], 0];
  } else {
    return [allGrains[3], 2.25, allGrains[6], 0.75];
  }
}

function getHopAdds (beerStyle, beerClass) {
  var lowHop = [];
  var midHop = [];
  var highHop = [];

  if (beerClass === 'Session') {
    lowHop = [1, 0, 1];
    midHop = [1, 1, 0];
    highHop = [1, 1, 1];
  } else if (beerClass === 'Standard') {
    lowHop = [1, 1, 1];
    midHop = [1, 1, 1];
    highHop = [2, 2, 2];
  } else if (beerClass === 'Imperial') {
    lowHop = [1, 1, 2];
    midHop = [1, 2, 1];
    highHop = [4, 2, 2];
  } else {
    lowHop = [1, 1, 2];
    midHop = [1, 2, 1];
    highHop = [4, 4, 2];
  }

  if (beerStyle === 'IPA' || beerStyle === 'CDA') {
    return highHop;
  } else if (beerStyle === 'Pilsner' || beerStyle === 'Pale' || beerStyle === 'Red' || beerStyle === 'Porter' || beerStyle === 'Rye') {
    return midHop;
  } else {
    return lowHop;
  }
}

function getYeast(beerStyle) {
  if (beerStyle === 'Pilsner') {
    return allYeasts[2];
  } else if (beerStyle === 'Belgian') {
    return allYeasts[4];
  } else if (beerStyle === 'Weizenbock' || beerStyle === 'Dunkelweizen' || beerStyle === 'Hefe') {
    return allYeasts[3];
  } else if (beerStyle === 'Pale' || beerStyle === 'Amber' || beerStyle === 'Red' || beerStyle === 'IPA' || beerStyle === 'Blonde') {
    return allYeasts[0];
  } else {
    return allYeasts[1];
  }
}

var makeBeer = document.getElementById('makeBeer');

function handleMakeBeer (event) {
  console.log(event);
  event.preventDefault();

  var beerName = event.target.beerName.value;
  var beerHop = event.target.beerHop.value;
  var hop1 = allHops[+beerHop];
  var hop2 = getSecondHop(hop1);
  while (hop2 === hop1) {
    hop2 = getSecondHop(hop1);
  }
  var beerStyle = event.target.beerStyle.value;
  var beerClass = event.target.beerClass.value;
  var baseGrain = getBaseGrain(beerStyle);
  var baseGrainAmount = getBaseGrainAmount(beerClass);
  var specGrainArray = getSpecGrains(beerStyle);
  var hopAddsArray = getHopAdds(beerStyle, beerClass);
  var yeastAdd = getYeast(beerStyle);

  var newBeer = new Beer(beerName, beerClass, beerStyle, baseGrain, baseGrainAmount, specGrainArray[0], specGrainArray[1], specGrainArray[2], specGrainArray[3], hop1, hopAddsArray[0], hop2, hopAddsArray[1], hop2, hopAddsArray[2], yeastAdd);

  var recipeSection = document.getElementById('recipeSection');
  while(recipeSection.firstChild) {
    recipeSection.removeChild(recipeSection.firstChild);
  }

  newBeer.renderRecipe();
}

makeBeer.addEventListener('submit', handleMakeBeer);
