<template>
	<div class="wir">
		<div class="module" v-for="(m, i) in content.acf.modules" :key="i">
			<module :module="m" />
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Module from '~/components/module/Module.vue'
export default {
	components: { Module },
	name: 'wir',
	async asyncData({ app }) {
		let slug = app.i18n.locale == 'fr' ? 'a-propos' : 'wir'
		let content = await axios.get(`https://admin.conzepta.ch/index.php/wp-json/wp/v2/pages?slug=${slug}`)
		return {
			content: content.data[0],
		}
	},
	nuxtI18n: {
		paths: {
			//   en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
			fr: '/a-propos', // -> accessible at /fr/a-propos
			de: '/wir', // -> accessible at /es/sobre
		},
	},
}
</script>

<style lang="sass" scoped>
.wir
	background-image: url('/background_globe.png')
	background-size: contain
	background-position: right 10vh
	margin-top: -10rem
	padding-top: 10rem
	background-repeat: no-repeat
	@include mobile
		h1
			font-size: 2rem
		padding-top: 10rem
		margin-top: -3rem
		background-position-y: -20vh
		background-size: 130%
</style>
