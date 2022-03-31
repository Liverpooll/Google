document.getElementById('settings').addEventListener('click', function(){
  document.getElementsByClassName('list-group')[0].classList.toggle('show');
});

// $('.navbar-toggler').on('click',
// function() {
// document.querySelectorAll('.list-group')[0].classList.toggle('show');
// })

document.getElementById('dark-mode').addEventListener('click', function(){
  document.getElementsByClassName('background')[0].classList.toggle('dark');
});

// let count = 0;

// $('.badge').on('click', function(){
//   count++
//   if (count % 2 == 1){
//     document.getElementsByClassName('badge')[0].innerHTML = 'Light 🔄'
//     $('.background').addClass('dark')
//   } else {
//     document.getElementsByClassName('badge')[0].innerHTML = 'Dark 🔄'
//         $('.background').removeClass('dark')
//   }
// })