
const hello = document.getElementById('hello');
const getnav = document.getElementById('sec-nav');



//mobile nav
const secnav = document.getElementById('sec-ul')
function hee() {
	if (getnav.classList.contains('active')) {
		getnav.classList.remove('active');

	} else {
		getnav.classList.add('active');

	}
}


let getblog = document.getElementById('drop');
let getpage = document.getElementById('down');
function blog() {
	if (getblog.classList.contains('active')) {
		getblog.classList.remove('active');
	} else {
		getblog.classList.add('active');
	}

}
function page() {
	if (getpage.classList.contains('active')) {
		getpage.classList.remove('active');
	} else {
		getpage.classList.add('active');
	}

}

const mainframe = document.querySelector('.mainframe');
const header = document.querySelector('.header');
const biggie = document.getElementById('biggie');


biggie.style.transition = 'all 0.5s linear';
window.addEventListener('scroll', (e) => {

	//distance from document top
	const distanceFromTop = e.srcElement.scrollingElement.scrollTop;

	if (distanceFromTop > 0 && distanceFromTop < (mainframe.offsetTop - 500)) {
		biggie.style.top = '-50px'
	}
	else if (distanceFromTop > (mainframe.offsetTop - 500)) {
		biggie.style.top = '0px'
	}

})