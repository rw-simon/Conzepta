<template>
	<div class="footer-about-us">
		<h3>Conzepta</h3>
		<p>
			Conzepta Team AG<br />
			Allmendstrasse 54<br />
			CH-3014 {{ $i18n.locale == 'fr' ? 'Berne' : 'Bern' }}
		</p>
		<p>
			<a href="mailto:team@conzepta.ch" target="_blank">team@conzepta.ch</a><br />
			<a href="tel:+41313486020" target="_blank">+41 31 348 60 20</a>
		</p>
		<br />
		<p>{{ $i18n.locale == 'fr' ? 'Membre de' : 'Mitglied bei:' }} <a style="font-weight: bold" href="https://www.swissict.ch/">swiss ICT</a></p>
	</div>
</template>

<script>
export default {
	name: 'FooterContact',
}
</script>

<style lang="sass" scoped>
h3
	margin-bottom: 2rem
	font-size: 1.1rem
	text-transform: none
p
	margin: 0
</style>
