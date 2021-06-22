<template>
	<div>
		<div style="background: #e7e9ec" id="support">
			<div class="container">
				<div class="grid cols-2" style="row-gap: 2rem">
					<div>
						<h3 v-scroll-reveal="{ delay: 0 }">Support</h3>
						<h1 v-scroll-reveal="{ delay: 200 }">{{ $i18n.locale == 'fr' ? 'Là pour vous//' : 'Für Sie da//' }}</h1>
						<p v-scroll-reveal="{ delay: 400 }">
							{{
								$i18n.locale == 'fr'
									? 'Un bon programme fonctionne sans problème. Mais même un bon programme a ses mauvais jours. C’est à ce moment-là que nous sommes à vos côtés pour vous épauler'
									: 'Eine gute Software ist jene, die ohne Probleme läuft. Aber auch eine gute Software kann mal einen schlechten Tag haben. Deshalb sind wir für Sie da, wann immer Sie uns brauchen.'
							}}
						</p>
						<p v-scroll-reveal="{ delay: 450 }">
							<span style="display: inline-block; width: 100px">Email:</span><a href="mailto:team@conzepta.ch">team@conzepta.ch</a><br />
							<span style="display: inline-block; width: 100px">{{ $i18n.locale == 'fr' ? 'Tél:' : 'Telefon:' }}</span
							><a href="tel:+413486020">+41 (0)31 348 60 20</a>
						</p>
						<p v-scroll-reveal="{ delay: 500 }">
							{{
								$i18n.locale == 'fr'
									? 'Et si tout marche à merveille, vous êtes de toute manière les bienvenus. Buvons ensemble une tasse de café ou de thé, sachant bien que les discussions les plus fructueuses sont celles qui se déroulent sans évocation des problèmes.'
									: 'Und übrigens: Wenn alles läuft, sind Sie bei uns erst recht willkommen, zu einer Tasse Kaffee oder Tee. Denn auch das garantieren wir Ihnen: Die besten Gespräche sind doch jene, die ganz ohne Probleme auskommen.'
							}}
						</p>
						<a style="margin-top: 2rem; display: inline-block; line-height: 1em; border: 1px solid blue; border-radius: 4px; padding: 0.3rem 2rem" href="https://www.teamviewer.com/de/info/quicksupport/" target="_blank"
							><img src="/logo-teamviewer.svg" style="height: 1.5rem" alt=""
						/></a>
						<div style="margin-top: 8rem">
							<h3>{{ $i18n.locale == 'fr' ? 'PASSEZ NOUS VOIR' : 'Kommen Sie vorbei' }}</h3>
							<h2>{{ $i18n.locale == 'fr' ? 'Heures d’ouverture' : 'Öffnungszeiten' }}</h2>
							<p>
								<span style="display: inline-block; width: 200px"
									>{{ $i18n.locale == 'fr' ? 'Du lundi ' : 'Montag bis ' }}<br />
									{{ $i18n.locale == 'fr' ? 'au vendredi' : 'Freitag:' }}</span
								><span style="display: inline-block"
									><a
										>{{ $i18n.locale == 'fr' ? '8 h 00 – 12 h 00' : '08:00 - 12:00 Uhr' }} <br />
										{{ $i18n.locale == 'fr' ? '13 h 00 – 17 h 00h' : '13:00 - 17:00 Uhr' }}
									</a></span
								><br />
								<!-- <span style="margin-top: 12px; display: inline-block; width: 200px">In Notfällen:</span><span><a href="tel:+41314444444">+41 (0)31 444 44 44</a></span> -->
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
	name: 'support',
	data() {
		return {
			selectedAnliegen: '',
			textArea: '',
		}
	},
	nuxtI18n: {
		paths: {
			fr: '/support', // -> accessible at /fr/a-propos
			de: '/support', // -> accessible at /es/sobre
		},
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
	min-height: calc(100vh - 24rem)
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
