window.addEventListener('load', function () {
	// document.querySelector('.loading-overlay').style.display = 'none';
	gsap.to('.loading-overlay', {
		duration: 1,
		opacity: 0,
		y: '100%',
		ease: 'power2',
		backgroundColor: '#000',
	});
	const loadingEvent = new Event('loadingComplete');
	window.dispatchEvent(loadingEvent);
});
document.querySelectorAll('.card').forEach((card) => {
	card.addEventListener('mouseleave', function () {
		card.classList.add('card-reverse');
	});
	card.addEventListener('mouseover', function () {
		card.classList.remove('card-reverse');
	});
});

// 網頁主題設定
function checkTheme(event) {
	if (!localStorage.getItem('web_theme')) {
		localStorage.setItem('web_theme', 'dreamy');
	}

	const toggleBtn = document.querySelector('[name="theme"]');
	const isChecked = event.type === 'click' ? event.target.checked : localStorage.getItem('web_theme') === 'dreamy';
	toggleBtn.checked = isChecked;
	document.documentElement.dataset.theme = isChecked ? 'dreamy' : 'dark';
	localStorage.setItem('web_theme', isChecked ? 'dreamy' : 'dark');
}
window.addEventListener('DOMContentLoaded', checkTheme);
document.querySelector('[name="theme"]').addEventListener('click', checkTheme);
// document.addEventListener('DOMContentLoaded', () => {
// const skillIcons = document.querySelectorAll('.skill-item');
// skillIcons.forEach((item, i) => {
// 	item.style.setProperty('--delay', `${((i + 1) * 0.05).toFixed(2)}s`);
// });
// const observer = new IntersectionObserver(
// 	(entries, observer) => {
// 		entries.forEach((entry) => {
// 			if (entry.isIntersecting) {
// 				entry.target.classList.add('slideUp');
// 				// console.log(111, entry);
// 				observer.unobserve(entry.target);
// 			}
// 		});
// 	},
// 	{ root: null, threshold: 0 }
// );
// skillIcons.forEach((icon) => {
// 	observer.observe(icon);
// });
// });
