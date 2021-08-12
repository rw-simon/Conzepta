<template>
	<span ref="number">{{ parseInt(displayNumber).toLocaleString('de-CH') }}</span>
</template>

<script>
export default {
	data() {
		return {
			displayNumber: 0,
			i: false,
		}
	},
	mounted() {
		clearInterval(this.i)
		if (this.number == this.displayNumber) {
			return
		}
	},
	beforeMount() {
		window.addEventListener('scroll', this.handler)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handler)
	},
	methods: {
		handler() {
			if (this.isInViewport()) {
				// IF IN VIEWPORT
				window.setTimeout(() => {
					this.countUp()
				}, 1000)
			}
		},
		countUp() {
			this.i = window.setInterval(() => {
				let change = this.number / this.interval / 2
				if (this.displayNumber != this.number) {
					// var change = (this.number - this.displayNumber) / 100
					change = change >= 0 ? Math.ceil(change) : Math.floor(change)
					this.displayNumber = Math.min(this.displayNumber + change, this.number)
				}
			}, 100)
		},
		isInViewport() {
			const rect = this.$refs.number.getBoundingClientRect()
			return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		},
	},
	props: { interval: { type: Number, default: 30 }, number: { type: Number, default: 0 } },
}
</script>

<style lang="sass" scoped>
span
	font-size: 5rem
	@include mobile
		font-size: 3rem
</style>
