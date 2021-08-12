<template>
	<div>
		<div v-if="content.text_2_columns_background">
			<div
				class="co"
				:style="{
					backgroundImage: 'url(' + content.text_2_columns_background.url + ')',
				}"
			>
				<div class="text-two-columns container">
					<div class="column" v-for="(c, i) in columns" :key="i" v-html="c" />
				</div>
			</div>
		</div>
		<div v-else>
			<div class="text-two-columns container">
				<div class="column" v-for="(c, i) in columns" :key="i" v-html="c" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TextTwoColumns',
	data() {
		return {
			columns: [this.content.text_2_columns_column_1, this.content.text_2_columns_column_2],
		}
	},
	props: {
		content: {},
	},
}
</script>

<style lang="sass" scoped>
.co
	background-size: contain
	background-repeat: no-repeat
	height: 50vw
	@include mobile
		height: auto
		padding-top: 36vh
		background-size: 150%
.text-two-columns
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
