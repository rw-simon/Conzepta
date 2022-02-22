<template>
	<div class="footer-products">
		<h3>Support</h3>
		<p>{{ $i18n.locale == 'fr' ? 'Prenez contact avec nous.' : 'Nehmen Sie mit uns Kontakt auf.' }}</p>
		<nuxt-link :to="localePath({ name: 'kontakt' })"><CButton style="font-size: 0.7rem; padding-left: 0.5rem" isOutline isMono :text="$i18n.locale == 'fr' ? 'Formulaire de contact' : 'Kontaktformular'" /></nuxt-link>
		<!-- <nuxt-link to="/"><CButton isOutline isMono text="Team Viewer" /></nuxt-link> -->
	</div>
</template>

<script>
export default {
	name: 'FooterSupport',
}
</script>

<style lang="sass" scoped>
.footer-products
	grid-column: span 2
h3
	margin-bottom: 2rem
	font-size: 1.1rem
	text-transform: none
p
	margin: 0
</style>
