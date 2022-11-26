console.log('action.js loaded');
var toggle = document.getElementById('open-menu');
var menu = document.getElementById('menu');

toggle.addEventListener('click', function() {
  menu.classList.toggle('hidden');
});