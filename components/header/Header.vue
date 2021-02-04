<template>
	<header :class="{ opened: showSubmenu }" @mouseenter="showSubmenu = true" @mouseleave="showSubmenu = false">
		<Logo />
		<Menu :opened="showSubmenu" />
		<LanguagePicker />
		<ScrollIndicator style="grid-column: 1/-1" />
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return { showSubmenu: false }
	},
}
</script>

<style lang="sass" scoped>
header
	display: grid
	grid-template-columns: 4rem 1fr 8rem
	grid-template-rows: 4rem
	position: sticky
	top: 0
	z-index: 99999
	background: white
	box-shadow: 0px -5px 10px 10px rgba(0,0,0,0.1)
	box-sizing: border-box
	&.opened
		grid-template-rows: 17rem
</style>
