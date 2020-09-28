<template>
	<div
		id="console"
		:class="{ 'bc-blue p-1 br font-mono': true, active: isActive }"
	>
		<p>
			<span @click="toggleConsole" class="toggle-console"
				>[{{ toggleSymbol }}]</span
			>
		</p>
		<div class="content">
			<p class="title" @click="toggleConsole">Conzepta//</p>
			<p>{ Unterstützung gefällig? Nehmen Sie mit uns Kontakt auf. }</p>
			<CButton isOutline isMono text="Team Viewer" />
			<CButton isOutline isMono text="Kontaktformular" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Console',
	data() {
		return {
			title: '',
			isActive: false,
			toggleSymbol: 'X',
		}
	},
	methods: {
		toggleConsole() {
			this.isActive = !this.isActive
			this.toggleSymbol = this.isActive ? 'X' : '<'
		},
	},
}
</script>

<style lang="sass" scoped>
#console
	position: fixed
	width: 30rem
	top: 10rem
	right: -26rem
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
		right: 1rem
	@include mobile-landscape
		bottom: 0
		top: auto
		border-bottom-left-radius: 0
		border-bottom-right-radius: 0
	@include mobile
		width: 100%
		bottom: -13.5rem
		right: 0
		top: auto
		border-bottom-left-radius: 0
		border-bottom-right-radius: 0
		grid-template-columns: 1fr
		grid-template-rows: 0 auto
		padding-bottom: 2rem
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
