<template>
	<div>
		<div class="header">
			<div class="container">
				<div class="grid cols-2 small-gap" style="align-items: end">
					<div>
						<h3>{{ $i18n.locale == 'fr' ? 'Actuel' : 'Aktuell' }}</h3>
						<h1>News //</h1>
					</div>
					<div class="filter br-2">
						<input
							:class="{
								'br bc-blue': true,
								active: selectedCategories == productCategories[i],
							}"
							v-for="(cat, i) in productCategories"
							:key="i"
							type="button"
							:value="cat"
							@click="toggleCat(i)"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="second" :id="`news-${i}`" v-for="(a, i) in news" :key="i" v-show="a.acf.kategorie.includes(selectedCategories.toLowerCase()) || (selectedCategories == $i18n.locale) == 'fr' ? 'Tous' : 'Alle'">
			<div class="container">
				<div class="grid cols-2">
					<article style="grid-column: 1" class="news-article">
						<h3>{{ a.acf.datum }}</h3>
						<h2>{{ a.title.rendered }}</h2>
						<div v-html="a.content.rendered" />
					</article>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'news',
	nuxtI18n: {
		paths: {
			//   en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
			fr: '/news', // -> accessible at /fr/a-propos
			de: '/news', // -> accessible at /es/sobre
		},
	},
	async asyncData({ app }) {
		let news = await axios.get(`https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/news?lang=${app.i18n.locale}`)
		return {
			news: news.data,
		}
	},
	data() {
		return {
			selectedCategories: this.$i18n.locale == 'fr' ? 'Tous' : 'Alle',
			productCategories: [this.$i18n.locale == 'fr' ? 'Tous' : 'Alle', 'PolicePad', 'Lexica', 'InterLink', 'TachiFox'],
		}
	},
	methods: {
		toggleCat(cat) {
			this.selectedCategories = this.productCategories[cat]
			// if (cat == 0) {
			// 	this.selectedCategories = [0]
			// } else {
			// 	this.selectedCategories = []
			// 	this.selectedCategories.includes(cat)
			// 		? (this.selectedCategories = this.selectedCategories.filter((c) => {
			// 				return c != cat
			// 		  }))
			// 		: this.selectedCategories.push(cat)
			// }
			// console.log(this.selectedCategories)
		},
	},
}
</script>

<style lang="sass" scoped>
.header
	background-image: linear-gradient(90deg, white, $c-gray-light)
	padding: 10rem 0 15rem
	@include mobile
		padding: 4rem 0
.second
	padding: 5rem 0
	&:nth-child(2n +1)
		background-image: linear-gradient(-90deg, white, $c-gray-light)
.filter
		border: 1px solid $c-blue
		display: grid
		grid-template-columns: auto auto auto auto auto
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
			background: none
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
</style>
