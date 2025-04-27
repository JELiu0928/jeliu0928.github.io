const animationArr = [];
document.addEventListener('DOMContentLoaded', (event) => {
	let projectTitle = document.querySelector('#project h2');
	let skillTitle = document.querySelector('#skills h2');
	projectTitle.innerHTML = splittedText(projectTitle.textContent);
	skillTitle.innerHTML = splittedText(skillTitle.textContent);
	const tl1 = gsap.timeline({ duration: 0.3, paused: true });
	animationArr.push(
		tl1
			.from('.info__image', {
				duration: 0.5,
				scale: 0,
				opacity: 0,
				y: 100,
				//因為GSAP會設置行內樣式會蓋掉css樣式，所以這裡要設置clearProps
				clearProps: 'transform', //也可用all，多屬性可逗號隔開
				// onComplete: function () {
				// 	gsap.set(this.targets(), { clearProps: 'all' });
				// },
			})
			.from(
				'.info__content-info > p',
				{
					opacity: 0,
					y: 30,
					stagger: 0.2,
				},
				'-=0.5'
			)
			.from(
				'.info__content-contact > a',
				{
					opacity: 0,
					y: 30,
					stagger: 0.2,
				},
				'-=0.2'
			)
			.from(
				'.nav-title',
				{
					opacity: 0,
					x: 30,
				},
				'-=0.5'
			)
	);

	animationArr.push(
		gsap.from('#project h2 span', {
			duration: 1,
			y: 50,
			opacity: 0,
			ease: 'power2',
			stagger: 0.05,
			paused: true,
		})
	);
	gsap.from('#skills h2 span', {
		duration: 1,
		y: 50,
		opacity: 0,
		ease: 'power2',
		stagger: 0.05,
		scrollTrigger: {
			scroller: '.area-right',
			trigger: '#skills h2',
			// markers: true,
			start: 'top bottom', // 當 #skills 頂部接觸視窗底部時開始
			end: 'top 50%', // 當 #skills 底部離開視窗頂部時結束
		},
	});

	const cursor = document.querySelector('.cursor');
	const cursorText = document.querySelector('.cursor_text');
	const skillArea = document.querySelectorAll('.skill__common');
	const skillItems = document.querySelectorAll('.skill-item');
	document.querySelectorAll('.skill__common').forEach((common) => {
		const items = common.querySelectorAll('.skill-item'); // 只選取當前區域的 skill-items
		gsap.from(items, {
			duration: 1,
			y: 50,
			opacity: 0,
			ease: 'power1.inOut',
			stagger: 0.2, // 每個元素間隔 0.2 秒顯示
			scrollTrigger: {
				scroller: '.area-right',
				trigger: common, // 這裡將每個區域當作觸發點
				start: 'top 80%',
				end: 'top 20%',
				// markers: true,
			},
		});
	});

	let isInArea = false;
	//cursor
	document.addEventListener('mousemove', (e) => {
		if (isInArea) {
			gsap.to(cursor, {
				opacity: 1,
				x: e.clientX,
				y: e.clientY,
				duration: 1,
			});
		} else {
			gsap.to(cursor, {
				opacity: 0,
				duration: 0.5,
			});
		}
	});
	skillArea.forEach((item) => {
		item.addEventListener('mousemove', (e) => {
			isInArea = true;
		});
		item.addEventListener('mouseleave', (e) => {
			isInArea = false;
		});
	});
	skillItems.forEach((item) => {
		item.addEventListener('mouseenter', (e) => {
			const text = e.target.dataset.text;
			const repeatedText = Array(10).fill(text).join('   ★   ');
			gsap.to(cursor, {
				width: '15rem',
				height: '3rem',
				padding: '2rem',
				borderRadius: '0',
				duration: 0.3,
			});
			gsap.to(cursorText, {
				opacity: 0,
				duration: 0.2,
				onComplete: () => {
					cursorText.textContent = repeatedText;
					gsap.to(cursorText, { opacity: 1, duration: 0.3 });
				},
			});
		});

		item.addEventListener('mouseleave', () => {
			gsap.to(cursor, {
				width: '2rem',
				height: '2rem',
				padding: '0',
				borderRadius: '50%',
				duration: 0.3,
			});
			gsap.to(cursorText, {
				opacity: 0,
				duration: 0.2,
				onComplete: () => {
					cursorText.textContent = '';
					// gsap.to(cursorText, { opacity: 1, duration: 0.3 });
				},
			});
		});
	});
});
window.addEventListener('loadingComplete', (e) => {
	// console.log('loadingComplete');
	// setTimeout(() => {
	animationArr.forEach((animation) => animation.play());
	// }, 500); // 這裡延遲 0.5秒

	const cards = document.querySelectorAll('.card');

	cards.forEach((card, i) => {
		const isOdd = i % 2 !== 0; // 判斷是否為奇數
		animationArr.push(
			gsap.from(card, {
				x: isOdd ? 300 : -300,
				duration: 1.2,
				opacity: 0,
				ease: 'power1',

				scrollTrigger: {
					scroller: '.area-right',
					trigger: card,
					start: 'top 90%',
					end: 'top 70%',
					// markers: true,
					//確保當任何刷新發生時（即使不是由自己觸發的），這些觸發器會優先更新。
					refreshPriority: 1,
				},
			})
		);
	});
});
const splittedText = (text) => {
	const textArray = text.split('');
	// console.log(textArray);
	const spanArray = textArray.map((letter) => {
		return `<span>${letter}</span>`;
	});
	return spanArray.join('');
};
