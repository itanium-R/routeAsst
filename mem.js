function save(mId) {
  let fullSelectedLines = [];
  for (let rObj of routes) {
    let rElm = document.getElementById(rObj.id);
    let rColor = rElm.style.backgroundColor;
    if (!(rColor == "#EEE" || rColor == "rgb(238, 238, 238)")) {
      fullSelectedLines.push(rObj.id);
    }
  }
  localStorage.setItem('routeAsst' + areaName + mId, JSON.stringify(fullSelectedLines));
}

function load(mId) {
  let fullSelectedLines = [];
  fullSelectedLines = JSON.parse(localStorage.getItem('routeAsst' + areaName + mId) || '[]');
  for (let rObj of routes) {
    let rId = rObj.id;
    let rElm = document.getElementById(rId);
    if (fullSelectedLines.includes(rId)) {
      rElm.style.backgroundColor = rObj.color;
    } else {
      rElm.style.backgroundColor = "#EEE";
    }
  }
  save(0);
}

function init() {
  for (let rObj of routes) {
    let rId = rObj.id;
    let rElm = document.getElementById(rId);
    rElm.style.backgroundColor = "#EEE";
  }
  save(0);
}