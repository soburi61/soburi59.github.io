
let myImage = document.querySelector('.logo');

myImage.addEventListener('mouseover',function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
      myImage.setAttribute('src','images/logo-hover.png');
    } else {
      myImage.setAttribute('src','images/logo.png');
    }
});
myImage.addEventListener('mouseleave',function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
      myImage.setAttribute('src','images/logo-hover.png');
    } else {
      myImage.setAttribute('src','images/logo.png');
    }
});
<<<<<<< HEAD

window.addEventListener('popstate', function (e) {
  window.location.reload();
  console.log("Reload!");
  });
=======
>>>>>>> edf5f0a180e51a0201de9224a8de08e038830c2e
