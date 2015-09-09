var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-512.png') {
      myImage.setAttribute ('src','images/UK_Creative_462809583.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-512.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	  var myName = prompt('Hi:  Please enter your name.');
	  localStorage.setItem('name', myName);
	  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	  setUserName();
} 
else {
	  var storedName = localStorage.getItem('name');
	  myHeading.innerHTML = 'Mozilla is def cool, ' + storedName;
}

myButton.onclick = function() {
	  setUserName();
}
