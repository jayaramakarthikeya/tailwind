const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const cancel_btn = document.querySelector('.cancel-btn');

btn.addEventListener('click', () => {
  menu.classList.toggle('-translate-x-full');
  btn.classList.toggle('hidden');
});

cancel_btn.addEventListener('click', () => {
  menu.classList.toggle('-translate-x-full');
  btn.classList.toggle('hidden');
});
