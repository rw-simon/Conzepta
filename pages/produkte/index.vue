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
			<product-panel v-for="p in products" :key="p.id" :product="p" v-scroll-reveal="{ delay: 200 }" />
			<!-- <ProductPanel /> -->
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
					<p v-scroll-reveal="{ delay: 300 }">
						{{ content.acf.product_more.product_more_paragraph }}
					</p>
					<nuxt-link :to="localePath({ name: 'kontakt' })" v-scroll-reveal="{ delay: 400 }"><CButton :text="$i18n.locale == 'fr' ? 'Formulaire de contact' : 'Kontaktformular'" /></nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import ProductPanel from '~/components/produkte/ProductPanel.vue'
export default {
	components: { ProductPanel },
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
		let content = await axios.get(`https://admin.conzepta.ch/index.php/wp-json/wp/v2/pages?slug=${slug}`)
		let products = await axios.get(`https://admin.conzepta.ch/index.php/wp-json/wp/v2/products?lang=${app.i18n.locale}&orderby=menu_order&order=asc`)
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
