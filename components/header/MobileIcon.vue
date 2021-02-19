<template>
	<div class="ssss" style="justify-self: end; align-self: start">
		<div class="menu-icon">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MobileIcon',
}
</script>

<style lang="sass" scoped>
.ssss
	@include mobile
		grid-column: 3
div.menu-icon
	display: none
	height: 2rem
	width: 2rem
	padding-top: 1rem
	padding-right: 1rem
	grid-column-start: 3
	@include mobile
		display: block
</style>
