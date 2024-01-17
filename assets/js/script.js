// Function to check if the device is a phone
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Wait for the entire page to be fully loaded, including images and other resources
window.onload = function () {
  // Dynamically create script element and set its attributes
  var scriptElement = document.createElement('script');
  scriptElement.type = 'module';
  scriptElement.src = 'https://unpkg.com/@splinetool/viewer@1.0.29/build/spline-viewer.js';

  // Dynamically create spline-viewer element and set its attributes
  var splineViewerElement = document.createElement('spline-viewer');
  splineViewerElement.setAttribute('loading-anim-type', 'none');

  // Check if the device is a phone and append the script and spline-viewer elements to .hero
  if (isMobile()) {
    splineViewerElement.setAttribute('url', 'https://prod.spline.design/dAeh4EN-fQTpL2b4/scene.splinecode');
    var heroElement = document.querySelector('.hero');
    if (heroElement) {
      heroElement.appendChild(scriptElement);
      heroElement.appendChild(splineViewerElement);
    } else {
      // Handle the case where .hero is not found
      console.error('.hero element not found.');
    }
  } else {
    var heroElement = document.querySelector('.hero');
    if (heroElement) {
      splineViewerElement.setAttribute('url', 'https://prod.spline.design/y22H62amPPOApJmx/scene.splinecode');
      // If it's not a phone, you can add additional logic or elements here
      heroElement.appendChild(scriptElement);
      heroElement.appendChild(splineViewerElement);
    }else {
      // Handle the case where .hero is not found
      console.error('.hero element not found.');
    }
  }
};

