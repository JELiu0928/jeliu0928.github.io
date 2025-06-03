const tl = gsap.timeline();

const section = document.querySelector('.word__section');
const wordWrap = document.querySelectorAll('.word__wrap');
const allH3 = document.querySelectorAll('.word__wrap h3');

// 建立 mask 元素 same
allH3.forEach((h3) => {
	const mask = document.createElement('span');
	mask.textContent = h3.textContent;
	mask.className = 'mask';
	h3.parentElement.appendChild(mask);
});
// same
function initWordAnimation() {
	// 1. Pin住 section => 測試OK
	ScrollTrigger.create({
		trigger: section,
		start: `top top`,
		end: () => `+=${wordWrap.length * 400} `, //用計算的不用給scrollEnd
		pin: true,
		invalidateOnRefresh: true,
		scrub: true,
		// markers: true,
		// id: '固定section',
	});

	// 2. word 動畫
	gsap.set(wordWrap, {
		// y: () => 300,
		y: 300,
		opacity: 0,
	});

	wordWrap.forEach((item, i) => {
		const h3 = item.querySelector('h3');
		const tl = gsap.timeline({});
		tl.to(item, {
			y: 0,
			opacity: 1,
		}).to(
			h3,
			{
				clipPath: 'inset(0% 0 0 0)',
			},
			'<0.5'
		);

		ScrollTrigger.create({
			trigger: item,
			start: 'top+=50 20%',
			end: 'bottom+=200 20%',
			scrub: 1,
			animation: tl,
			// markers: { indent: 150 * i },
			// id: `up-${i}`,
		});
	});

	// 強制刷新所有 ScrollTrigger
	// ScrollTrigger.refresh(true);
}
let projectSplit;
let skillSplit;
function initCardAnimation() {
	if (projectSplit) {
		projectSplit.revert();
	}
	projectSplit = SplitText.create('#project h2', { type: 'chars', tag: 'span' });

	const itemAni = gsap.from(projectSplit.chars, {
		duration: 2,
		y: 100,
		opacity: 0,
		ease: 'power2',
		stagger: 0.1,
	});
	ScrollTrigger.create({
		animation: itemAni,
		trigger: '#project h2',
		start: 'bottom top',
		end: 'bottom top',
		id: 'project',
		toggleActions: 'play none reverse none',
	});
	// card ------------------------------
	const projectContainer = document.querySelector('.section__project');
	const cardContainer = document.querySelector('.card-container');
	const cardWraps = gsap.utils.toArray('.card__wrap');
	const cardTotal = cardWraps.length;
	const cards = gsap.utils.toArray('.card');
	// ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	const svg = document.querySelector('.cardSvgOuter svg');
	const mm = gsap.matchMedia();

	mm.add(
		{
			isXL: '(min-width: 1200px)',
			isL: '(max-width: 1199px)',
			isM: '(max-width: 768px)',
			isS: '(max-width: 500px)',
			isXS: '(max-width: 375px)',
		},
		(context) => {
			// console.log(context);
			const { isXL, isL, isM, isS, isXS } = context.conditions;

			if (isXL) {
				svg.setAttribute('viewBox', '0 0 675 400');
				cardPath.setAttribute('d', 'M254.446 352C334.43 352 658.147 331.536 641.371 279.908C610.278 184.217 18.3921 233.071 27.095 148.059C35.0243 70.6031 350.728 67.2812 359.425 65');
			}
			if (isL) {
				svg.setAttribute('viewBox', '0 0 660 380');
				cardPath.setAttribute('d', 'M238.173 371C312.435 371 612.992 347.613 597.416 288.609C568.548 179.248 19.0079 235.082 27.0882 137.924C34.4502 49.4035 327.567 45.607 335.642 43');
			}

			if (isM) {
				svg.setAttribute('viewBox', '0 0 640 480');
				cardPath.setAttribute('d', 'M286.711 485C347.447 485 593.261 451.203 580.522 365.935C556.912 207.895 107.464 288.581 114.072 148.177C120.093 20.2538 359.823 14.7675 366.427 11');
			}
			if (isS) {
				svg.setAttribute('viewBox', '0 0 335 700');
				cardPath.setAttribute('d', 'M117.39 647C150.632 647 321.608 597.626 295.25 505.599C255.394 366.442 9.41073 405.978 26.8874 250.628C39.9164 134.813 157.406 124.189 161.02 120');
			}
		}
	);

	ScrollTrigger.create({
		trigger: projectContainer,
		start: 'top top',
		end: () => '+=' + window.innerHeight * (cardTotal * 1.7),
		scrub: 1,
		pin: true,
		invalidateOnRefresh: true,
		id: 'projectPin',
		// markers: { indent: 150 },
	});
	cards.forEach((card) => {
		gsap.set(card, { clearProps: 'all' });
	});
	cardWraps.forEach((wrap, i) => {
		// cards.forEach((card) => {
		gsap.set(wrap, { clearProps: 'all' }); // 清掉之前所有 inline style
		// });
		// 取得SVG路徑起點和終點位置
		// const cardPath = document.querySelector('#cardPath');
		const pathPoints = getCardPathPoint(cardPath);
		const card = cards[i];
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: cardContainer,
				scrub: 1,
				start: () => `top+=${window.innerHeight * i * 1} 20%`, // 卡片間隔更大
				end: () => `top+=${window.innerHeight * (i * 1 + 4.5)} 70%`,
				// markers: { indent: 150 * i },
				id: 'card' + i,
			},
		});
		gsap.set(wrap, {
			top: pathPoints.start.y + 300,
			scale: 0.5,
		});

		tl.to(wrap, {
			top: pathPoints.start.y,
			duration: 1,
		})
			.set(wrap, {
				opacity: 1,
			})
			.to(wrap, {
				duration: 5,
				scale: 1,
				motionPath: {
					path: '#cardPath',
					align: '#cardPath',
					alignOrigin: [0.5, 0.5],
					autoRotate: false,
					immediateRender: false,
					start: 0,
					end: 1,
				},
			})
			.to(
				card,
				{
					rotateY: 360,
					duration: 5,
				},
				'<'
			)
			.to(wrap, {
				top: -window.innerHeight + 'px',
				opacity: 0,
				duration: 5,
			});
	});
	function getCardPathPoint(svgPath) {
		if (!svgPath) {
			return { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
		}
		const pathLength = svgPath.getTotalLength(); //SVGPoint {x: 254.4459991455078, y: 352}
		// 取得svgPath的起點和終點
		const startPoint = svgPath.getPointAtLength(0);
		const endPoint = svgPath.getPointAtLength(pathLength);
		const svgRect = svgPath.getBoundingClientRect();

		// 取得SVG的絕對位置
		// const startAbs = {
		// 	x: startPoint.x + svgRect.left + window.scrollX,
		// 	y: startPoint.y + svgRect.top + window.scrollY,
		// };
		// const endAbs = {
		// 	x: endPoint.x + svgRect.left + window.scrollX,
		// 	y: endPoint.y + svgRect.top + window.scrollY,
		// };
		return {
			start: startPoint,
			end: endPoint,
		};
	}

	// card ------ end----------------------------------
}

