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
