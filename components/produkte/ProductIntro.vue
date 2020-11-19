<template>
	<div class="product-intro">
		<h3 class="page-subtitle">
			{{ content.acf.product_intro.product_intro_subtitle }}
		</h3>
		<h1 class="page-title">
			{{ content.acf.product_intro.product_intro_title }}
		</h1>
		<p class="page-intro">
			{{ content.acf.product_intro.product_intro_paragraph }}
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
