(()=>{
  const player = document.querySelector(".player");
   video = document.querySelector(".player__video"),
   progress = document.querySelector(".progress"),
   progressBar = document.querySelector(".progress__filled"),
   toggle = player.querySelector(".toggle"),
   skipButtons = player.querySelectorAll("[data-skip]"),
   ranges = player.querySelectorAll(".player__slider");

   const
    togglePlay = () => video[video.paused ? "play" : "pause"]();
    updateButton = () => toggle.textContent = video.paused ?  "►" : "❚ ❚",
    handleProgress = () => progressBar.style.flexBasis = `${video.currentTime / video.duration * 100}%`,
    scrub = e =>
      video.currentTime = e.offsetX / progress.offsetWidth * video.duration,
    progressMoved = e => mousedown && scrub(e),
    progressUp = e => mousedown = false,
    progressDown = e => mousedown = true,
    bClick = b => video.currentTime += parseFloat(b.dataset.skip),
    updateRange = (range, e) => video[range.name] = range.value;

  let mousedown = false;

  const events = [
    {event: "click", handler: togglePlay, target: video},
    {event: "play", handler: updateButton , target: video },
    {event: "pause", handler: updateButton, target: video},
    {event: "timeupdate", handler: handleProgress , target: video },
    {event: "click", handler: togglePlay , target: toggle },
    {event: "click", handler: scrub , target: progress },
    {event: "mousedown", handler: progressDown , target: progress },
    {event: "mousemove", handler: progressMoved , target: progress },
    {event: "mouseup", handler: progressUp , target: progress },
    {event: "click", handler: bClick , target: skipButtons },
    {event: ["change, mousemove"], handler: updateRange , target: ranges },

  ];

  events.forEach(
    ({ event: e, handler: h, target: t}) =>(
      t instanceof NodeList ?
      t.foreEach((el, i)=> {
          el.addEventListener(
            typeof e === "string" ? e : e[i],
            typeof h === "function" ? h.bind(null, el) : h[i].bind(null, e)
          )
      })
      : t.addEventListener(e,h)

    )
  );
  // console.log(skip);
})();
