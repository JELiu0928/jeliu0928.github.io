const animationArr = [];
const tl = gsap.timeline();

// document.addEventListener('DOMContentLoaded', (event) => {
// 	let projectTitle = document.querySelector('#project h2');
// 	let skillTitle = document.querySelector('#skills h2');
// 	projectTitle.innerHTML = splittedText(projectTitle.textContent);
// 	skillTitle.innerHTML = splittedText(skillTitle.textContent);
// 	// const tl1 = gsap.timeline({ duration: 0.3, paused: true });
// 	// animationArr.push(
// 	// 	tl1
// 	// 		.from('.info__image', {
// 	// 			duration: 0.5,
// 	// 			scale: 0,
// 	// 			opacity: 0,
// 	// 			y: 100,
// 	// 			//因為GSAP會設置行內樣式會蓋掉css樣式，所以這裡要設置clearProps
// 	// 			clearProps: 'transform', //也可用all，多屬性可逗號隔開
// 	// 			// onComplete: function () {
// 	// 			// 	gsap.set(this.targets(), { clearProps: 'all' });
// 	// 			// },
// 	// 		})
// 	// 		.from(
// 	// 			'.info__content-info > p',
// 	// 			{
// 	// 				opacity: 0,
// 	// 				y: 30,
// 	// 				stagger: 0.2,
// 	// 			},
// 	// 			'-=0.5'
// 	// 		)
// 	// 		.from(
// 	// 			'.info__content-contact > a',
// 	// 			{
// 	// 				opacity: 0,
// 	// 				y: 30,
// 	// 				stagger: 0.2,
// 	// 			},
// 	// 			'-=0.2'
// 	// 		)
// 	// 		.from(
// 	// 			'.nav-title',
// 	// 			{
// 	// 				opacity: 0,
// 	// 				x: 30,
// 	// 			},
// 	// 			'-=0.5'
// 	// 		)
// 	// );

// 	// console.log(document.querySelectorAll('#project h2 span'));

// 	// ScrollTrigger.refresh();

// 	// tl.scrollTrigger.refresh();
// 	initWordAnimation();

// 	gsap.from('#project h2 span', {
// 		duration: 1,
// 		y: 100,
// 		opacity: 0,
// 		ease: 'power2',
// 		stagger: 0.1,
// 		scrollTrigger: {
// 			trigger: '#project h2',
// 			start: 'bottom+=0 50%',
// 			end: 'bottom+=0 0%',
// 			//onEnter, onLeave, onEnterBack, and onLeaveBack
// 			toggleActions: 'play none reverse none',
// 			id: 'project',
// 		},
// 	});

// 	// console.log(document.querySelectorAll('#skills h2 span'));
// 	gsap.from('#skills h2 span', {
// 		duration: 1,
// 		y: 50,
// 		opacity: 0,
// 		ease: 'power2',
// 		stagger: 0.05,
// 		scrollTrigger: {
// 			trigger: '#skills h2',
// 			start: 'top-=100 80%',
// 			end: 'top-=100 70%',
// 			toggleActions: 'play none none reverse',
// 			id: 'skills',
// 		},
// 	});

// 	// skill ----
// 	const cursor = document.querySelector('.cursor');
// 	const cursorText = document.querySelector('.cursor_text');
// 	const skillArea = document.querySelectorAll('.skill__common');
// 	const skillItems = document.querySelectorAll('.skill-item');
// 	document.querySelectorAll('.skill__common').forEach((common, i) => {
// 		const items = common.querySelectorAll('.skill-item'); // 只選取當前區域的 skill-items
// 		gsap.from(items, {
// 			duration: 0.8,
// 			// 寫函數式就可以每個item不同
// 			scale: () => gsap.utils.random(0.2, 1.6, 0.1),
// 			rotate: () => gsap.utils.random(-180, 180, 20),
// 			y: 100,
// 			opacity: 0,
// 			ease: 'power1.inOut',
// 			stagger: 0.2, // 每個元素間隔 0.2 秒顯示

// 			scrollTrigger: {
// 				// scroller: '.area-right',
// 				trigger: common, // 這裡將每個區域當作觸發點
// 				start: 'top 80%',
// 				end: 'top 80%',
// 				// markers: true,
// 				toggleActions: 'play none reverse none',
// 				id: 'item-' + i,
// 			},
// 		});
// 	});

