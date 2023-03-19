
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

/*
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName=prompt('あなたの名前は？');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = '来てくれてありがとう'+myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStrage.getItem('name');
    myHeading.innerHTML = '来てくれてありがとう'+storedName;
}

myButton.onclick=function(){
    setUserName();
}
*/