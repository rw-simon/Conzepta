<template>
	<div>
		<ContentTwoColumns
			v-if="module.acf_fc_layout == 'content_2_columns'"
			:content="module"
		/>
	</div>
</template>

<script>
export default {
	props: {
		module: '',
	},
}
</script>

<style></style>
