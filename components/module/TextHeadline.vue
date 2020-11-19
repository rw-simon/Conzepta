<template>
	<div class="text-headline container">
		<div v-html="text" />
	</div>
</template>

<script>
export default {
	name: 'TextHeadline',
	data() {
		return {
			text: this.content.text_headline_content,
		}
	},
	props: {
		content: '',
	},
}
</script>

<style lang="sass" scoped>
.text-headline
	div
		margin: 0 8rem
</style>
