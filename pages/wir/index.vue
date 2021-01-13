<template>
	<div class="section wir">
		<div class="module" v-for="(m, i) in content.acf.modules" :key="i">
			<Module :module="m" />
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ store }) {
		return {
			content: store.state.pages['wir'],
		}
	},
}
</script>

<style lang="sass" scoped>
.wir
	background-image: url('/background_globe.png')
	background-size: contain
	background-position: top right
	margin-top: 0
	padding-top: 10rem
	background-repeat: no-repeat
</style>
