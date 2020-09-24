<template>
	<div class="indicator-wrapper">
		<div
			class="indicator-bar"
			:style="{ width: scrollPosition + '%' }"
		></div>
	</div>
</template>

<script>
export default {
	name: 'ScrollIndicator',
	data() {
		return {
			scrollPosition: 60,
		}
	},
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
