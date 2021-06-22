<template>
	<div class="container">
		<div class="section intro grid valign-end cols-2">
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
			<!-- <div class="filter br-2">
				<input
					:class="{
						'br bc-blue': true,
						active: selectedCategories.includes(cat.id),
					}"
					v-for="(cat, i) in productCategories"
					:key="i"
					type="button"
					:value="cat.name"
					@click="toggleCat(cat.id)"
				/>
			</div> -->
		</div>
		<div class="products-list grid cols-3 small-gap">
			<ProductPanel v-for="p in products" :key="p.id" :product="p" v-scroll-reveal="{ delay: 200 }" />
		</div>
		<div class="more section">
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
						Ein Glücksfall, für Sie und für uns. Denn wir lieben es, kreativ zu sein und neue Lösungen von Grund auf zu entwickeln. Wir sind auf dem Gebiet moderner Anwendungen zu Hause. Uns interessiert alles, wo täglich grosse
						Datenmengen anfallen, Prozesse optimiert, neue Schnittstellen implementiert oder neue Tools adaptiert werden – und wo am Schluss dennoch alles ganz einfach von überall her flexibel bedienbar sein muss.
					</p>
					<p v-scroll-reveal="{ delay: 400 }">Nehmen Sie unverbindlich Kontakt mit uns auf.</p>
					<nuxt-link :to="{ path: '/kontakt' }" v-scroll-reveal="{ delay: 400 }"><CButton text="Kontaktformular" /></nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'produkte',
	nuxtI18n: {
		paths: {
			//   en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
			fr: '/produits', // -> accessible at /fr/a-propos
			de: '/produkte', // -> accessible at /es/sobre
		},
	},
	data() {
		return {
			selectedCategories: [2],
		}
	},
	async asyncData({ app }) {
		let slug = app.i18n.locale == 'fr' ? 'produits' : 'produkte'
		let content = await axios.get(`https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/pages?slug=${slug}`)
		let products = await axios.get(`https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/products?lang=${app.i18n.locale}`)
		return {
			content: content.data[0],
			products: products.data,
		}
	},
	// async asyncData({ store }) {
	// 	return {
	// 		products: store.state.products,
	// 		productCategories: store.state.productCategories,
	// 	}
	// },
	methods: {
		toggleCat(cat) {
			this.selectedCategories.includes(cat)
				? (this.selectedCategories = this.selectedCategories.filter((c) => {
						return c != cat
				  }))
				: this.selectedCategories.push(cat)
			console.log(this.selectedCategories)
		},
	},
}
</script>

<style lang="sass" scoped>
.intro
	.filter
		border: 1px solid $c-blue
		display: grid
		grid-template-columns: auto auto auto
		@include mobile
			grid-template-columns: 1fr
		@include mobile-landscape
			grid-template-columns: 1fr
		input
			font-family: 'Arboria', sans-serif
			font-weight: 600
			margin: 2px 1px
			border-radius: 1px
			transition: background-color .15s ease, color .15s ease
			background-color: white
			color: $c-gray
			@include mobile
				border-radius: 5px
				margin: 2px
			@include mobile-landscape
				border-radius: 5px
				margin: 2px
			&:hover
				cursor: pointer
			&.active
				background-color: $c-blue
				color: white
			&:first-child
				border-top-left-radius: 5px
				border-bottom-left-radius: 5px
				margin-left: 2px
			&:last-child
				margin-right: 2px
				border-top-right-radius: 5px
				border-bottom-right-radius: 5px
.products-list
	grid-auto-flow: dense
</style>
