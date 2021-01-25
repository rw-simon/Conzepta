<template>
	<div>
		<Header />
		<Nuxt />
		<Console />
		<Footer id="footer" />
		<FooterMobile id="footer-mobile" />
	</div>
</template>

<script>
export default {
	head: {
		title: 'Conzepta – we make IT happen',
	},
}
</script>

<style lang="sass" scoped>
#footer-mobile
	display: none
	@include mobile
		display: block
#footer
	@include mobile
		display: none
</style>
