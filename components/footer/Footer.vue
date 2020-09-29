<template>
	<footer class="p-1 font-mono">
		<p>// Footer work in progress</p>
		<div class="grid cols-2 small-gap">
			<section class="footer-left br bc-blue small-gap grid cols-2">
				<FooterAbout />
				<FooterProducts />
			</section>
			<section class="footer-right br bc-blue small-gap grid cols-2">
				<FooterContact />
				<FooterSupport />
			</section>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style lang="sass" scoped>
footer
	@include mobile
		margin-bottom: 5rem
section
	padding: 4rem
	.footer-section
		@include mobile
			padding: 0
</style>
