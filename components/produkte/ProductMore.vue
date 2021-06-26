<template>
	<div class="grid cols-2 small-gap">
		<div>
			<h3 class="page-more-subtitle" v-scroll-reveal="{ delay: 0 }">
				{{ content.acf.product_more.product_more_subtitle }}
			</h3>
			<h2 class="page-more-title" v-scroll-reveal="{ delay: 0 }">
				{{ content.acf.product_more.product_more_title }}
			</h2>
		</div>
		<div>
			<p class="page-more-intro" v-scroll-reveal="{ delay: 200 }">Sie finden in unserem Portfolio nicht ganz genau das, was Sie gesucht haben?</p>
			<p v-scroll-reveal="{ delay: 300 }">
				{{ content.acf.product_more.product_more_paragraph }}
			</p>
			<p v-scroll-reveal="{ delay: 400 }">Nehmen Sie unverbindlich Kontakt mit uns auf.</p>
			<nuxt-link :to="localePath({ name: 'kontakt' })" v-scroll-reveal="{ delay: 400 }"><CButton :text="$i18n.locale == 'fr' ? 'Formulaire de contact' : 'Kontaktformular'" /></nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductIntro',
	async asyncData({ app }) {
		let slug = app.i18n.locale == 'fr' ? 'produits' : 'produkte'
		let content = await axios.get(`https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/pages?slug=${slug}`)
		return {
			content: content.data[0],
		}
	},
}
</script>

<style lang="sass" scoped>
h3
	font-size: 2rem
</style>
