(()=>{
  const player = document.querySelector(".player");
   video = document.querySelector(".player__video"),
   progress = document.querySelector(".progress"),
   progressBar = document.querySelector(".progress__filled"),
   toggle = player.querySelector(".toggle"),
   skipButtons = player.querySelectorAll("[data-skip]"),
   ranges = player.querySelectorAll(".player__slider");

   const
    togglePlay = () => video[video.pasued? "play" : "pause"]();
    updateButton = () => toggle.textContent = video.paused ?  "►" : "❚ ❚",
    handleProgress = () => progressBar.style.flexBasis = `${video.currentTime / video.duration * 100}%`,

  // console.log(skip);
})();
