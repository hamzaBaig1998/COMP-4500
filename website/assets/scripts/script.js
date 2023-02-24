const credits = document.getElementById("end-credits");
const creditList = credits.querySelector("ul");
const creditsHeight = credits.offsetHeight + 525;
const speed = 30; // Adjust this value to change the speed of the animation

function resetCredits() {
  creditList.style.transform = `translateY(${creditsHeight}px)`;
  creditList.style.transition = `transform 0s`;
}

function animateCredits() {
  creditList.style.transform = `translateY(-${creditsHeight}px)`;
  creditList.style.transition = `transform ${creditsHeight / speed}s linear`;
  setTimeout(() => {
    resetCredits();
  }, (creditsHeight / speed) * 1000);
}

animateCredits();
// Repeat function
setInterval(() => {
  animateCredits();
}, (creditsHeight / speed) * 1000 + 50);

// timeline
