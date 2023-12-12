const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  const playBtn = video.querySelector(".video__play");
  const videoEl = video.querySelector(".video__video");

  playBtn.addEventListener("click", (event) => {
    event.preventDefault();
    closeAllVideosExcept(video);
    video.scrollIntoView({ behavior: "smooth", block: "start" });
    videoEl.play();
    handleVideoPlay(video);
  });
});

function closeAllVideosExcept(currentVideo) {
  videos.forEach((video) => {
    if (video !== currentVideo) {
      const videoEl = video.querySelector(".video__video");
      const closeBtn = video.querySelector(".video__close");
      const overlay = video.querySelector(".video__overlay");

      videoEl.removeAttribute("controls", "controls");
      videoEl.currentTime = 0;
      videoEl.pause();
      closeBtn.classList.remove("video__close--is-visible");
      overlay.classList.remove("video__overlay--is-playing");
      videoEl.classList.remove("video__video--is-playing");
      video.classList.remove("video--expanded");
    }
  });
}

function handleVideoPlay(video) {
  const closeBtn = video.querySelector(".video__close");
  const videoEl = video.querySelector(".video__video");
  const overlay = video.querySelector(".video__overlay");
  // const pattern = video
  //   .closest(".container__group")
  //   .querySelector(".footer__pattern");

  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    videoEl.removeAttribute("controls", "controls");
    videoEl.currentTime = 0;
    videoEl.pause();
    closeBtn.classList.remove("video__close--is-visible");
    overlay.classList.remove("video__overlay--is-playing");
    videoEl.classList.remove("video__video--is-playing");
    video.classList.remove("video--expanded");
    // pattern.style.zIndex = 1;
  });

  videoEl.onplay = () => {
    videoEl.setAttribute("controls", "controls");
    videoEl.classList.add("video__video--is-playing");
    video.classList.add("video--expanded");
    overlay.classList.add("video__overlay--is-playing");
    closeBtn.classList.add("video__close--is-visible");
    // pattern.style.zIndex = -1;
  };

  videoEl.onpause = () => {
    overlay.classList.remove("video__overlay--is-playing");
  };

  // auto loop on videos with .video--loop class
  videoEl.onended = () => {
    if (video.classList.contains("video--loop")) {
      videoEl.play();
    }
  };
}
