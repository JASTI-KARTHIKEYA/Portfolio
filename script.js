document.addEventListener("DOMContentLoaded", () => {
  const projectSlider = document.querySelector(".project-slider");
  const leftBtn = document.getElementById("left-btn");
  const rightBtn = document.getElementById("right-btn");

  const projectCardWidth = document.querySelector(".project-card").offsetWidth;

  leftBtn.addEventListener("click", () => {
    projectSlider.scrollBy({
      left: -projectCardWidth,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    projectSlider.scrollBy({
      left: projectCardWidth,
      behavior: "smooth",
    });
  });
});
