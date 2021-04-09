<template>
	<div id="console" :class="{ 'bc-blue br font-mono': true, active: isActive }">
		<p>
			<span v-if="!cookieText" @click="toggleConsole" class="toggle-console">[{{ toggleSymbol }}]</span>
		</p>
		<div class="content" v-if="cookieText">
			<p class="title" @click="toggleConsole">Conzepta //</p>
			<p>Wir verwenden Cookies um unsere Seite zu optimieren.</p>
			<!-- <CButton isOutline isMono text="Team Viewer" /> -->
			<CButton
				@click.native="
					cookieText = false
					setCookie()
				"
				isOutline
				isMono
				text="Zustimmen"
			/>
			<CButton isMono text="Info" />
		</div>
		<div class="content" v-else>
			<p class="title" @click="toggleConsole">Conzepta//</p>
			<p>Unterstützung gefällig? Nehmen Sie mit uns Kontakt auf.</p>
			<!-- <CButton isOutline isMono text="Team Viewer" /> -->
			<nuxt-link :to="{ path: '/kontakt' }"><CButton isOutline isMono text="Kontaktformular" /></nuxt-link>
		</div>
	</div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
	name: 'Console',
	data() {
		return {
			cookieText: false,
			title: '',
			isActive: true,
			toggleSymbol: 'X',
		}
	},
	methods: {
		toggleConsole() {
			this.isActive = !this.isActive
			this.toggleSymbol = this.isActive ? 'X' : '<'
		},
		setCookie() {
			this.$store.dispatch('setCookie')
		},
	},
	mounted() {
		if (Cookie.get('accepted') == 'true') {
			console.log('true')
			this.cookieText = false
		} else {
			this.cookieText = true
		}
	},
}
</script>

<style lang="sass" scoped>
#console
	box-shadow: 0 10px 25px -10px rgba(0,0,0,0.3)
	padding: 1rem
	position: fixed
	width: 32rem
	top: 10rem
	right: -30.2rem
	z-index: 99999
	display: grid
	grid-template-columns: 3rem 1fr
	transition: right $anim-smooth, bottom $anim-smooth
	span.toggle-console
		-moz-user-select: -moz-none
		-khtml-user-select: none
		-webkit-user-select: none
		-ms-user-select: none
		user-select: none
		&:hover
			cursor: pointer
	&.active
		right: 1.66rem
	@include mobile-landscape
		bottom: 0
		top: auto
		border-bottom-left-radius: 0
		border-bottom-right-radius: 0
	@include mobile
		width: 100%
		bottom: -11rem
		right: 0
		box-sizing: border-box
		top: auto
		border-bottom-left-radius: 0
		border-bottom-right-radius: 0
		grid-template-columns: 1fr
		grid-template-rows: 0 auto
		padding-bottom: 2rem
		z-index: 9999999
		box-shadow: 0px 5px 10px 10px rgba(0,0,0,0.1)
		p.title
			margin-bottom: 4rem
			transition: margin-bottom $anim-smooth
		span.toggle-console
			display: none
		&.active
			right: 0
			bottom: 0
			p.title
				margin-bottom: 0
</style>
