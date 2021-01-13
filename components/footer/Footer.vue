<template>
	<footer class="p-1 font-mono">
		<div class="grid cols-2 small-gap">
			<section class="footer-left br bc-blue small-gap grid cols-2">
				<FooterAbout style="border-left: 2px solid white; padding-left: 2rem" />
				<FooterProducts style="border-left: 2px solid white; padding-left: 2rem" />
			</section>
			<section class="footer-right br bc-blue small-gap grid cols-2">
				<FooterContact style="border-left: 2px solid white; padding-left: 2rem" />
				<FooterSupport style="border-left: 2px solid white; padding-left: 2rem" />
			</section>
		</div>
		<div style="text-align: center; margin-top: 1rem">
			<p>&copy; 2020 Conzepta Team AG. All rights reserved.</p>
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
	margin-top: 4rem
	@include mobile
		margin-bottom: 5rem
section
	padding: 2rem
	.footer-section
		@include mobile
			padding: 0
</style>
