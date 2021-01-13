<template>
	<div class="grid cols-2 small-gap">
		<div>
			<h3 class="page-more-subtitle">
				{{ content.acf.product_more.product_more_subtitle }}
			</h3>
			<h2 class="page-more-title">
				{{ content.acf.product_more.product_more_title }}
			</h2>
		</div>
		<div>
			<p class="page-more-intro">
				{{ content.acf.product_more.product_more_paragraph }}
			</p>
			<nuxt-link to="support"><CButton text="Kontaktformular" /></nuxt-link>
		</div>
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

<style lang="sass" scoped>
h3
	font-size: 2rem
</style>
