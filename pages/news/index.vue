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
		<div class="second" :id="`news-${i}`" v-for="(a, i) in news" :key="i" v-show="a.acf.kategorie.includes(selectedCategories.toLowerCase()) || selectedCategories == ($i18n.locale == 'fr' ? 'Tous' : 'Alle')">
			<div class="container">
				<div>
					<article style="" :class="{ 'news-article': true, long: a.content.rendered.length > 750, opened: openNews == i }">
						<div class="inner">
							<h3>{{ formatDate(a.acf.datum) }}</h3>
							<h2>{{ a.title.rendered }}</h2>
							<div v-html="a.content.rendered" />
						</div>
						<div @click="toggleOpen(i)" class="arrow-open"><img src="/arrows_bot.png" alt="" /></div>
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
		let news = await axios.get(`https://admin.conzepta.ch/index.php/wp-json/wp/v2/news?per_page=100&lang=${app.i18n.locale}`)
		// news = news
		return {
			news: news.data.sort(function (a, b) {
				return parseFloat(b.acf.datum) - parseFloat(a.acf.datum)
			}),
		}
	},
	data() {
		return {
			selectedCategories: this.$i18n.locale == 'fr' ? 'Tous' : 'Alle',
			productCategories: [this.$i18n.locale == 'fr' ? 'Tous' : 'Alle', this.$i18n.locale == 'fr' ? 'Général' : 'Allgemein', 'PolicePad', 'Lexica', 'InterLink', 'TachiFox'],
			openNews: 99,
		}
	},
	methods: {
		toggleOpen(i) {
			if (this.openNews == i) {
				this.openNews = 99
			} else {
				this.openNews = i
			}
			console.log(this.openNews)
		},
		formatDate(date) {
			let _d = ''
			_d = `${date.substring(6)}.${date.substring(4, 6)}.${date.substring(0, 4)}`
			return _d
		},
		toggleCat(cat) {
			console.log(cat)
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
article.news-article
	position: relative
	.arrow-open
		display: none
		width: 4rem
	&.long
		padding-bottom: 3rem
		.arrow-open
			display: block
			cursor: pointer
		.inner
			max-height: 300px
			overflow: hidden
			transition: max-height 500ms ease-in-out
		// .inner:after
		// 	content: ""
		// 	position: absolute
		// 	top: 0
		// 	bottom: 7rem
		// 	left: -30px
		// 	right: -30px
		// 	box-shadow: inset white 0 -40px 30px
		&.opened
			.inner
				max-height: 2000px
			.arrow-open
				transform: rotate(180deg)
	.open-news
		position: absolute
		bottom: 0
		text-align: center
		width: 100%
	&.open
		max-height: 100vh
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
		grid-template-columns: auto auto auto auto auto auto
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
