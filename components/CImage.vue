<template>
	<img :src="src" :alt="alt" :title="title" />
</template>

<script>
export default {
	name: 'CImage',
	props: {
		src: {
			type: String,
			default: 'https://picsum.photos/1200',
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

<style></style>
