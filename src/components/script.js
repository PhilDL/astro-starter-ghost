const handleMenu = () => {
  // menu
  const burgerButton = document.querySelector(".gh-burger");
  if (burgerButton) {
    burgerButton.addEventListener("click", () => {
      const body = document.querySelector("body");
      body.classList.toggle("gh-head-open");
    });
  }
};

const callback = () => {
  handleMenu();
};

if (document.readyState === "complete") {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
