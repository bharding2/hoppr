var addHopDrop = document.getElementById('addHopDrop');
for(var i = 0; i < allHops.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = allHops[i].hopName;
  option.value = allHops[i];
  addHopDrop.appendChild(option);
};
