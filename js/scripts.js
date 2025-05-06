document.addEventListener('DOMContentLoaded', () => {
    console.log("Сторінка повністю завантажена!");
    const form = document.querySelector('form');
    if(form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Дякуємо за ваше звернення!');
        form.reset();
      });
    }
  });
letlet lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const img = document.querySelector("header img");
  const currentScrollY = window.scrollY;

  const fadeStart = 0;
  const fadeEnd = 300;
  let opacity;

  if (currentScrollY > fadeStart) {
    opacity = 1 - (currentScrollY - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(opacity, 0);
  } else {
    opacity = 1;
  }

  if (currentScrollY < lastScrollY || currentScrollY <= fadeStart) {
    img.style.opacity = opacity;
  } else if (currentScrollY > lastScrollY) {
    img.style.opacity = opacity;
  }

  lastScrollY = currentScro llY;
}); lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const img = document.querySelector("header img");
  const currentScrollY = window.scrollY;

  const fadeStart = 0;
  const fadeEnd = 300;
  let opacity;

  if (currentScrollY > fadeStart) {
    opacity = 1 - (currentScrollY - fadeStart) / (fadeEnd - fadeStart);
    opacity = Math.max(opacity, 0);
  } else {
    opacity = 1;
  }

  if (currentScrollY < lastScrollY || currentScrollY <= fadeStart) {
    img.style.opacity = opacity;
  } else if (currentScrollY > lastScrollY) {
    img.style.opacity = opacity;
  }

  lastScrollY = currentScrollY;
});
  
