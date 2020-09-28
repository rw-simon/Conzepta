<template>
	<div>
		<h1>Conzepta</h1>
		<h2>we make IT happen</h2>
		<div>
			{{ content['test-seite'].title.rendered }}
		</div>
		<div
			class="module"
			v-for="(m, i) in content['test-seite'].acf.modules"
			:key="i"
		>
			<Module :module="m" />
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ store }) {
		return {
			content: store.state.pages,
		}
	},
}
</script>

<style></style>
