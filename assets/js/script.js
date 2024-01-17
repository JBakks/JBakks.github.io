// Function to check if the device is a phone
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Dynamically create script element and set its attributes
  var scriptElement = document.createElement('script');
  scriptElement.type = 'module';
  scriptElement.src = 'https://unpkg.com/@splinetool/viewer@1.0.29/build/spline-viewer.js';

  // Dynamically create spline-viewer element and set its attributes
  var splineViewerElement = document.createElement('spline-viewer');
  splineViewerElement.setAttribute('loading-anim-type', 'none');
  splineViewerElement.setAttribute('url', 'https://prod.spline.design/dAeh4EN-fQTpL2b4/scene.splinecode');

  // Check if the device is a phone and append the script and spline-viewer elements to .hero
  if (isMobile()) {
    var heroElement = document.querySelector('.hero');
    if (heroElement) {
      heroElement.appendChild(scriptElement);
      heroElement.appendChild(splineViewerElement);
    } else {
      // Handle the case where .hero is not found
      console.error('.hero element not found.');
    }
  } else {
    // If it's not a phone, you can add additional logic or elements here
    document.body.appendChild(scriptElement);
    document.body.appendChild(splineViewerElement);
  }
});
