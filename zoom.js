
// zoom処理
// cf: https://gist.github.com/cognitom/de11ba8cf4f4b98ac8ab
let pinching = false;
let d0 = 1;
let d1 = 1;
document.addEventListener("touchmove", function (e) {
  if (e.touches.length == 2) {
    if (!pinching) {
      pinching = true;
      d0 = Math.sqrt(
        Math.pow(e.touches[1].screenX - e.touches[0].screenX, 2) +
        Math.pow(e.touches[1].screenY - e.touches[0].screenY, 2)
      );
    } else {
      d1 = Math.sqrt(
        Math.pow(e.touches[1].screenX - e.touches[0].screenX, 2) +
        Math.pow(e.touches[1].screenY - e.touches[0].screenY, 2)
      );
      let magnif = d1 / d0;
      if (magnif > 1.5) zoom(+0.1);
      if (magnif < 0.7) zoom(-0.1);
    }
  }
});

document.addEventListener("touchend", function (e) {
  pinching = false;
});

function zoom(zoomOffset = 0) {
  zoomLevel -= (-zoomOffset);
  save(0);
  drawRoute();
  load(0);
  localStorage.setItem('routeAsstZoomLevel', zoomLevel);
}