const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
console.log(prev);


let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive >= circles.length) {
    currentActive = circles.length;
    next.disabled = true;
  }
  prev.disabled = false;
  updateProgress();
  updateProgressBar();
  console.log(currentActive);
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive <= 1) {
    currentActive = 1;
    prev.disabled = true;
  }
  next.disabled = false;
  updateProgress();
  updateProgressBar();
  console.log(currentActive);
});
function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentActive) { //ensures only circles with an index less than currentActive are marked as active.
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}
function updateProgressBar() {
  const progressPercentage = ((currentActive - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressPercentage}%`;
}