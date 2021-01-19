<template>
	<footer class="p-1 font-mono">
		<div class="grid cols-2 small-gap" style="gap: 1rem; grid-template-columns: 5fr 3fr">
			<section class="footer-left br bc-blue small-gap grid cols-3" style="column-gap: 1rem">
				<span></span>
				<FooterAbout style="min-width: 15rem; border-left: 1px solid white; padding-left: 2rem" />
				<FooterProducts style="min-width: 10rem; border-left: 1px solid white; padding-left: 2rem" />
			</section>
			<section class="footer-right br bc-blue small-gap grid cols-3">
				<FooterContact />
				<FooterSupport />
				<span></span>
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
	font-size: .7rem
	margin-top: 5rem
	@include mobile
		margin-bottom: 5rem
section
	padding: 1rem 2rem
	.footer-section
		@include mobile
			padding: 0
</style>
