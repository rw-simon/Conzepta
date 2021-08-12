<template>
	<div>
		<div v-scroll-reveal="{ delay: 0 }" class="banner">
			<div class="container">
				<div class="grid cols-2">
					<div></div>
					<div class="texti">
						<div v-html="content.acf.banner.text"></div>
						<!-- <h3 v-scroll-reveal="{ delay: 0 }">Kommunikatonssystem</h3>
						<h1 v-scroll-reveal="{ delay: 200 }">InterLink //</h1>
						<p v-scroll-reveal="{ delay: 400 }">
							InterLink ist ein zuverlässiges Kommunikationssystem, das Ihre Mitarbeitenden während der Arbeitszeit begleitet: Präsenzzeiten erfassen, Zutritte gewähren, Auftragszeiten buchen. Sie erhalten alle Aktivitäten in Echtzeit,
							weltweit.
						</p> -->
						<img v-scroll-reveal="{ delay: 600 }" style="width: 1.2rem" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/12/icon_windows.png" alt="" />
						<nuxt-link to="/wir#urs-blaser">
							<div class="grid cols-2 small-gap person" style="align-items: center; margin-top: 2rem">
								<div>
									<p v-scroll-reveal="{ delay: 800 }" style="margin: 0; line-height: 1em">{{ $i18n.locale == 'fr' ? 'Gestionnaire de produit' : 'Produktemanager' }}</p>
									<p v-scroll-reveal="{ delay: 1000 }" style="font-weight: 900">Urs Blaser</p>
								</div>
								<div>
									<img v-scroll-reveal="{ delay: 1200 }" style="height: auto" src="/portrait_placeholder.png" alt="" />
								</div>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<div class="linebg">
			<div>
				<div style="margin-top: 8rem" class="vernetzen">
					<div class="container">
						<div class="grid cols-2">
							<div style="margin-top: 16rem" v-html="content.acf.unabhangig_vernetzen.veretzen_text">
								<h3 v-scroll-reveal="{ delay: 0 }">Unabhängig Vernetzen</h3>
								<h2 v-scroll-reveal="{ delay: 200 }">Ein Protokoll für alle Hersteller</h2>
								<p v-scroll-reveal="{ delay: 400 }">
									InterLink setzt dort an, wo Hersteller aufhören: Es «übersetzt» die spezifischen Protokolle in ein Einheitliches. Die Kommunikation zwischen den Zeit- und Zutrittsterminals und dem Managementsystem findet in
									Echtzeit statt. Dabei spielt es keine Rolle, ob Ihr Betrieb nur ein einziges Terminal betreibt oder mehrere Tausend in einem Grosskonzern mit global verteilten Produktionsstätten verwaltet.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="something" style="margin-top: 10rem">
				<div class="container">
					<h3 v-scroll-reveal="{ delay: 0 }" style="text-align: center">BIXI SYSTEMS / DORMAKABA / MPDV / PCS / PRIMION / TYCO / VICKING</h3>
					<h2 v-scroll-reveal="{ delay: 200 }" style="text-align: center; margin-bottom: 8rem">{{ content.acf.numbers.titel }}</h2>
					<div class="grid cols-5">
						<div style="grid-column: span 3">
							<h1 v-scroll-reveal="{ delay: 0 }" style="margin-bottom: 0; line-height: 1em"><RollingNumber :number="20" /></h1>
							<h3 v-scroll-reveal="{ delay: 100 }" style="margin-bottom: 2rem">{{ $i18n.locale == 'fr' ? 'Ans' : 'Jahre' }}</h3>
							<h1 v-scroll-reveal="{ delay: 200 }" style="margin-bottom: 0; line-height: 1em"><RollingNumber :number="30000" /></h1>
							<h3 v-scroll-reveal="{ delay: 300 }" style="margin-bottom: 2rem">{{ $i18n.locale == 'fr' ? 'Terminaux' : 'Terminals' }}</h3>
							<h1 v-scroll-reveal="{ delay: 400 }" style="margin-bottom: 0; line-height: 1em"><RollingNumber :number="3000000" /></h1>
							<h3 v-scroll-reveal="{ delay: 500 }" style="margin-bottom: 2rem">{{ $i18n.locale == 'fr' ? 'D’ENREGISTREMENTS PAR JOur' : 'Buchungen pro Tag' }}</h3>
						</div>
						<div style="grid-column: span 2" v-html="content.acf.numbers['']">
							<!-- <p v-scroll-reveal="{ delay: 300 }">
								Mit seinen weltweit über 30'000 Terminals und den damit gemachten 3 Millionen Buchungen pro Tag hat sich InterLink als bewährtes System etabliert. Unsere Eigenentwicklung steht bereits seit über 20 Jahren mit höchster
								Zuverlässigkeit im Einsatz. Viele Generationen von Terminals werden unterstützt und laufend werden neue Terminals hinzugefügt.
							</p> -->
						</div>
					</div>
				</div>
			</div>
			<div class="funktionen">
				<div class="container">
					<div class="grid cols-2">
						<span></span>
						<div style="margin-top: 6rem" v-html="content.acf.funktionen.funktionen_text">
							<h3 v-scroll-reveal="{ delay: 0 }">Funktionen</h3>
							<h2 v-scroll-reveal="{ delay: 200 }">Da schaltet die Konkurrenz ab</h2>
							<p v-scroll-reveal="{ delay: 400 }">Weitere interessante Aspekte sind der Offline-Betrieb, die Datensicherung, sowie ein einzigartiges technisches Analysetool.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="background-diagonal-3">
			<div class="padding-large">
				<div class="clock">
					<div class="container">
						<div :class="{ text: true, open: showContentKomp }">
							<div v-html="content.acf.arbeitszeiten.text_intro"></div>
							<!-- <h3 v-scroll-reveal="{ delay: 0 }">ARBEITSZEITEN AUSWERTEN</h3>
							<h2 v-scroll-reveal="{ delay: 200 }">Kommunikation kann so viel mehr</h2>
							<p v-scroll-reveal="{ delay: 400 }" class="intro">
								Bewegen sich Mitarbeitende mit einem Badge an ihrem Arbeitsort, passiert im Hintergrund vieles: Türen müssen, je nach Person, öffnen oder verschlossen bleiben. Arbeitszeiten werden erfasst. Viele Schnittstellen, die
								ineinandergreifen. Und Daten, die Sie im Auge behalten wollen. InterLink bietet Ihnen eine reibungslose Kommunikation aller Zeit- und Zutrittsterminals, die über die verschiedenen Standorte Ihres Betriebs verteilt
								sind.
							</p> -->
							<img
								@click="toggleContentKomp"
								:class="{
									'more-icon': true,
									mirrored: showContentKomp,
								}"
								src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_arrowDown.png"
								alt=""
							/>
							<div></div>
							<div :class="{ more: true, active: showContentKomp }" v-html="content.acf.arbeitszeiten.text_ausgeklappt"></div>
						</div>
					</div>
				</div>
				<div class="banner-footer">
					<div class="container">
						<div class="grid cols-2">
							<div></div>
							<div class="ppi" v-html="content.acf.offnet_turen.turen_text">
								<h3 v-scroll-reveal="{ delay: 0 }">VERBINDET BESTEHENDE SYSTEME</h3>
								<h2 v-scroll-reveal="{ delay: 200 }">Öffnet Türen</h2>
								<p v-scroll-reveal="{ delay: 400 }">
									InterLink entfaltet dabei eine seiner einzigartigen Eigenschaften: Er übersetzt die Sprachen (Protokolle) der Terminals auf dasjenige Protokoll seines (Gesprächs-) Partners und wieder zurück. Dies scheint auf den
									ersten Blick einfach, doch es ist ähnlich komplex wie bei der Übersetzung einer natürlichen Sprache: Es reicht nicht nur eine Wort-zu-Wort Übersetzung, sondern es muss der ganze Kontext berücksichtigt werden.
									Technisch gesehen sind dies z.B. unterschiedliche Datenstrukturen der beiden Systeme, die es aufeinander abzustimmen gilt.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="datenblatt">
			<div class="container">
				<CButton text="Datenblatt" />
			</div>
		</div> -->
		<div style="background: #e7e9ec; margin-top: 8rem" class="anwender">
			<div class="container" style="padding: 4rem 0">
				<h2>{{ $i18n.locale == 'fr' ? 'Utilisateurs' : 'Anwender' }}</h2>
				<div class="grid cols-3" style="display: grid; gap: 2rem; align-items: center">
					<nuxt-link to="/portfolio?category=3"><img v-scroll-reveal="{ delay: 0 }" style="padding: 2rem; max-width: 200px; height: auto" src="/portfolio/interlink/allegion.png" alt="" /></nuxt-link>
					<nuxt-link to="/portfolio?category=3"><img v-scroll-reveal="{ delay: 200 }" style="padding: 2rem; max-width: 200px; height: auto" src="/portfolio/interlink/interflex.png" alt="" /></nuxt-link>
					<nuxt-link to="/portfolio?category=3"><img v-scroll-reveal="{ delay: 400 }" style="padding: 2rem; max-width: 200px; height: auto" src="/portfolio/interlink/mpdv.png" alt="" /></nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'produkte-interlink',
	nuxtI18n: {
		paths: {
			//   en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
			fr: '/produits/interlink', // -> accessible at /fr/a-propos
			de: '/produkte/interlink', // -> accessible at /es/sobre
		},
	},
	async asyncData({ app, store }) {
		let content = await axios.get(`https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/products?slug=interlink&lang=${app.i18n.locale}`)
		return {
			content: content.data[0],
			platforms: store.state.platforms,
			person: store.state.person,
		}
	},
	data() {
		return { showContentKomp: false }
	},
	methods: {
		toggleContentKomp() {
			this.showContentKomp = !this.showContentKomp
		},
	},
}
</script>

