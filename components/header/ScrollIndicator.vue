<template>
	<div class="indicator-wrapper">
		<div class="indicator-bar" :style="{ width: scrollY + '%' }"></div>
	</div>
</template>

<script>
export default {
	name: 'ScrollIndicator',
	data() {
		return {
			scrollY: this.position,
		}
	},
	methods: {
		handleScroll() {
			// Your scroll handling here
			// let variable = window.innerHeight / window.scrollY
			// console.log('Window Height: ' + (document.body.clientHeight - window.innerHeight))
			// console.log('Scroll Position: ' + window.scrollY)
			// console.log(window.scrollY / window.innerHeight)
			this.scrollY = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100
		},
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
	props: { position: { default: 0, type: Number } },
}
</script>

<style lang="sass" scoped>
.indicator-wrapper
	background-color: $c-gray
	height: 4px
	width: 100%
	.indicator-bar
		background-color: $c-blue
		height: 100%
</style>
