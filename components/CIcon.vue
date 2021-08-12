<template>
	<img
		:class="'icon ' + size"
		:src="'/icon_' + src + '.svg'"
		:alt="alt"
		:title="title"
	/>
</template>

<script>
export default {
	name: 'CIcon',
	props: {
		size: {
			type: String,
			default: 'small',
		},
		src: {
			type: String,
			default: 'icon_sample',
		},
		alt: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="sass" scoped>
img.icon
	&.small
		width: 1rem
		height: 1rem
	&.medium
		width: 2rem
		height: 2rem
</style>
