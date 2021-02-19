<template>
	<div class="wir">
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
	background-position: right 10vh
	margin-top: -10rem
	padding-top: 10rem
	background-repeat: no-repeat
	@include mobile
		h1
			font-size: 2rem
		padding-top: 10rem
		margin-top: -3rem
		background-position-y: -20vh
		background-size: 130%
</style>
