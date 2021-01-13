import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'
Vue.use(VueScrollReveal, {
	duration: 500,
	distance: '20px',
	reset: false,
	easing: 'ease-out',
	viewOffset: {
		bottom: 75,
		top: 25,
	},
})
