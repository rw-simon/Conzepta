<template>
	<div class="footer-products">
		<h3>{{ $i18n.locale == 'fr' ? 'Produits' : 'Produkte' }}</h3>
		<nuxt-link :to="localePath({ name: 'produkte-policepad' })"><p>PolicePad</p></nuxt-link>
		<nuxt-link :to="localePath({ name: 'produkte-lexica' })"><p>Lexica</p></nuxt-link>
		<nuxt-link :to="localePath({ name: 'produkte-interlink' })"><p>InterLink</p></nuxt-link>
		<nuxt-link :to="localePath({ name: 'produkte-tachifox' })"><p>TachiFox</p></nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'FooterProducts',
}
</script>

<style lang="sass" scoped>
h3
	margin-bottom: 2rem
	font-size: 1.1rem
	text-transform: none
p
	margin: 0
</style>
