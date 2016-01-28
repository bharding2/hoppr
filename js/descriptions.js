var addHopDrop = document.getElementById('addHopDrop');
for(var i = 0; i < allHops.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = allHops[i].hopName;
  option.value = i;
  addHopDrop.appendChild(option);
};
function handleHopProfile(event) {
  console.log(event);
  event.preventDefault();

var addHopName = event.target.name.value;
var addHopAlphaAcid = parseInt(event.target.AlphaAcid.value);
var addCitrus = parseInt(event.target.Citrus.value);
var addFruity = parseInt(event.target.Fruity.value);
var addPiney = parseInt(event.target.Piney.value);
var addSpicy = parseInt(event.target.Spicy.value);
var addFloral = parseInt(event.target.Floral.value);

var newHop = new Hops(addHopName, addHopAlphaAcid, addCitrus, addFruity, addPiney, addSpicy, addFloral);
console.log(newHop);

localStorage.setItem('allHops', JSON.stringify(allHops));

var newHopContent = document.getElementById('descriptionContent');
while(descriptionContent.firstChild) {
  descriptionContent.removeChild(descriptionContent.firstChild);
}
var populateH3 = document.createElement('h3');
populateH3.textContent = addHopName;
newHopContent.appendChild(populateH3);


  var alphaAcidContent = document.createElement('p');
  alphaAcidContent.textContent = 'Alpha Acid: ' + addHopAlphaAcid + '%';
  newHopContent.appendChild(alphaAcidContent);

  var flavorHead = document.createElement('p');
  flavorHead.textContent = 'Flavor Profile';
  newHopContent.appendChild(flavorHead);
  var flavorContent = document.createElement('p');
  flavorContent.textContent = 'Citrus: ' + addCitrus +
                              ' Fruity: '  + addFruity +
                              ' Piney: '  + addPiney +
                              ' Spicey: '  + addSpicy +
                              ' Floral: '  + addFloral;
  newHopContent.appendChild(flavorContent);

var addHopDrop = document.getElementById('addHopDrop');
addHopDrop.textContent = ' ';
for(var i = 0; i < allHops.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = allHops[i].hopName;
  option.value = i;
  addHopDrop.appendChild(option);
};

};

var addHopProfile =
document.getElementById('addhopprofile');
addHopProfile.addEventListener('submit', handleHopProfile);

var chooseHopDrop = document.getElementById('choosehopdropdown');

chooseHopDrop.addEventListener('submit', handleChooseHopDrop);

function handleChooseHopDrop(event) {
  console.log(event);
  event.preventDefault();

  hopIndex = parseInt(event.target.addHopDrop.value);

  var newHopContent = document.getElementById('descriptionContent');
  while(descriptionContent.firstChild) {
    descriptionContent.removeChild(descriptionContent.firstChild);
  }
  var populateH3 = document.createElement('h3');
  populateH3.textContent = allHops[hopIndex].hopName;
  newHopContent.appendChild(populateH3);

  var alphaAcidContent = document.createElement('p');
  alphaAcidContent.textContent = 'Alpha Acid: ' + allHops[hopIndex].alphaAcid + '%';
  newHopContent.appendChild(alphaAcidContent);

  var flavorHead = document.createElement('p');
  flavorHead.textContent = 'Flavor Profile';
  newHopContent.appendChild(flavorHead);
  var flavorContent = document.createElement('p');
  flavorContent.textContent = 'Citrus: ' + allHops[hopIndex].citrus +
                              ' Fruity: '  + allHops[hopIndex].fruity +
                              ' Piney: '  + allHops[hopIndex].piney +
                              ' Spicey: '  + allHops[hopIndex].spicey +
                              ' Floral: '  + allHops[hopIndex].floral;
  newHopContent.appendChild(flavorContent);
var hopStatsContent = document.createElement('p');
hopStatsContent.textContent = allHops[hopIndex].hopStats;
newHopContent.appendChild(hopStatsContent);
var hopDescriptionContent = document.createElement('p');
hopDescriptionContent.textContent = allHops[hopIndex].hopDescription;
newHopContent.appendChild(hopDescriptionContent);
var beerStylesContent = document.createElement('p');
beerStylesContent.textContent = allHops[hopIndex].beerStyles;
newHopContent.appendChild(beerStylesContent);

}
