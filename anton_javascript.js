const videoElement = document.getElementById("videoJumpscare");
document.getElementById("videoJumpscare").style.display = "block";
document.getElementById("videoJumpscare").play();
document.getElementById("videoJumpscare").loop = true;
document.body.style.overflow = "hidden";
function disableInteraction(event) {
    event.preventDefault();
    event.stopPropagation();
}
window.addEventListener("keydown", disableInteraction, true);
window.addEventListener("keyup", disableInteraction, true);
window.addEventListener("contextmenu", disableInteraction, true);
window.addEventListener("click", disableInteraction, true);
window.addEventListener("dblclick", disableInteraction, true);
window.addEventListener("mousedown", disableInteraction, true);
window.addEventListener("wheel", disableInteraction, true);
window.addEventListener("touchstart", disableInteraction, true);
window.addEventListener("touchmove", disableInteraction, true);
window.addEventListener("touchend", disableInteraction, true);
document.documentElement.style.overflow = 'hidden';
videoElement.addEventListener("ended", function() {
    videoElement.currentTime = 0;
    videoElement.play();
});
