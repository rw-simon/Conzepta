<template>
	<div class="section">
		<div class="module" v-for="(m, i) in content.acf.modules" :key="i">
			<Module :module="m" />
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import Module from '~/components/module/Module.vue'
export default {
	components: { Module },
	async asyncData({ params }) {
		let content = await axios.get(`https://admin.conzepta.ch/index.php/wp-json/wp/v2/pages?slug=${params.slug}`)
		return {
			content: content.data[0],
		}
	},
}
</script>

<style></style>
