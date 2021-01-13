<template>
	<header>
		<Logo />
		<Menu />
		<LanguagePicker />
		<ScrollIndicator style="grid-column: 1/-1" />
	</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style lang="sass" scoped>
header
	display: grid
	grid-template-columns: 4rem 1fr 4rem
	grid-template-rows: 4rem
	position: sticky
	top: 0
	z-index: 99999
	background: white
	box-shadow: 0px -5px 10px 10px rgba(0,0,0,0.1)
	box-sizing: border-box
</style>
