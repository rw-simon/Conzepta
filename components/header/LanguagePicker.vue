<template>
	<div class="language-picker">
		<CIcon src="language" size="medium" />
		<nuxt-link :to="switchLocalePath('de')">DE</nuxt-link>
		<nuxt-link :to="switchLocalePath('fr')">FR</nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'LanguagePicker',
}
</script>

<style lang="sass" scoped>
div.language-picker
	display: grid
	align-content: center
	*
		justify-self: center
</style>
