<template>
	<div style="height: 1000vh">
		<h1>Conzepta</h1>
		<h2>we make IT happen</h2>
		<div>
			{{ content.title.rendered }}
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
