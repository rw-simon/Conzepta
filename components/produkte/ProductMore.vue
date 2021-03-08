<template>
	<div class="grid cols-2 small-gap">
		<div>
			<h3 class="page-more-subtitle" v-scroll-reveal="{ delay: 0 }">
				{{ content.acf.product_more.product_more_subtitle }}
			</h3>
			<h2 class="page-more-title" v-scroll-reveal="{ delay: 0 }">
				{{ content.acf.product_more.product_more_title }}
			</h2>
		</div>
		<div>
			<p class="page-more-intro" v-scroll-reveal="{ delay: 200 }">Sie finden in unserem Portfolio nicht ganz genau das, was Sie gesucht haben?</p>
			<p v-scroll-reveal="{ delay: 300 }">
				Ein Glücksfall, für Sie und für uns. Denn wir lieben es, kreativ zu sein und neue Lösungen von Grund auf zu entwickeln. Wir sind auf dem Gebiet moderner Anwendungen zu Hause. Uns interessiert alles, wo täglich grosse Datenmengen
				anfallen, Prozesse optimiert, neue Schnittstellen implementiert oder neue Tools adaptiert werden – und wo am Schluss dennoch alles ganz einfach von überall her flexibel bedienbar sein muss.
			</p>
			<p v-scroll-reveal="{ delay: 400 }">Nehmen Sie unverbindlich Kontakt mit uns auf.</p>
			<nuxt-link :to="{ path: '/kontakt' }" v-scroll-reveal="{ delay: 400 }"><CButton text="Kontaktformular" /></nuxt-link>
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
