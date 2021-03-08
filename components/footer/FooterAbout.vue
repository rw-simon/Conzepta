<template>
	<div class="footer-about-us">
		<h3>Wir</h3>
		<div class="small-gap" style="row-gap: 0; column-gap: 1rem">
			<nuxt-link to="/portfolio"><p>Portfolio</p></nuxt-link>
			<nuxt-link to="/#news"><p>News</p></nuxt-link>
			<nuxt-link to="/offene-stellen"><p>Jobs</p></nuxt-link>
			<!-- <nuxt-link to="/wir"><p>Geschichte</p></nuxt-link>
			<nuxt-link :to="{ path: '/support', hash: '#support' }"><p>Kontakt</p></nuxt-link>
			<nuxt-link to="/impressum"><p>Impressum</p></nuxt-link>
			<nuxt-link to="/archiv"><p>Archiv</p></nuxt-link>
			<nuxt-link to="/agb"><p>AGB</p></nuxt-link> -->
		</div>
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
	font-size: 1.1rem
p
	margin: 0
</style>
