<template>
	<div class="ssss" style="justify-self: end; align-self: start">
		<div class="language-picker">
			<nuxt-link :to="switchLocalePath('de')">DE</nuxt-link>
			<nuxt-link :to="switchLocalePath('fr')">FR</nuxt-link>
			<img src="/80_Globus.png" style="height: 2rem" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'LanguagePicker',
}
</script>

<style lang="sass" scoped>
div.language-picker
	align-self: start
	padding-right: 1rem
	padding-top: 1rem
	display: grid
	align-items: center
	grid-template-columns: repeat(3, 1fr)
	@include mobile
		display: none
	a
		color: $c-gray
	.nuxt-link-exact-active
		color: $c-blue
	*
		justify-self: center
</style>
