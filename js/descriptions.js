var addHopDrop = document.getElementById('addHopDrop');
for(var i = 0; i < allHops.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = allHops[i].hopName;
  option.value = allHops[i];
  addHopDrop.appendChild(option);
};
function handleHopProfile(event) {
  console.log(event);
  event.preventDefault();

var addHopName = event.target.name.value;
var addHopAlphaAcid = event.target.AlphaAcid.value;
var addCitrus = event.target.Citrus.value;
var addFruity = event.target.Fruity.value;
var addPiney = event.target.Piney.value;
var addSpicy = event.target.Spicy.value;
var addFloral = event.target.Floral.value;

var newHop = new Hops(addHopName, addHopAlphaAcid, addCitrus, addFruity, addPiney, addSpicy, addFloral);
console.log(newHop);
allHops.push(newHop);
};

var addHopProfile =
document.getElementById('addhopprofile');
addHopProfile.addEventListener('submit', handleHopProfile);