<style lang="sass" scoped>
.anwender
	.grid
		@include mobile
			justify-items: center
			img
				max-width: 180px !important
.datenblatt
	margin-top: 8rem
	@include mobile
		margin-top: 12rem
.something h1
	font-size: 5rem
	@include mobile
		font-size: 3rem
.ppi
	margin-top: 16rem
	@include mobile
		margin-top: 0
.person
	width: 16rem
	@include mobile
		width: auto
		&.grid.cols-2
			grid-template-columns: 2fr 1fr
.texti
	margin-top: 16rem
	@include mobile
		margin-top: 0
		h1
			margin-bottom: 24rem
.linebg
	background-image: url('/linebg.png')
	background-position: top center
	padding: 50vh 0
	margin: -50vh 0 //-70vh
	position: relative
	background-size: contain
	background-repeat: no-repeat
	z-index: -99
	@include mobile
		margin-top: 0
		padding-top: 0
		background-image: url('/linebgmob.png')
.background-diagonal-2
	background-image: url('/bgdiag2.svg')
	background-position: center
	padding: 20vh 0
	margin: -30vh 0 -70vh
	position: relative
	background-repeat: no-repeat
	z-index: -99
.background-diagonal-3
	background-image: url('/bgdiag3.svg')
	background-position: top center
	background-repeat: no-repeat
	margin: -20rem 0
	padding: 10rem 0
	background-size: cover
	@include mobile
		padding-top: 0
		margin-top: 22rem
