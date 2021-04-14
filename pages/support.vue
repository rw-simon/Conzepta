<template>
	<div>
		<div style="background: #e7e9ec" id="support">
			<div class="container">
				<div class="grid cols-2" style="row-gap: 2rem">
					<div>
						<h3 v-scroll-reveal="{ delay: 0 }">Für Sie da</h3>
						<h1 v-scroll-reveal="{ delay: 200 }">Support //</h1>
						<p v-scroll-reveal="{ delay: 400 }">Eine gute Software ist jene, die ohne Probleme läuft. Aber auch eine gute Software kann mal einen schlechten Tag haben. Deshalb sind wir für Sie da, wann immer Sie uns brauchen.</p>
						<p>
							<span style="display: inline-block; width: 100px">Email:</span><a href="mailto:team@conzepta.ch">team@conzepta.ch</a><br />
							<span style="display: inline-block; width: 100px">Telefon:</span><a href="tel:+413486020">+41 (0)31 348 60 20</a>
						</p>
						<p>Und übrigens: Wenn alles läuft, sind Sie bei uns erst recht willkommen, zu einer Tasse Kaffee oder Tee. Denn auch das garantieren wir Ihnen: Die besten Gespräche sind doch jene, die ganz ohne Probleme auskommen.</p>
						<a style="margin-top: 2rem; display: inline-block; line-height: 1em; border: 1px solid blue; border-radius: 4px; padding: 0.3rem 2rem" href="https://teamviewer.com" target="_blank"
							><img src="/logo-teamviewer.svg" style="height: 1.5rem" alt=""
						/></a>
						<div style="margin-top: 8rem">
							<h3>Kommen Sie vorbei</h3>
							<h2>Öffnungszeiten</h2>
							<p>
								<span style="display: inline-block; width: 200px"
									>Montag bis <br />
									Freitag:</span
								><span style="display: inline-block"
									><a href="mailto:team@conzepta.ch"
										>08:00 - 12:00 Uhr <br />
										13:00 - 17:00 Uhr</a
									></span
								><br />
								<span style="margin-top: 12px; display: inline-block; width: 200px">In Notfällen:</span><span><a href="tel:+41314444444">+41 (0)31 444 44 44</a></span>
							</p>
						</div>
					</div>
					<div class="tvb" style="align-self: end; text-align: right"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedAnliegen: '',
			textArea: '',
		}
	},
	mounted() {
		if (this.$route.params.text == 'huhu') {
			console.log('HUHU')
		}
	},
}
</script>

<style lang="sass" scoped>
#support
	padding: 12rem 0
	@include mobile
		padding: 4rem 0
.tvb
	@include mobile
		a
			display: block
			width: 100%
			box-sizing: border-box
			text-align: center
select
	border: blue 1px solid
	border-radius: 5px
	box-sizing: border-box
	margin: 0
	width: 100%
	background-color: white
input, select
	@include mobile
		grid-column: span 2
iframe
	@include mobile
		max-width: 100% !important
</style>
