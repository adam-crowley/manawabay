const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  const playBtn = video.querySelector(".video__play");
  const closeBtn = video.querySelector(".video__close");
  const videoEl = video.querySelector(".video__video");
  const overlay = video.querySelector(".video__overlay");
  let isPaused = false;

  playBtn.addEventListener("click", (event) => {
    event.preventDefault();
    videoEl.play();
    videoEl.setAttribute("controls", "controls");
    overlay.style.display = "none";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    overlay.style.display = "flex";
    videoEl.currentTime = 0;
    videoEl.pause();
  });

  videoEl.onpause = () => {
    isPaused = true;
    overlay.style.display = "flex";
  };

  console.log("playBtn", playBtn);
  console.log("closeBtn", closeBtn);
});