function initSkillAnimation() {
	if (skillSplit) {
		skillSplit.revert();
	}
	skillSplit = SplitText.create('#skills h2', { type: 'chars', tag: 'span' });

	const itemAni = gsap.from(skillSplit.chars, {
		duration: 2,
		y: 100,
		opacity: 0,
		ease: 'power2',
		stagger: 0.1,
	});
	ScrollTrigger.create({
		animation: itemAni,
		trigger: '#skills h2',
		start: 'top-=200 90%',
		end: 'top-=200 90%',
		// markers: true,
		id: 'skills',
		toggleActions: 'play none reverse none',
	});
	// skill ----
	const cursor = document.querySelector('.cursor');
	const cursorText = document.querySelector('.cursor_text');
	const skillArea = document.querySelectorAll('.skill__common');
	const skillItems = document.querySelectorAll('.skill-item');
	skillArea.forEach((common, i) => {
		const items = common.querySelectorAll('.skill-item'); // 只選取當前區域的 skill-items
		gsap.set(items, { clearProps: 'all' });
		gsap.from(items, {
			duration: 0.8,
			// 寫函數式就可以每個item不同
			scale: () => gsap.utils.random(0.2, 1.6, 0.1),
			rotate: () => gsap.utils.random(-180, 180, 20),
			y: 100,
			opacity: 0,
			ease: 'power1.inOut',
			stagger: 0.2, // 每個元素間隔 0.2 秒顯示

			scrollTrigger: {
				trigger: common, // 這裡將每個區域當作觸發點
				start: 'top 90%',
				end: 'top 90%',
				// markers: true,
				toggleActions: 'play none reverse none',
				id: 'item-' + i,
			},
		});
	});

	let isInArea = false;
	// skill ---- cursor
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
}
function initAll() {
	initWordAnimation();
	initCardAnimation();
	initSkillAnimation();
	ScrollTrigger.refresh(true);
}
document.addEventListener('DOMContentLoaded', (event) => {
	initAll();
	let resizeTimeout;
	window.addEventListener('resize', () => {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(() => {
			// console.log('resizing...');
			gsap.globalTimeline.clear();
			ScrollTrigger.killAll();
			initAll();
		}, 100);
	});
});