// 	let isInArea = false;
// 	// skill ---- cursor
// 	document.addEventListener('mousemove', (e) => {
// 		if (isInArea) {
// 			gsap.to(cursor, {
// 				opacity: 1,
// 				x: e.clientX,
// 				y: e.clientY,
// 				duration: 1,
// 			});
// 		} else {
// 			gsap.to(cursor, {
// 				opacity: 0,
// 				duration: 0.5,
// 			});
// 		}
// 	});
// 	skillArea.forEach((item) => {
// 		item.addEventListener('mousemove', (e) => {
// 			isInArea = true;
// 		});
// 		item.addEventListener('mouseleave', (e) => {
// 			isInArea = false;
// 		});
// 	});
// 	skillItems.forEach((item) => {
// 		item.addEventListener('mouseenter', (e) => {
// 			const text = e.target.dataset.text;
// 			const repeatedText = Array(10).fill(text).join('   ★   ');
// 			gsap.to(cursor, {
// 				width: '15rem',
// 				height: '3rem',
// 				padding: '2rem',
// 				borderRadius: '0',
// 				duration: 0.3,
// 			});
// 			gsap.to(cursorText, {
// 				opacity: 0,
// 				duration: 0.2,
// 				onComplete: () => {
// 					cursorText.textContent = repeatedText;
// 					gsap.to(cursorText, { opacity: 1, duration: 0.3 });
// 				},
// 			});
// 		});

// 		item.addEventListener('mouseleave', () => {
// 			gsap.to(cursor, {
// 				width: '2rem',
// 				height: '2rem',
// 				padding: '0',
// 				borderRadius: '50%',
// 				duration: 0.3,
// 			});
// 			gsap.to(cursorText, {
// 				opacity: 0,
// 				duration: 0.2,
// 				onComplete: () => {
// 					cursorText.textContent = '';
// 					// gsap.to(cursorText, { opacity: 1, duration: 0.3 });
// 				},
// 			});
// 		});
// 	});
// });

// let resizeTimeout;
// window.addEventListener('resize', () => {
// 	clearTimeout(resizeTimeout);
// 	console.log('resize');
// 	resizeTimeout = setTimeout(() => {
// 		// kill所有 ScrollTrigger
// 		ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
// 		ScrollTrigger.refresh();
// 		// 移除 .mask（重新初始化）
// 		document.querySelectorAll('.mask').forEach((el) => el.remove());
// 		// 重新初始化動畫
// 		initWordAnimation();
// 	}, 200); // 200ms 延遲確保 DOM 更新完
// });

let resizeTimeout;
window.addEventListener('resize', () => {
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(() => {
		console.log('resizing...');
		ScrollTrigger.refresh(true);
	}, 300);
});
document.addEventListener('DOMContentLoaded', (event) => {
	initWordAnimation();
});
const allH3 = document.querySelectorAll('.word__wrap h3');

// 為h3添加mask
allH3.forEach((h3) => {
	const mask = document.createElement('span');
	mask.textContent = h3.textContent;
	mask.className = 'mask';
	h3.parentElement.appendChild(mask);
});
// word 動畫
function initWordAnimation() {
	const section = document.querySelector('.word__section');
	// const wordWrap = document.querySelectorAll('.word__wrap');

	const st = ScrollTrigger.create({
		trigger: section,
		start: () => `top top`,
		// end: () => `+=${wordWrap.length * 400} 80%`,
		pin: true,
		scrub: true,
		invalidateOnRefresh: true,
		markers: true,
		id: '固定section',
	});
	gsap.set(wordWrap, {
		// y: () => 300,
		opacity: 0,
	});

	// wordWrap.forEach((item, i) => {
	// 	const h3 = item.querySelector('h3');
	// 	const toUpAnimate = gsap.to(item, {
	// 		y: 0,
	// 		opacity: 1,
	// 		onCompete: () => {
	// 			// console.log('onCompete');
	// 			// const clipPathAni = gsap.to(h3, {
	// 			// 	clipPath: 'inset(0% 0 0 0)',
	// 			// });
	// 			// ScrollTrigger.create({
	// 			// 	trigger: h3,
	// 			// 	animation: clipPathAni,
	// 			// 	start: '100% 30%',
	// 			// 	end: '300px 30%',
	// 			// 	invalidateOnRefresh: true,
	// 			// 	scrub: 1,
	// 			// 	markers: { indent: 150 * i },
	// 			// 	id: `clip-${i} `,
	// 			// });
	// 		},
	// 	});
	// 	ScrollTrigger.create({
	// 		trigger: item,
	// 		start: 'top 20%',
	// 		end: 'bottom 20%',
	// 		scrub: 1,
	// 		animation: toUpAnimate, // 指定要控制的動畫
	// 		// markers: { indent: 150 * i },
	// 		invalidateOnRefresh: true,
	// 		// anticipatePin: 1,
	// 		// refreshPriority: i,
	// 		id: `up-${i}`,
	// 		onUpdate: (self) => {
	// 			console.log(self.progress);
	// 		},
	// 	});

	// 	// tl.to(item, {
	// 	// 	y: 0,
	// 	// 	duration: 2,
	// 	// 	opacity: 1,
	// 	// 	scrollTrigger: {
	// 	// 		start: 'top 20%',
	// 	// 		end: () => 'bottom 20%',
	// 	// 		trigger: item,
	// 	// 		scrub: 1,
	// 	// 		markers: { indent: 150 * i },
	// 	// 		invalidateOnRefresh: true,
	// 	// 		id: `up-${i} `,
	// 	// 	},
	// 	// });
	// 	// tl.to(h3, {
	// 	// 	duration: 2,
	// 	// 	clipPath: 'inset(0% 0 0 0)',
	// 	// 	scrollTrigger: {
	// 	// 		start: '100% 30%',
	// 	// 		end: '500px 30%',
	// 	// 		trigger: h3,
	// 	// 		invalidateOnRefresh: true,
	// 	// 		scrub: 1,
	// 	// 		markers: { indent: 150 * i },
	// 	// 		id: `clip-${i} `,
	// 	// 	},
	// 	// });
	// });
}

