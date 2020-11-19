<template>
	<div class="footer-products">
		<h3>Produkte</h3>
		<nuxt-link to="/produkte/policepad"><p>PolicePad</p></nuxt-link>
		<nuxt-link to="/produkte/tachifox"><p>Tachifox</p></nuxt-link>
		<nuxt-link to="/produkte/interlink"><p>Interlink</p></nuxt-link>
		<nuxt-link to="/produkte/backoffice"><p>BackOffice</p></nuxt-link>
		<nuxt-link to="/produkte/lexica"><p>Lexica</p></nuxt-link>
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
	font-size: 1.5rem
	text-transform: none
p
	margin: 0
</style>
