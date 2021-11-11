<template>
	<div>
		<main-header />
		<Nuxt class="nuxt" />
		<Console v-if="!this.$route.path.includes('kontakt')" />
		<Footer id="footer" />
		<FooterMobile id="footer-mobile" />
	</div>
</template>

<script>
import MainHeader from '~/components/header/MainHeader.vue'
export default {
	components: { MainHeader },
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
