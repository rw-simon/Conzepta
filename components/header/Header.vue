<template>
	<header :class="{ opened: showSubmenu }" @mouseenter="showSubmenu = true" @mouseleave="showSubmenu = false">
		<Logo />
		<Menu class="menuu" :opened="showSubmenu" />
		<LanguagePicker />
		<MobileIcon @click.native="showSubmenu = !showSubmenu" />
		<ScrollIndicator style="grid-column: 1/-1" />
		<MobileMenu class="menumob" />
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return { showSubmenu: false }
	},
	watch: {
		$route() {
			this.showSubmenu = false
		},
	},
}
</script>

<style lang="sass" scoped>
.menuu
	@include mobile
		display: none
.menumob
	display: none
	grid-row: 3
	grid-column: 1/-1
header
	display: grid
	grid-template-columns: 4rem 1fr 8rem
	grid-template-rows: 1fr
	height: 4.5rem
	position: fixed
	width: 100%
	top: 0
	z-index: 99999
	background: white
	box-shadow: 0px -5px 10px 10px rgba(0,0,0,0.1)
	box-sizing: border-box
	transition: height 200ms ease
	&.opened
		height: 13rem
		// grid-template-rows: 17rem
		@include mobile
			width: 100%
			grid-template-rows: 4rem
			height: auto
			position: sticky
			.menumob
				display: block
</style>
