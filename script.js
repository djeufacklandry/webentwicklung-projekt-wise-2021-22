/*Unity Game - Java Script*/
var buildUrl = "Build";
var loaderUrl = buildUrl + "/Maze Runner Vers. 1.01.loader.js";
var config = {
  dataUrl: buildUrl + "/Maze Runner Vers. 1.01.data",
  frameworkUrl: buildUrl + "/Maze Runner Vers. 1.01.framework.js",
  codeUrl: buildUrl + "/Maze Runner Vers. 1.01.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DanDev",
  productName: "Maze Runner",
  productVersion: "1.01",
};

var container = document.querySelector("#unity-container");
var canvas = document.querySelector("#unity-canvas");
var loadingBar = document.querySelector("#unity-loading-bar");
var progressBarFull = document.querySelector("#unity-progress-bar-full");
var fullscreenButton = document.querySelector("#unity-fullscreen-button");
var mobileWarning = document.querySelector("#unity-mobile-warning");

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  container.className = "unity-mobile";
  config.devicePixelRatio = 1;
  mobileWarning.style.display = "block";
  setTimeout(() => {
    mobileWarning.style.display = "none";
  }, 5000);
} else {
  canvas.style.width = "960px";
  canvas.style.height = "600px";
}
loadingBar.style.display = "block";

var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
  createUnityInstance(canvas, config, (progress) => {
    progressBarFull.style.width = 100 * progress + "%";
  }).then((unityInstance) => {
    loadingBar.style.display = "none";
    fullscreenButton.onclick = () => {
      unityInstance.SetFullscreen(1);
    };
  }).catch((message) => {
    alert(message);
  });
};
document.body.appendChild(script);