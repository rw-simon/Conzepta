<template>
	<div>
		<div class="header">
			<div class="container">
				<div class="grid cols-2 small-gap" style="align-items: end">
					<div>
						<h3>Unsere Vergangenheit</h3>
						<h1>Archiv//</h1>
					</div>
					<div class="filter br-2">
						<input
							:class="{
								'br bc-blue': true,
								active: selectedCategories.includes(i),
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
		<div class="second" v-for="(a, i) in news" :key="i">
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
export default {
	async asyncData({ store }) {
		return {
			news: store.state.news,
		}
	},
	data() {
		return {
			selectedCategories: [2],
			productCategories: ['Alle', 'PolicePad', 'Lexica', 'Interlink', 'TachiFox'],
		}
	},
	methods: {
		toggleCat(cat) {
			if (cat == 0) {
				this.selectedCategories = [0]
			} else {
				this.selectedCategories.includes(cat)
					? (this.selectedCategories = this.selectedCategories.filter((c) => {
							return c != cat
					  }))
					: this.selectedCategories.push(cat)
			}
		},
	},
}
</script>

<style lang="sass" scoped>
.header
	background-image: linear-gradient(90deg, white, $c-gray-light)
	padding: 10rem 0 15rem
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
