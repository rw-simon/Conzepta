<template>
	<div class="container">
		<div class="section intro grid valign-end cols-2">
			<ProductIntro />
			<div class="filter br-2">
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
			</div>
		</div>
		<div class="products-list grid cols-3 small-gap">
			<ProductPanel
				v-for="p in products"
				:key="p.id"
				v-show="
					p.product_category.some(
						(cat) => selectedCategories.indexOf(cat) >= 0
					)
				"
				:product="p"
			/>
		</div>
		<div class="more section">
			<ProductMore />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedCategories: [2],
		}
	},
	async asyncData({ store }) {
		return {
			products: store.state.products,
			productCategories: store.state.productCategories,
		}
	},
	methods: {
		toggleCat(cat) {
			this.selectedCategories.includes(cat)
				? (this.selectedCategories = this.selectedCategories.filter(
						(c) => {
							return c != cat
						}
				  ))
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
