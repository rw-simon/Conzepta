<template>
	<div class="grid cols-2 section small-gap">
		<div>
			<h2 class="page-more-subtitle">
				{{ content.acf.product_more.product_more_subtitle }}
			</h2>
			<h1 class="page-more-title">
				{{ content.acf.product_more.product_more_title }}
			</h1>
		</div>
		<p class="page-more-intro">
			{{ content.acf.product_more.product_more_paragraph }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'ProductIntro',
	data() {
		return {
			content: this.$store.state.pages['produkte'],
		}
	},
}
</script>

<style></style>
