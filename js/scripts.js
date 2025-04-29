document.addEventListener('DOMContentLoaded', () => {
    console.log("Сторінка повністю завантажена!");
    const img = document.querySelector('.zoom-image');
    img.addEventListener('click', () => {
      img.classList.toggle('zoomed');
    });
    const form = document.querySelector('form');
    if(form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Дякуємо за ваше повідомлення!');
        form.reset();
      });
    }
  });
  
