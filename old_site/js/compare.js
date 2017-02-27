
var percentArray = [];

function calcBitteringComp(compHop) {
  for (var i = 0; i < allHops.length; i++) {
  var diffAlphaAcid = 4 * Math.abs(compHop.alphaAcid - allHops[i].alphaAcid);
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
  var diffAlphaAcid = Math.abs(compHop.alphaAcid - allHops[i].alphaAcid);
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
  var diffAlphaAcid = 0 * Math.abs(compHop.alphaAcid - allHops[i].alphaAcid);
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

for(var i = 0; i < allHops.length; i++) {
  $('#addHopDrop').append('<option value="' + i + '">' + allHops[i].hopName + '</option>');
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

  $('#compareContent').empty();
  $('#compareContent').append('<h3>' + compHop.hopName + ' (' + compHop.alphaAcid + '% AA) Matches</h3>');

  for (var i = 1; i < 11; ++i) {
    $('#compareContent').append('<p>' + percentArray[i].hopName +' (' + percentArray[i].alphaAcid + '% AA): ' + percentArray[i].percentAlike + '%</p>');
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

  $('#compareContent').empty();
  $('#compareContent').append('<h3>Your top ten flavor profile matches</h3>');

  for (var i = 0; i < 10; ++i) {
    $('#compareContent').append('<p>' + percentArray[i].hopName +' (' + percentArray[i].alphaAcid + '% AA): ' + percentArray[i].percentAlike + '%</p>');
  }

}
var compareHops = document.getElementById('compareHops');
compareHops.addEventListener('submit', handleHopComp);

var hopProfile = document.getElementById('hopProfile');
hopProfile.addEventListener('submit', handleHopProfile);
