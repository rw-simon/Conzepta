<template>
	<div>
		<Header />
		<Nuxt class="nuxt" />
		<Console v-if="!this.$route.path.includes('kontakt')" />
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
.nuxt
	@include mobile
		padding-top: 4rem
#footer-mobile
	display: none
	@include mobile
		display: block
#footer
	@include mobile
		display: none
</style>
