<template>
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
