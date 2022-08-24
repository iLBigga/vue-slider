// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
];

const app = new Vue({
	el: '#root',
	data: {
		index: 0,
		active: 'slide active',
		slides,
	},
	methods: {
		next() {
			this.index === slides.length-1 ?  this.index = 0 : this.index++;
		},
		prev() {
			this.index === 0 ?  this.index = 4 : this.index--;
		},
	},
});
 