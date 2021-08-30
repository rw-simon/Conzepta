<template>
	<div class="asp" style="position: relative">
		<div :style="{ left: x + 'px', top: y + 'px' }" :class="{ poi: true, active: active }">
			<div class="pin" @mouseenter="active = true" @mouseleave="active = false"></div>
			<div class="box" @mouseover="active = true" @mouseleave="active = false">
				{{ text }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Poi',
	data() {
		return { active: false }
	},
	props: ['text', 'x', 'y'],
}
</script>

<style lang="sass" scoped>
.asp
	@include mobile
		display: none
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
		max-width: 250px
</style>
