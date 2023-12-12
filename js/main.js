const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  const playBtn = video.querySelector(".video__play");
  const closeBtn = video.querySelector(".video__close");
  const videoEl = video.querySelector(".video__video");
  const overlay = video.querySelector(".video__overlay");

  playBtn.addEventListener("click", (event) => {
    event.preventDefault();
    video.scrollIntoView({ behavior: "smooth", block: "start" });
    videoEl.play();
  });

  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();

    videoEl.removeAttribute("controls", "controls");
    videoEl.currentTime = 0;
    videoEl.pause();
    closeBtn.classList.remove("video__close--is-visible");
    overlay.classList.remove("video__overlay--is-playing");
    videoEl.classList.remove("video__video--is-playing");
    video.classList.remove("video--expanded");
  });

  videoEl.onplay = () => {
    videoEl.setAttribute("controls", "controls");
    videoEl.classList.add("video__video--is-playing");
    video.classList.add("video--expanded");
    overlay.classList.add("video__overlay--is-playing");
    closeBtn.classList.add("video__close--is-visible");
  };

  videoEl.onpause = () => {
    overlay.classList.remove("video__overlay--is-playing");
  };

  //restart video on videos with .video--loop class
  videoEl.onended = () => {
    if (video.classList.contains("video--loop")) {
      videoEl.play();
    }
  };
});
