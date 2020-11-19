<template>
	<div class="footer-about-us">
		<h3>Wir</h3>
		<nuxt-link to="/wir/geschichte"><p>Geschichte</p></nuxt-link>
		<nuxt-link to="/wir/offene-stellen"><p>Offene Stellen</p></nuxt-link>
		<nuxt-link to="/wir/news"><p>News</p></nuxt-link>
		<nuxt-link to="/wir/kontakt"><p>Kontakt</p></nuxt-link>
		<nuxt-link to="/wir/archiv"><p>Archiv</p></nuxt-link>
		<nuxt-link to="/impressum"><p>Impressum</p></nuxt-link>
		<nuxt-link to="/agb"><p>AGB</p></nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'FooterAbout',
}
</script>

<style lang="sass" scoped>
h3
	margin-bottom: 2rem
	text-transform: none
	font-size: 1.5rem
p
	margin: 0
</style>
