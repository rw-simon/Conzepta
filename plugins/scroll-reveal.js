import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'
Vue.use(VueScrollReveal, {
	duration: 500,
	distance: '20px',
	delay: 200,
	reset: false,
	easing: 'ease-out',
	viewOffset: {
		bottom: 20,
		top: 25,
	},
})
