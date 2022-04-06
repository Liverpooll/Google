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

document.getElementById('dark-mode').addEventListener('click', function(){
  document.querySelectorAll('p')[0].classList.toggle('dark');
  document.querySelectorAll('p')[1].classList.toggle('super-dark');
});


document.getElementById('dark-mode').addEventListener('click', function(){
  document.querySelector('.footer').classList.toggle('super-dark');

});

for (let i = 0; i < 6; i++) {
  document.getElementById('dark-mode').addEventListener('click', function(){
  document.querySelectorAll('.footer a')[i].classList.toggle('super-dark');
})};




  document.getElementById('dark-mode').addEventListener('click', function(){
  document.querySelector('.search-bar input').classList.toggle('super-dark');
})

for (let i = 0; i < 3; i++) {
document.getElementById('dark-mode').addEventListener('click', function(){
  document.querySelectorAll('.icon i')[i].classList.toggle('super-dark');
})};

document.getElementById('dark-mode').addEventListener('click', function(){
  document.querySelector('.button1').classList.toggle('super-dark');
  document.querySelector('.button2').classList.toggle('super-dark');
});

// document.querySelector(.'dark-mode').addEventListener('click', function(){
//   document.querySelector('')
// })