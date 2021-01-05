<template>
	<div class="section">
		<div class="module" v-for="(m, i) in content.acf.modules" :key="i">
			<Module :module="m" />
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ store, params }) {
		return {
			content: store.state.pages[params.slug],
		}
	},
}
</script>

<style></style>
