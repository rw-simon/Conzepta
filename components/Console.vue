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
			<p>Conzepta//</p>
			<p>{ Unterstützung gefällig? Nehmen Sie mit uns Kontakt auf. }</p>
			<Button isOutline isMono text="Team Viewer" />
			<Button isOutline isMono text="Kontaktformular" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Console',
	data() {
		return {
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
	transition: right $anim-smooth
	span.toggle-console
		&:hover
			cursor: pointer
	&.active
		right: 1rem
	@include mobile
		width: 100%
		bottom: 0
		right: calc(-100% + 4rem)
		top: auto
		border-bottom-left-radius: 0
		border-bottom-right-radius: 0
		&.active
			right: 0
</style>
