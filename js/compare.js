function hopComp(alphaAcid, citrus, fruity, piney, spicey, floral) {
  this.alphaAcid = alphaAcid;
  this.citrus = citrus;
  this.fruity = fruity;
  this.piney = piney;
  this.spicey = spicey;
  this.floral = floral;
  // allHops.push(this);
}

var protohop = {
  alphaAcid: 16,
  citrus: 1,
  fruity: 4,
  piney: 7,
  spicey: 4,
  floral: 4,
}

var percentArray = [];

for (var i = 0; i < allHops.length; i++) {

var diffAlphaAcid = Math.abs(protohop.alphaAcid - allHops[i].alphaAcid);

var diffCitrus = Math.abs(protohop.citrus - allHops[i].citrus);

var diffFruity = Math.abs(protohop.fruity - allHops[i].fruity);

var diffPiney = Math.abs(protohop.piney - allHops[i].piney);

var diffSpicey = Math.abs(protohop.spicey - allHops[i].spicey);

var diffFloral = Math.abs(protohop.floral - allHops[i].floral);

var totalDiff = diffAlphaAcid + diffCitrus + diffFruity + diffPiney + diffSpicey + diffFloral;

var percentDiff = ((68 - totalDiff) / 68).toFixed(2);

percentArray.push(percentDiff);

console.log(percentDiff);

}

var addHopDrop = document.getElementById('addHopDrop');
for(var i = 0; i < allHops.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = allHops[i].hopName;
  option.value = allHops[i];
  addHopDrop.appendChild(option);
};

function handleHopChoice(event) {

}

function handleHopProfile(event) {

}
