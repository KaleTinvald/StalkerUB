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

document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector("header img");

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const fadeStart = 0;
    const fadeEnd = 300;

    let opacity = 1;

    if (scrollY >= fadeStart && scrollY <= fadeEnd) {
      opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    } else if (scrollY > fadeEnd) {
      opacity = 0;
    }

    img.style.opacity = opacity;
  });
});
