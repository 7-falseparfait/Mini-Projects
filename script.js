const panels = document.querySelectorAll('.panel');
panels[0].classList.add('active');

panels.forEach((panel, index) => {
  panel.addEventListener('mouseover', (event) => {
    if (event.target === panel) {
      removeActiveClasses();
      panel.classList.add('active');
    }
  });
  panel.addEventListener('mouseout', () => {
    removeActiveClasses();
    panels[0].classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove('active'));
}
