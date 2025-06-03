window.addEventListener('load', function () {
	// document.querySelector('.loading-overlay').style.display = 'none';
	gsap.to('.loading-overlay', {
		duration: 1,
		opacity: 0,
		y: '-100%',
		ease: 'power2',
		backgroundColor: '#000',
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
