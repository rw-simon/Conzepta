<template>
	<footer>
		<div class="blue">
			<div class="container font-mono">
				<section class="support">
					<p @click="isOpen = 'support'">Support</p>
					<div :style="[isOpen == 'support' ? { 'max-height': '6rem' } : { 'max-height': 0 }]">
						<p>Nehmen Sie mit uns Kontakt auf</p>
						<nuxt-link to="/support"><CButton isOutline isMono text="Kontaktformular" /></nuxt-link>
					</div>
				</section>
				<section class="wir">
					<p @click="isOpen = 'wir'">Wir</p>
					<div :style="[isOpen == 'wir' ? { 'max-height': '16rem' } : { 'max-height': 0 }]">
						<nuxt-link to="/portfolio">Portfolio</nuxt-link>
						<nuxt-link to="/#news">News</nuxt-link>
						<nuxt-link to="/offene-stellen">Jobs</nuxt-link>
						<!-- <nuxt-link to="/support">Kontakt</nuxt-link> -->
						<!-- <nuxt-link to="/archiv">Archiv</nuxt-link> -->
						<!-- <nuxt-link to="/wir">Geschichte</nuxt-link> -->
						<!-- <nuxt-link to="/impressum">Impressum</nuxt-link> -->
					</div>
				</section>
				<section class="produkte">
					<p @click="isOpen = 'produkte'">Produkte</p>
					<div :style="[isOpen == 'produkte' ? { 'max-height': '11rem' } : { 'max-height': 0 }]">
						<nuxt-link to="/produkte/policepad">PolicePad</nuxt-link>
						<nuxt-link to="/produkte/lexica">Lexica</nuxt-link>
						<nuxt-link to="/produkte/interlink">Interlink</nuxt-link>
						<nuxt-link to="/produkte/tachifox">TachiFox</nuxt-link>
						<nuxt-link to="/produkte/parkingpad"><p>ParkingPad</p></nuxt-link>
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
						CH-3014 Bern
					</p>
					<p>
						<a href="mailto:team@conzepta.ch">team@conzepta.ch</a><br />
						<a href="tel:+41313486020">+41 31 348 60 20</a>
					</p>
				</section>
			</div>
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
			isOpen: '',
		}
	},
}
</script>

<style lang="sass" scoped>
footer
	padding: 1rem 0 2rem
	margin-bottom: 3rem
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
