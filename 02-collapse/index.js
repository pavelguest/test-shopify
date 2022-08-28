const element = document.querySelector(".collapsible__content");
const button = document.querySelector(".collapsible__button");
const visibleSpan = document.querySelector(".collapsible__action--visible");
const hideSpan = document.querySelector(".collapsible__action--hidden");

const toggleButton = (elem) => {
  elem.style.display = elem.style.display == "none" ? "block" : "none";
};

toggleButton(visibleSpan);

const collapseAction = element.animate(
  { opacity: [0, 1] },
  { duration: 250, fill: "both", easing: "ease-out" }
);

collapseAction.pause();

const toggleCollapseAction = () => {
  toggleButton(visibleSpan);
  toggleButton(hideSpan);
  if (collapseAction.playState === "paused") {
    collapseAction.play();
  } else {
    collapseAction.reverse();
  }
};

button.addEventListener("click", toggleCollapseAction);
