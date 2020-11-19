<template>
	<div class="text-one-columns container">
		<div class="column" v-html="columns" />
	</div>
</template>

<script>
export default {
	name: 'TextOneColumns',
	data() {
		return {
			columns: this.content.text_1_columns_column_1,
		}
	},
	props: {
		content: {},
	},
}
</script>

<style lang="sass" scoped></style>
