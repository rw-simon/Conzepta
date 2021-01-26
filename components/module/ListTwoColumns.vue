<template>
	<div class="container">
		<div class="list-two-columns">
			<div class="column-1">
				<article v-for="(c, i) in columns[0]" :key="i">
					<img class="list-icon" :src="c.list_2_columns_column_1_icon" alt="" />
					<h4>
						{{ c.list_2_columns_column_1_text.list_2_columns_column_1_text_title }}
					</h4>
					<p>
						{{ c.list_2_columns_column_1_text.list_2_columns_column_1_text_content }}
					</p>
				</article>
			</div>
			<div class="column-2">
				<article v-for="(c, i) in columns[1]" :key="i">
					<img class="list-icon" :src="c.list_2_columns_column_2_icon" alt="" />
					<h4>
						{{ c.list_2_columns_column_2_text.list_2_columns_column_2_text_title }}
					</h4>
					<p>
						{{ c.list_2_columns_column_2_text.list_2_columns_column_2_text_content }}
					</p>
				</article>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ListTwoColumns',
	data() {
		return {
			columns: [this.content.list_2_columns_column_1, this.content.list_2_columns_column_2],
		}
	},
	props: {
		content: {},
	},
}
</script>

<style lang="sass" scoped>
.list-two-columns
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 8rem
	article
		position: relative
		.list-icon
			position: absolute
			left: -4.5rem
			top: .5rem
			max-width: 3rem
			height: 3rem
			@include mobile
				left: -3rem
				max-width: 2rem
				height: 2rem
	@include mobile
		grid-template-columns: 1fr
		gap: 4rem
		padding-left: 3rem
	@include mobile-landscape
		gap: 4rem
</style>
