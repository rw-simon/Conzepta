<template>
	<footer class="p-1 font-mono" style="position: relative">
		<a target="_blank" href="https://www.facebook.com/profile.php?id=100089606696517"><img class="facebook-icon" src="/Facebook.svg" alt="" /></a>
		<a target="_blank" href="https://ch.linkedin.com/company/conzepta-team-ag?trk=public_profile_topcard-current-company"><img class="linkedin-icon" src="/LinkedIn.svg" alt="" /></a>
		<a target="_blank" href="https://twitter.com/conzepta_ch"><img class="twitter-icon" src="/twitter.svg" alt="" /></a>
		<div class="grid cols-2 small-gap" style="gap: 1rem">
			<section class="footer-left br bc-blue small-gap grid cols-3" style="column-gap: 1rem">
				<span></span>
				<FooterAbout style="min-width: 15rem; border-left: 1px solid white; padding-left: 2rem" />
				<FooterProducts style="min-width: 10rem; border-left: 1px solid white; padding-left: 2rem" />
			</section>
			<section class="footer-right br bc-blue small-gap grid cols-3">
				<FooterContact />
				<FooterSupport />
			</section>
		</div>
		<div style="display: grid; grid-template-columns: 1fr 250px; align-items: center; padding: 0 1rem">
			<p style="color: gray; margin: 0; padding: 0">&copy; 2022 Conzepta Team AG. All rights reserved.</p>
			<div class="partner-logos">
				<a target="_blank" href="https://www.swissict.ch/"><img src="/swissict_logo.png" alt="" /></a>
				<a target="_blank" href="https://www.swissmadesoftware.org/home.html"><img src="/swissmade_logo.png" alt="" /></a>
			</div>
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
	font-size: .75rem
	margin-top: 5rem
	@include mobile
		margin-bottom: 5rem
section
	padding: 1rem 2rem
	.footer-section
		@include mobile
			padding: 0
.grid
	grid-template-columns: 5fr 3fr
.partner-logos
	display: grid
	grid-template-columns: 1fr 1fr
	align-items: center
	gap: 1rem
	img
		height: auto
.linkedin-icon
	height: 2.3rem
	position: absolute
	right: 1.66rem
	top: -1.8rem
.twitter-icon
	height: 2.3rem
	position: absolute
	right: 5rem
	opacity: .5
	top: -1.8rem
.facebook-icon
	height: 2.3rem
	position: absolute
	right: 8.33rem
	opacity: .5
	top: -1.8rem
</style>
