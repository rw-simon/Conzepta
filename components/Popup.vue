<template>
	<div class="backdrop" v-if="!closed">
		<div class="popup" v-scroll-reveal>
			<span class="close" @click="closePopup()">[x]</span>
			<div v-html="content.content.text" />
			<a :href="content.content.button.link" @click="closePopup()">
				<CButton isOutline :text="content.content.button.anzeigetext" />
			</a>
		</div>
	</div>
</template>
<script>
import Cookie from 'js-cookie'
import CButton from './CButton.vue'

export default {
	data() {
		return {
			closed: false,
		}
	},
	methods: {
		closePopup() {
			this.closed = true
			this.setCookie()
		},
		setCookie() {
			this.$store.dispatch('setPopupCookie')
		},
	},
	beforeMount() {
		if (Cookie.get('popup-accepted') == 'true') {
			this.closed = true
		} else {
			this.closed = false
		}
		this.toggleSymbol = this.isActive ? 'X' : '<'
	},
	props: ['content'],
	components: { CButton },
}
</script>

<style lang="sass" scoped>
.backdrop
	width: 100vw
	height: 100vh
	position: fixed
	z-index: 99999999
	display: grid
	align-items: center
	justify-items: center
	background: rgba(0,0,0,0.75)
.popup
	span.close
		cursor: pointer
		font-size: 1rem
		font-family: 'Lucida Console'
		float: right
		margin: -1rem -1rem 0 0
	max-width: 50%
	color: white
	font-size: 1.75rem
	background: $c-blue
	border: 1px solid white
	border-radius: .5rem
	padding: 3rem
	box-sizing: border-box
</style>
