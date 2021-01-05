<template>
	<div class="footer-products">
		<h3>Support</h3>
		<nuxt-link to="/support"><CButton isOutline isMono text="Kontaktformular" /></nuxt-link>
		<!-- <nuxt-link to="/"><CButton isOutline isMono text="Team Viewer" /></nuxt-link> -->
	</div>
</template>

<script>
export default {
	name: 'FooterSupport',
}
</script>

<style lang="sass" scoped>
h3
	margin-bottom: 2rem
	font-size: 1.5rem
	text-transform: none
p
	margin: 0
</style>
