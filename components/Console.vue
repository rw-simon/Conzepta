<template>
	<div
		id="console"
		:class="{ 'bc-blue p-1 br font-mono': true, active: isActive }"
	>
		<p>
			<span @click="toggleConsole" class="clickable toggle-console"
				>[{{ toggleSymbol }}]</span
			>
		</p>
		<div class="content">
			<p>Conzepta</p>
			<p>{Unterstützung gefällig? Nehmen Sie mit uns Kontakt auf.}</p>
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
	width: 24rem
	top: 10rem
	right: -20rem
	display: grid
	grid-template-columns: 4rem 1fr
	transition: right $anim-smooth
	span.toggle-console
		&:hover
			cursor: pointer
	&.active
		right: 1rem
</style>
