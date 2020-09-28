<template>
	<div class="content-two-columns">
		<div class="column" v-for="(c, i) in columns" :key="i">
			<div
				class="image br"
				:style="'background-image:url(' + c.image.url + ')'"
			/>
			<h2 v-html="c.title" />
			<p v-html="c.text" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContentTwoColumns',
	data() {
		return {
			columns: [
				{
					title: this.content.content_2_columns_column_1
						.content_2_columns_column_1_title,
					image: this.content.content_2_columns_column_1
						.content_2_columns_column_1_image,
					text: this.content.content_2_columns_column_1
						.content_2_columns_column_1_text,
				},
				{
					title: this.content.content_2_columns_column_2
						.content_2_columns_column_2_title,
					image: this.content.content_2_columns_column_2
						.content_2_columns_column_2_image,
					text: this.content.content_2_columns_column_2
						.content_2_columns_column_2_text,
				},
			],
		}
	},
	props: {
		content: {},
	},
}
</script>

<style lang="sass" scoped>
.content-two-columns
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 8rem
	@include mobile
		grid-template-columns: 1fr
		gap: 4rem
	@include mobile-landscape
		gap: 4rem
	.image
		height: 15rem
		background-size: cover
		margin-bottom: 2rem
</style>