.banner-footer
	background-image: url('/interlink-footer.png')
	background-repeat: no-repeat
	background-size: cover
	background-position: center
	min-height: 65.66961251vw
	z-index: 99
	margin-top: 8rem
	@include mobile
		margin-top: 0
		background-position: left 0
		background-size: 150%
		padding-top: 20rem
.banner
	background-image: url('/interlinkdoor.png')
	background-repeat: no-repeat
	background-size: cover
	background-position: center
	min-height: 65.66961251vw
	margin-top: 8rem
	z-index: 99
	@include mobile
		margin-top: 0
		background-position: left 10rem
		background-size: 150%
.vernetzen
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/background2.png')
	background-repeat: no-repeat
	background-size: 100%
	background-position: top center
	min-height: 80vw
	@include mobile
		padding-top: 30vh
		background-image: url('/interlinkmob.png')
.funktionen
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2021/02/background3-1.png')
	background-repeat: no-repeat
	background-size: cover
	background-position: center
	min-height: 100vw
	margin-top: 20rem
	margin-bottom: -25rem
	@include mobile
		background-image: url('/interlinkbg3.png')
		background-position: top center
		margin-top: 0
		padding-top: 16rem
		background-size: contain
.clock
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/backgroun4.png')
	background-repeat: no-repeat
	background-size: cover
	background-position: center
	min-height: 40vw
	@include mobile
		background-image: url('/interlinkbg4.png')
		background-position: top center
		// margin-top: 0
		padding-top: 13rem
		min-height: 0
		background-size: contain
img
	height: auto
	transition: transform 100ms ease
	&.more-icon
		cursor: pointer
	&.mirrored
		transform: scaleY(-1)
.text
	width: 40%
	transition: padding-top 350ms ease-out
	padding-top: 8rem
	@include mobile
		width: auto
	&.open
		padding-top: 2rem
	p
		margin: 3rem 0
.more
	opacity: 0
	transition: opacity 300ms ease-out, margin-top 300ms ease-out
	margin-top: 0rem
	&.active
		opacity: 1
		margin-top: 3rem
</style>
