/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';

var iceCream = 'chocolate';
if (iceCream === 'choc') {
	alert('Yay');
} else {
	alert('Aww');
}
var myVariable = document.querySelector('h1');
alert('hello!');

function multiply(num1,num2) {
	var result = num1 * num2;
	return result;
}

document.querySelector('html').onclick = function() {
	alert('Ouch! Stop poking me!')
}
*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/castle_estonia_1st.jpg') {
		myImage.setAttribute('src','images/castle_estonia_2nd.jpg');
	} else {
		myImage.setAttribute('src','images/castle_estonia_1st.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Most famous castles in Estonia, ' +myName;
}
if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Most famous castles in Estonia, ' + storedName;
}
myButton.onclick = function() {
	setUserName();
}