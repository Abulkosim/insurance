let hamburger = document.querySelector('.hamburger');
let x = document.querySelector('.second-ul');

hamburger.addEventListener('click', () => {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
})