<template>
	<div>
		<div style="padding: 12rem 0; background: #e7e9ec" id="support">
			<div class="container">
				<div class="grid cols-2" style="row-gap: 2rem">
					<div>
						<h3 v-scroll-reveal="{ delay: 0 }">Jederzeit</h3>
						<h1 v-scroll-reveal="{ delay: 200 }">Support //</h1>
						<p v-scroll-reveal="{ delay: 400 }">
							Eine gute Software ist jene, die ohne Probleme läuft. Aber auch eine gute Software kann mal einen schlechten Tag haben. Deshalb sind wir für Sie da, wann immer Sie uns brauchen. Das garantieren wir Ihnen.
						</p>
					</div>
					<div class="tvb" style="align-self: end; text-align: right">
						<a style="display: inline-block; line-height: 1em; border: 1px solid blue; border-radius: 4px; padding: 0.3rem 2rem" href="https://teamviewer.com" target="_blank"
							><img src="/logo-teamviewer.svg" style="height: 1.5rem" alt=""
						/></a>
					</div>
					<div>
						<p v-scroll-reveal="{ delay: 500 }">Email: team@conzepta.ch <br />Telefon: +41 348 60 20</p>
					</div>
				</div>
				<p v-scroll-reveal="{ delay: 700 }">
					Und übrigens: Wenn alles läuft, sind Sie bei uns erst recht willkommen, zu einer Tasse Kaffee oder Tee. Denn auch das garantieren wir Ihnen: Die besten Gespräche sind doch jene, die ganz ohne Probleme auskommen.
				</p>
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
