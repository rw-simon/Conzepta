<template>
	<header :class="{ opened: showSubmenu }" @mouseenter="showSubmenu = true" @mouseleave="showSubmenu = false">
		<logo />
		<main-menu class="menuu" :opened="showSubmenu" />
		<language-picker />
		<mobile-icon @click.native="showSubmenu = !showSubmenu" />
		<scroll-indicator style="grid-column: 1/-1" />
		<mobile-menu class="menumob" />
	</header>
</template>

<script>
import Logo from '../Logo.vue'
import LanguagePicker from './LanguagePicker.vue'
import MainMenu from './MainMenu.vue'
import MobileIcon from './MobileIcon.vue'
import MobileMenu from './MobileMenu.vue'
import ScrollIndicator from './ScrollIndicator.vue'
export default {
	components: { Logo, MainMenu, LanguagePicker, MobileIcon, ScrollIndicator, MobileMenu },
	name: 'MainHeader',
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
