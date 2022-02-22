<template>
	<footer>
		<a target="_blank" href="https://ch.linkedin.com/company/conzepta-team-ag?trk=public_profile_topcard-current-company"><img class="linkedin-icon" src="/LinkedIn.svg" alt="" /></a>

		<div class="blue">
			<div class="container font-mono">
				<section class="support">
					<p @click="isOpen = 'support'">Support</p>
					<div :style="[isOpen == 'support' ? { 'max-height': '6rem' } : { 'max-height': 0 }]">
						<p>{{ $i18n.locale == 'de' ? 'Nehmen Sie mit uns Kontakt auf' : 'Prenez contact avec nous' }}</p>
						<nuxt-link :to="localePath({ name: 'kontakt', hash: '#kontakt' })"><CButton isOutline isMono :text="$i18n.locale == 'de' ? 'Kontaktformular' : 'Formulaire de contact'" /></nuxt-link>
					</div>
				</section>
				<section class="wir">
					<nuxt-link style="margin: 0; border: 0; padding: 0" v-if="isOpen == 'wir'" to="/wir">{{ $i18n.locale == 'de' ? 'Wir' : 'À propos' }}</nuxt-link>
					<p v-else @click="isOpen = 'wir'">{{ $i18n.locale == 'de' ? 'Wir' : 'À propos' }}</p>
					<div :style="[isOpen == 'wir' ? { 'max-height': '16rem' } : { 'max-height': 0 }]">
						<nuxt-link :to="localePath({ path: `/${item.slug}` })" v-for="(item, i) in $store.state.menu[$i18n.locale].footer.items[0].child_items" :key="i">{{ item.title }}</nuxt-link>
						<!-- <nuxt-link to="/support">Kontakt</nuxt-link> -->
						<!-- <nuxt-link to="/archiv">Archiv</nuxt-link> -->
						<!-- <nuxt-link to="/wir">Geschichte</nuxt-link> -->
						<!-- <nuxt-link to="/impressum">Impressum</nuxt-link> -->
					</div>
				</section>
				<section class="produkte">
					<nuxt-link style="margin: 0; border: 0; padding: 0" v-if="isOpen == 'produkte'" to="/produkte">{{ $i18n.locale == 'de' ? 'Produkte' : 'Produits' }}</nuxt-link>
					<p v-else @click="isOpen = 'produkte'">{{ $i18n.locale == 'de' ? 'Produkte' : 'Produits' }}</p>
					<div :style="[isOpen == 'produkte' ? { 'max-height': '11rem' } : { 'max-height': 0 }]">
						<nuxt-link :to="localePath({ path: `/produkte/${item.slug}` })" v-for="(item, i) in $store.state.menu[$i18n.locale].footer.items[1].child_items" :key="i">{{ item.title }}</nuxt-link>
						<!-- <nuxt-link to="/produkte/parkingpad"><p>ParkingPad</p></nuxt-link> -->
					</div>
				</section>
				<section class="sprache">
					<p @click="isOpen = 'sprache'">Sprache</p>
					<div :style="[isOpen == 'sprache' ? { 'max-height': '11rem' } : { 'max-height': 0 }]">
						<nuxt-link :to="switchLocalePath('de')">Deutsch</nuxt-link>
						<nuxt-link :to="switchLocalePath('fr')">Französisch</nuxt-link>
					</div>
				</section>
				<section>
					<p>Conzepta Team AG</p>
					<p>
						Allmendstrasse 54 <br />
						CH-3014 {{ $i18n.locale == 'de' ? 'Bern' : 'Berne' }}
					</p>
					<p>
						<a href="mailto:team@conzepta.ch">team@conzepta.ch</a><br />
						<a href="tel:+41313486020">+41 031 348 60 20</a>
					</p>
				</section>
			</div>
		</div>
		<div class="partner-logos">
			<a target="_blank" href="https://www.swissict.ch/"><img src="/swissict_logo_sw.png" alt="" /></a>
			<a target="_blank" href="https://www.swissmadesoftware.org/home.html"><img src="/swissmade_logo_sw.png" alt="" /></a>
		</div>
		<div style="text-align: center; margin-top: 1rem">
			<p style="color: black">&copy; 2021 Conzepta Team AG. All rights reserved.</p>
		</div>
	</footer>
</template>

<script>
export default {
	data() {
		return {
			isOpen: 'support',
		}
	},
}
</script>

<style lang="sass" scoped>
footer
	position: relative
	padding: 1rem 0 2rem
	.linkedin-icon
		height: 2.3rem
		position: absolute
		right: .5rem
		top: -1.8rem
	.partner-logos
		display: grid
		grid-template-columns: 1fr 1fr
		align-items: center
		gap: 1rem
		padding: 0 1rem
		img
			height: auto
	.blue
		background-color: $c-blue

	section
		padding: 1rem 0
		border-bottom: 1px solid white
		&:last-child
			border: none
		p
			margin-bottom: 0
		div
			overflow: hidden
			transition: max-height 300ms ease
		&.wir, &.produkte, &.sprache
			a
				display: block
				margin: .5rem .5rem .5rem 2rem
				padding: .5rem
				border-bottom: 1px solid white
	*
		color: white
</style>
