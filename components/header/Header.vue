<template>
	<header>
		<Menu />
		<ScrollIndicator />
	</header>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style lang="sass" scoped>
header
	background: white
	box-shadow: 0px -5px 10px 10px rgba(0,0,0,0.1)
	margin-bottom: 3rem
	position: sticky
	top: 0
	z-index: 999
</style>
