<template>
	<nuxt-link to="/"><img style="height: auto" src="/icon.png" alt="Conzepta Logo" title="Conzepta Logo" /></nuxt-link>
</template>

<script>
export default {
	name: 'Logo',
	props: {
		isLink: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style lang="sass" scoped>
a
	display: block
	padding: .5rem
	box-sizing: border-box
</style>
