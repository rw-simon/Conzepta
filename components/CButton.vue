<template>
	<button :class="{ outlined: isOutline, 'font-mono': isMono, br: true }">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'CButton',
	props: {
		text: {
			type: String,
			default: 'Button',
		},
		link: {
			type: String,
			default: '/',
		},
		isExternal: {
			type: Boolean,
			default: false,
		},
		isOutline: {
			type: Boolean,
			default: false,
		},
		isMono: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="sass" scoped>
button
	-webkit-appearance: none
	appearance: none
	padding: .5rem 2rem
	margin: .5rem 0
	background: $c-blue
	display: inline-block
	border: none
	color: white
	font-size: .8rem
	font-family: 'Arboria', sans-serif
	&:hover
		cursor: pointer
	&.outlined
		background: none
		border: 1px solid white
		&:hover
			background: white
			color: $c-blue
	@include mobile
		margin: .5rem 0
		font-size: 1rem
		display: block
		width: 100%
</style>
