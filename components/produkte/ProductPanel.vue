<template>
	<article
		:class="{
			'project-panel br valign-end': true,
			'is-fullsize': product.acf.product_panelimage.product_panelimage_fullsize,
			['span-' + product.acf.columns]: true,
		}"
	>
		<div class="product-featured-image" :style="'background-image: url(' + product.acf.product_panelimage.product_panelimage_src.url + ')'"></div>
		<div class="product-panel-text p-2">
			<h4 v-html="product.title.rendered" />
			<p v-html="product.acf.product_subtitle" />
			<nuxt-link :to="'/produkte/' + product.slug"><CButton text="Mehr" /></nuxt-link>
		</div>
	</article>
</template>

<script>
export default {
	name: 'ProductPanel',
	props: ['product'],
}
</script>

<style lang="sass" scoped>
article
	height: 28rem
	background: $c-gray-light
	grid-template-rows: 1fr auto
	display: grid
	overflow: hidden
	.product-featured-image
		height: 100%
		width: 100%
		background-size: cover
		background-position: center
		background-repeat: no-repeat
		grid-column: 2
		grid-row: 1/-1
		@include mobile
			background-size: contain
			grid-column: 1/-1
		@include mobile-landscape
			grid-column: 1/-1
	&.span-1
		grid-template-columns: 1fr
		grid-column: span 1
		.product-featured-image
			grid-column: 1
			grid-row: 1
		.product-panel-text
			grid-row: 2
	&.span-2
		grid-template-columns: 1fr 1fr
		grid-column: span 2
		.product-featured-image
			background-size: 110%
		@include mobile
			grid-column: 1/-1
			grid-template-columns: 1fr
			grid-template-rows: 1fr auto
		@include mobile-landscape
			grid-column: 1/-1
			grid-template-columns: 1fr
			grid-template-rows: 1fr auto
	&.span-3
		grid-template-columns: 1fr 1fr 1fr
		grid-column: span 3
		.product-featured-image
			grid-column: 2/-1
		@include mobile
			grid-column: 1/-1
			grid-template-columns: 1fr
			grid-template-rows: 1fr auto
			.product-featured-image
				grid-column: 1/-1
		@include mobile-landscape
			grid-column: 1/-1
			grid-template-columns: 1fr
			grid-template-rows: 1fr auto
			.product-featured-image
				grid-column: 1/-1
	&.is-fullsize
		.product-featured-image
			grid-row: 1/-1
			grid-column: 1/-1
		.product-panel-text
			grid-row: 1/-1
			grid-column: 2
			@include mobile
				grid-column: 1
</style>
