const faqBtns = document.querySelectorAll('.faq-btn');
const faqAnswers = document.querySelectorAll('.faq-answer');
const footerYear = document.querySelector('.footer__year');
const scrollTop = document.querySelector('.scroll-to-top');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links__item');
const navBtn = document.querySelector('.btn-nav');
const media = window.matchMedia('(max-width: 996px)');

let isOpen = false;
function toggleMenu() {
	if (!isOpen) {
		nav.classList.add('active');
		navBtn.classList.add('active');
		isOpen = true;
	} else {
		nav.classList.remove('active');
		navBtn.classList.remove('active');
		isOpen = false;
	}
}

function expandNav() {
	window.scrollY >= 300 ? nav.classList.add('expand') : nav.classList.remove('expand');
	window.scrollY >= 600 ? scrollTop.classList.add('show') : scrollTop.classList.remove('show');
}

const getYear = new Date().getFullYear();
footerYear.textContent = getYear;

function clearAllActive() {
	faqAnswers.forEach((faqAnswer) => {
		faqAnswer.classList.remove('active');
	});

	faqBtns.forEach((faqBtn) => {
		faqBtn.classList.remove('active');
	});
}

faqBtns.forEach((faqBtn) => {
	faqBtn.addEventListener('click', (e) => {
		clearAllActive();
		e.target.closest('.faq-item').children[1].classList.toggle('active');
		e.target.closest('.faq-item').children[0].classList.toggle('active');
	});
});
navBtn.addEventListener('click', toggleMenu);
navLinks.forEach((link) => {
	link.addEventListener('click', toggleMenu);
});
window.addEventListener('scroll', expandNav);
