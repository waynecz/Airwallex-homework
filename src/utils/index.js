export const launchFullscreen = (ele = document.documentElement) => {
  if(ele.requestFullscreen) {
    ele.requestFullscreen();
  } else if(ele.mozRequestFullScreen) {
    ele.mozRequestFullScreen();
  } else if(ele.msRequestFullscreen){
    ele.msRequestFullscreen();
  } else if(ele.webkitRequestFullscreen) {
    ele.webkitRequestFullScreen();
  }
}
