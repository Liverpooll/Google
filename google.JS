document.getElementById('settings').addEventListener('click', function(){
  document.getElementsByClassName('list-group')[0].classList.toggle('show');
});

// $('.navbar-toggler').on('click',
// function() {
// document.querySelectorAll('.list-group')[0].classList.toggle('show');
// })

document.getElementById('dark-mode').addEventListener('click', function(){
  document.getElementsByClassName('background')[0].classList.toggle('dark')
  document.querySelector('.list-group').classList.remove('show');
});

for (let i = 0; i < 5; i++) {
document.getElementById('dark-mode').addEventListener('click', function(){
  document.querySelectorAll('.header a')[i].classList.toggle('dark');
});
}
for (let j = 0; j < 1; j++) {
document.getElementById('dark-mode').addEventListener('click', function(){
  document.querySelectorAll('p')[j].classList.toggle('dark');
})};

document.getElementById('dark-mode').addEventListener('click', function(){
  document.querySelector('.footer').classList.toggle('super-dark');
})