function initCardAnimation() {
	// card ------------------------------
	const projectContainer = document.querySelector('.section__project');
	const cardContainer = document.querySelector('.card-container');
	const cardWraps = gsap.utils.toArray('.card__wrap');
	const cardTotal = cardWraps.length;
	const cards = gsap.utils.toArray('.card');
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	// 設置總體滾動觸發器 - 顯著增加總滾動距離以放慢動畫速度
	ScrollTrigger.create({
		trigger: projectContainer,
		start: 'top top',
		end: () => '+=' + window.innerHeight * (cardTotal * 2), // 每張卡片分配3個視口高度
		scrub: 1, // 增加值以使動畫更平滑
		pin: true,
	});

	cardWraps.forEach((wrap, i) => {
		// 取得SVG路徑起點和終點位置
		const cardPath = document.querySelector('#cardPath');
		const pathPoints = getCardPathPoint(cardPath);
		const card = cards[i];

		gsap.set(wrap, {
			opacity: 0,

			left: pathPoints.start.x + 'px',
			top: window.innerHeight + 200 + 'px', //
			scale: 0.6,
		});
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: cardContainer,
				scrub: 1,
				start: () => `top+=${window.innerHeight * i * 1.5} top+=200`, // 卡片間隔更大
				end: () => `top+=${window.innerHeight * (i * 1.5 + 3)} 60%`,
				// markers: { indent: 150 * i },
				id: i,
			},
		});
		tl.to(wrap, {
			top: pathPoints.start.y + 'px',
			opacity: 1,
			duration: 1,
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
				top: pathPoints.end.y - window.innerHeight + 'px',
				opacity: 0,
				duration: 2,
			});
		// GSDevTools.create({ animation: tl });
	});
	function getCardPathPoint(svgPath) {
		if (!svgPath) {
			return { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
		}
		const pathLength = svgPath.getTotalLength();
		const startPoint = svgPath.getPointAtLength(0);
		const endPoint = svgPath.getPointAtLength(pathLength);
		console.log('pathLength', pathLength); //SVGPoint {x: 254.4459991455078, y: 352}
		console.log('startPoint', startPoint);
		console.log('endPoint', endPoint);
		return {
			start: startPoint,
			end: endPoint,
		};
	}

	// card ------ end----------------------------------
}

const splittedText = (text) => {
	const textArray = text.split('');
	// console.log(textArray);
	const spanArray = textArray.map((letter) => {
		return `<span>${letter}</span>`;
	});
	return spanArray.join('');
};

// 暫存word動畫(無法解決rwd)
// function initWordAnimation() {
// 	const allH3 = document.querySelectorAll('.word__wrap h3');
// 	const section = document.querySelector('.word__section');

// 	allH3.forEach((h3) => {
// 		const mask = document.createElement('span');
// 		mask.textContent = h3.textContent;
// 		mask.className = 'mask';
// 		h3.parentElement.appendChild(mask);
// 	});
// 	const wordWrap = document.querySelectorAll('.word__wrap');

// 	gsap.to(section, {
// 		scrollTrigger: {
// 			trigger: section,
// 			start: 'top top',
// 			end: () => `+=${wordWrap.length * 200}`,
// 			pin: true,
// 			// markers: true,
// 			invalidateOnRefresh: true,
// 		},
// 	});
// 	gsap.set(wordWrap, { y: '40vh', opacity: 0 });
// 	wordWrap.forEach((item, i) => {
// 		const h3 = item.querySelector('h3');

// 		tl.to(item, {
// 			y: 0,
// 			opacity: 1,
// 			scrollTrigger: {
// 				start: 'top 50%',
// 				end: 'bottom 50%',
// 				trigger: item,
// 				scrub: 1,
// 				markers: { indent: 200 * i },
// 				id: `TO-UP-${i} `,
// 				invalidateOnRefresh: true,
// 			},
// 		}).to(h3, {
// 			clipPath: 'inset(0% 0 0 0)',
// 			scrollTrigger: {
// 				start: '100% 50%',
// 				end: '200px 30%',
// 				trigger: h3,
// 				// markers: { indent: 200 * i },
// 				// id: `clip-${i} `,
// 				scrub: 1,
// 				invalidateOnRefresh: true,
// 			},
// 		});
// 	});
// }
