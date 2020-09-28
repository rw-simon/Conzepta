<template>
	<article :class="'project-panel br valign-end span-' + product.acf.columns">
		<div
			class="project-featured-image"
			:style="'background-image: url(' + media.source_url + ')'"
		></div>
		<div class="project-panel-text p-2">
			<h1 v-html="product.title.rendered" />
			<p>Lorem ipsum dolor sit amet</p>
			<CButton text="Mehr" />
		</div>
	</article>
</template>

<script>
export default {
	name: 'ProductPanel',
	data() {
		return {
			media: this.$store.state.media[this.product.featured_media],
		}
	},
	props: ['product'],
}
</script>

<style lang="sass" scoped>
article
	height: 32rem
	background: $c-gray-light
	grid-template-rows: 1fr auto
	display: grid
	overflow: hidden
	.project-featured-image
		height: 100%
		width: 100%
		background-size: cover
		background-position: center
		grid-column: 2
		grid-row: 1/-1
		@include mobile
			grid-column: 1/-1
		@include mobile-landscape
			grid-column: 1/-1
	&.span-1
		grid-template-columns: 1fr
		grid-column: span 1
		.project-featured-image
			grid-column: 1
			grid-row: 1
		.project-panel-text
			grid-row: 2
	&.span-2
		grid-template-columns: 1fr 1fr
		grid-column: span 2
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
		@include mobile
			grid-column: 1/-1
			grid-template-columns: 1fr
			grid-template-rows: 1fr auto
		@include mobile-landscape
			grid-column: 1/-1
			grid-template-columns: 1fr
			grid-template-rows: 1fr auto
</style>
