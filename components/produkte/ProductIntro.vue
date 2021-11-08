<template>
	<div class="product-intro">
		<h3 class="page-subtitle" v-scroll-reveal="{ delay: 0 }">
			{{ content.acf.product_intro.product_intro_subtitle }}
		</h3>
		<h1 class="page-title" v-scroll-reveal="{ delay: 200 }">
			{{ content.acf.product_intro.product_intro_title }}
		</h1>
		<p class="page-intro" v-scroll-reveal="{ delay: 400 }">
			{{ content.acf.product_intro.product_intro_paragraph }}
		</p>
	</div>
</template>

<script>
import axios from 'axios'
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

<style></style>
