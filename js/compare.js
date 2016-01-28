
var percentArray = [];

function calcBitteringComp(compHop) {
  for (var i = 0; i < allHops.length; i++) {
  var diffAlphaAcid = 4 * Math.abs(compHop.alphaAcid - allHops[i].alphaAcid); //36
  var diffCitrus = Math.abs(compHop.citrus - allHops[i].citrus);
  var diffFruity = Math.abs(compHop.fruity - allHops[i].fruity);
  var diffPiney = Math.abs(compHop.piney - allHops[i].piney);
  var diffSpicey = Math.abs(compHop.spicey - allHops[i].spicey);
  var diffFloral = Math.abs(compHop.floral - allHops[i].floral);
  var totalDiff = diffAlphaAcid + diffCitrus + diffFruity + diffPiney + diffSpicey + diffFloral;
  allHops[i].percentAlike = parseInt((((117 - totalDiff) / 117) * 100).toFixed(0));

  percentArray.push(allHops[i]);
  }
}

function calcAromaComp(compHop) {
  for (var i = 0; i < allHops.length; i++) {
  var diffAlphaAcid = Math.abs(compHop.alphaAcid - allHops[i].alphaAcid); //18
  var diffCitrus = Math.abs(compHop.citrus - allHops[i].citrus);
  var diffFruity = Math.abs(compHop.fruity - allHops[i].fruity);
  var diffPiney = Math.abs(compHop.piney - allHops[i].piney);
  var diffSpicey = Math.abs(compHop.spicey - allHops[i].spicey);
  var diffFloral = Math.abs(compHop.floral - allHops[i].floral);
  var totalDiff = diffAlphaAcid + diffCitrus + diffFruity + diffPiney + diffSpicey + diffFloral;
  allHops[i].percentAlike = parseInt((((63 - totalDiff) / 63) * 100).toFixed(0));

  percentArray.push(allHops[i]);
  }
}

function calcDryhopComp(compHop) {
  for (var i = 0; i < allHops.length; i++) {
  var diffAlphaAcid = 0 * Math.abs(compHop.alphaAcid - allHops[i].alphaAcid); //0
  var diffCitrus = Math.abs(compHop.citrus - allHops[i].citrus);
  var diffFruity = Math.abs(compHop.fruity - allHops[i].fruity);
  var diffPiney = Math.abs(compHop.piney - allHops[i].piney);
  var diffSpicey = Math.abs(compHop.spicey - allHops[i].spicey);
  var diffFloral = Math.abs(compHop.floral - allHops[i].floral);
  var totalDiff = diffAlphaAcid + diffCitrus + diffFruity + diffPiney + diffSpicey + diffFloral;
  allHops[i].percentAlike = parseInt((((45 - totalDiff) / 45) * 100).toFixed(0));

  percentArray.push(allHops[i]);
  }
}

var addHopDrop = document.getElementById('addHopDrop');
for(var i = 0; i < allHops.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = allHops[i].hopName;
  option.value = i;
  addHopDrop.appendChild(option);
};

function handleHopComp(event) {
  console.log(event);
  event.preventDefault();

  hopIndex = parseInt(event.target.addHopDrop.value);
  var compHop = allHops[hopIndex];
  var hopUse = event.target.hopUse.value;

  if (hopUse === 'bittering') {
    percentArray = [];
    calcBitteringComp(compHop);
  } else if (hopUse === 'aroma') {
    percentArray = [];
    calcAromaComp(compHop);
  } else {
    percentArray = [];
    calcDryhopComp(compHop);
  }

  percentArray.sort(function (a, b) {return b.percentAlike - a.percentAlike;});

  var compareContent = document.getElementById('compareContent');

  while(compareContent.firstChild) {
    compareContent.removeChild(compareContent.firstChild);
  }
  var nameH3 = document.createElement('h3');
  nameH3.textContent = compHop.hopName +' (' + compHop.alphaAcid + '% AA) Matches';
  compareContent.appendChild(nameH3);

  for (var i = 1; i < 11; ++i) {
    var pComp = document.createElement('p');
    pComp.textContent = percentArray[i].hopName +' (' + percentArray[i].alphaAcid + '% AA): ' + percentArray[i].percentAlike + '%';
    compareContent.appendChild(pComp);
  }
}
function handleHopProfile(event) {
  console.log(event);
  event.preventDefault();

  var profileCompHop = new Object();
  profileCompHop.alphaAcid = 0;
  profileCompHop.citrus = parseInt(event.target.citrus.value);
  profileCompHop.floral = parseInt(event.target.floral.value);
  profileCompHop.fruity = parseInt(event.target.fruity.value);
  profileCompHop.piney = parseInt(event.target.piney.value);
  profileCompHop.spicey = parseInt(event.target.spicy.value);
  percentArray = [];
  calcDryhopComp(profileCompHop);

  percentArray.sort(function(a, b) {return b.percentAlike - a.percentAlike;});

  var compareContent = document.getElementById('compareContent');

  while(compareContent.firstChild) {
    compareContent.removeChild(compareContent.firstChild);
}
  var profileH3 = document.createElement('h3');
  profileH3.textContent = 'Your top ten flavor profile matches';
  compareContent.appendChild(profileH3);

  for (var i = 0; i < 10; ++i) {
    var pComp = document.createElement('p');
    pComp.textContent = percentArray[i].hopName +' (' + percentArray[i].alphaAcid + '% AA): ' + percentArray[i].percentAlike + '%';
    compareContent.appendChild(pComp);
  }

}
var compareHops = document.getElementById('compareHops');
compareHops.addEventListener('submit', handleHopComp);

var hopProfile = document.getElementById('hopProfile');
hopProfile.addEventListener('submit', handleHopProfile);
