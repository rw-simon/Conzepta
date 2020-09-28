<template>
	<div>
		<div class="intro grid valign-center cols-2">
			<ProductIntro />
			<div class="filter br-2">
				<input
					:class="{
						'br bc-blue': true,
						active: selectedCategory == cat.id,
					}"
					v-for="(cat, i) in productCategories"
					:key="i"
					type="button"
					:value="cat.name"
					@click="selectedCategory = cat.id"
				/>
			</div>
		</div>
		<div class="products-list">
			<article
				v-show="p.product_category.includes(selectedCategory)"
				v-for="(p, i) in products"
				:key="i"
			>
				<h1>{{ p.title.rendered }}</h1>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedCategory: 2,
		}
	},
	async asyncData({ store }) {
		return {
			products: store.state.products,
			productCategories: store.state.productCategories,
		}
	},
}
</script>

<style lang="sass" scoped>
.intro
	min-height: 50vh
	margin-bottom: 5rem
	.filter
		border: 1px solid $c-blue
		display: grid
		grid-template-columns: auto auto auto
		input
			font-weight: 600
			margin: 2px 1px
			border-radius: 0
			transition: background-color .15s ease, color .15s ease
			&:hover
				cursor: pointer
			&.active
				background-color: white
				color: $c-gray
			&:first-child
				border-top-left-radius: 5px
				border-bottom-left-radius: 5px
				margin-left: 2px
			&:last-child
				margin-right: 2px
				border-top-right-radius: 5px
				border-bottom-right-radius: 5px
</style>
