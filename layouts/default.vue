<template>
	<div>
		<main-header />
		<Popup :content="content.acf" v-if="showPopup" />
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
	data() {
		return {
			showPopup: false,
		}
	},
	computed: {
		content() {
			return this.$i18n.locale == 'fr' ? this.$store.state.popup[1] : this.$store.state.popup[0]
		},
	},
	mounted() {
		if (this.content.acf.active) {
			this.showPopup = true
		}
		console.log(this.content)
	},
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
