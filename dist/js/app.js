(function(){
  const navbar_toggler_button = document.querySelector('.navbar-toggler');
  navbar_toggler_button.addEventListener('click', function(){
    document.querySelector('.navbar-nav').classList.toggle('show');
    console.log('clicked')
  });
})()