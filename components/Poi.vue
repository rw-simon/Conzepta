<template>
	<div :style="{ left: x + 'vw', top: y + 'vh' }" :class="{ poi: true, active: active }">
		<div class="pin" @mouseenter="active = true" @mouseleave="active = false"></div>
		<div class="box" @mouseover="active = true" @mouseleave="active = false">
			{{ text }}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return { active: false }
	},
	props: ['text', 'x', 'y'],
}
</script>

<style lang="sass" scoped>
.poi
	position: absolute
	&.active
		.pin
			background-image: url('/pin_hover.svg')
		.box
			visibility: visible
	.pin
		position: absolute
		cursor: pointer
		right: -38px
		top: -38px
		width: 64px
		height: 64px
		background-image: url('/pin.svg')
		background-size: cover
		background-repeat: no-repeat
	.box
		background-color: $c-blue
		visibility: hidden
		border-radius: 5px
		padding: 1.5rem
		color: white
		max-width: 400px
</style>
