<template>
	<div>
		<div class="banner" style="margin-top: 8rem">
			<div class="container">
				<div class="grid cols-2">
					<div></div>
					<div style="margin-top: 16rem">
						<h3>Kommunikatonssystem</h3>
						<h1>Interlink//</h1>
						<p>
							Mit InterLink hat die conzepta ein zukunftsweisendes Kommunikationssystem für die Präsenzzeitkontrolle, Zutrittskontrolle
							und die Betriebsdatenerfassung in
						</p>
						<img style="width: 3rem" src="/icon_windows.png" alt="" />
						<nuxt-link to="/wir#urs-blaser">
							<div class="grid cols-2 small-gap" style="width: 16rem; align-items: center; margin-top: 2rem">
								<div>
									<p style="margin: 0; line-height: 1em">Produktmanager</p>
									<p style="font-weight: 900">Urs Blaser</p>
								</div>
								<div>
									<img style="height: auto" src="/portrait_placeholder.png" alt="" />
								</div>
							</div>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<div class="background-diagonal-2">
			<div style="margin-top: 8rem" class="vernetzen">
				<div class="container">
					<div class="grid cols-2">
						<div style="margin-top: 16rem">
							<h3>Unabhängig Vernetzen</h3>
							<h2>Echtzeit Kommunikation zwischen allen Systemen</h2>
							<p>
								InterLink "übersetzt" die spezifischen Protokolle in ein Einheitliches. Die Kommunikation zwischen den Terminals und
								dem Managementsystem findet in Echtzeit statt. Weltweit. Dabei spielt es keine Rolle, ob die Installation nur ein
								einziges Terminal umfasst oder mehrere Tausend in einem Grosskonzern mit global verteilten
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="something" style="margin-top: 8rem">
			<div class="container">
				<h3 style="text-align: center">BIXBI SYSTEMS / KABA / MPDV / PCS / PRIMION / TYCO / VICKING</h3>
				<h2 style="text-align: center; margin-bottom: 8rem">InterLink kommuniziert mit Terminals verschiedener Hersteller</h2>
				<div class="grid cols-5">
					<div style="grid-column: span 3">
						<h1 style="font-size: 5rem; margin-bottom: 0; line-height: 1em">20</h1>
						<h3 style="margin-bottom: 2rem">Jahre</h3>
						<h1 style="font-size: 5rem; margin-bottom: 0; line-height: 1em">30'000</h1>
						<h3 style="margin-bottom: 2rem">Terminals</h3>
						<h1 style="font-size: 5rem; margin-bottom: 0; line-height: 1em">3'000'000</h1>
						<h3 style="margin-bottom: 2rem">Buchungen pro Tag</h3>
					</div>
					<div style="grid-column: span 2">
						<p>
							Mit seinen weltweit über 30'000 Terminals und den damit gemachten 3'000'000 Buchungen pro Tag, hat sich InterLink zu einer
							stabilen Konstante im Markt entwickelt und ist seit mehr als 20 Jahren mit höchster Zuverlässigkeit im Einsatz. Aktuelle
							Generationen der Terminals werden unterstützt und neue laufend hinzugefügt.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="funktionen" style="margin-top: 16rem">
			<div class="container">
				<div class="grid cols-2">
					<span></span>
					<div style="margin-top: 6rem">
						<h3>Funktionen</h3>
						<h2>Da schaltet die Konkurrenz ab</h2>
						<p>
							Weitere interessante Aspekte sind der Offline-Betrieb, die Datensicherung, sowie ein einzigartiges technisches
							Analysetool.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="background-diagonal-3">
			<div class="clock">
				<div class="container">
					<div :class="{ text: true, open: showContentKomp }">
						<h3>ARBEITSZEITEN AUSWERTEN</h3>
						<h2>Kommunikation kann so viel mehr</h2>
						<p class="intro">
							Auf der Plattform eines Systemanbieters werden Arbeitszeiten ausgewertet und Zutrittsberechtigungen der Mitarbeitenden in
							einem Betrieb festgelegt. Diese Vorgänge erfordern eine Kommunikation mit den Terminals, die auf die Standorte der.
						</p>
						<img
							@click="toggleContentKomp"
							:class="{
								'more-icon': true,
								mirrored: showContentKomp,
							}"
							src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_arrowDown.png"
							alt=""
						/>
						<p :class="{ more: true, active: showContentKomp }">
							Oftmals stehen in einem Betrieb Terminals verschiedener Hersteller im Einsatz. Dabei zeigt sich oft folgendes Problem: Die
							Terminals der verschiedenen Hersteller ‘’sprechen eine unterschiedliche Sprache’’, d.h. die Terminals und ihr Host
							verstehen einander nicht!.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="banner" style="margin-top: 8rem">
			<div class="container">
				<div class="grid cols-2">
					<div></div>
					<div style="margin-top: 16rem">
						<h3>VERBINDET BESTEHENDE SYSTEME</h3>
						<h1>Öffnet Türen</h1>
						<p>
							InterLink entfaltet dabei eine seiner einzigartigen Eigenschaften: Er übersetzt die Sprachen (Protokolle) der Terminals
							auf dasjenige Protokoll seines (Gesprächs-) Partners und wieder zurück. Dies scheint auf den ersten Blick einfach, doch es
							ist ähnlich komplex wie bei der Übersetzung einer natürlichen Sprache: Es reicht nicht nur eine Wort-zu-Wort Übersetzung,
							sondern es muss der ganze Kontext berücksichtigt werden. Technisch gesehen sind dies z.B. unterschiedliche Datenstrukturen
							der beiden Systeme, die es aufeinander abzustimmen.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div style="margin-top: 8rem">
			<div class="container">
				<CButton text="Datenblatt" />
			</div>
		</div>
		<div style="background: #e7e9ec; margin-top: 8rem" class="anwender">
			<div class="container" style="padding: 4rem 0">
				<h2>Anwender</h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
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
	background-position: center
	background-repeat: no-repeat
.banner
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/interlink_banner.png')
	background-repeat: no-repeat
	background-size: cover
	background-position: center
	min-height: 65.66961251vw
	z-index: 99
.vernetzen
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/background2.png')
	background-repeat: no-repeat
	background-size: 100%
	background-position: top center
	min-height: 80vw
.funktionen
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/background3.png')
	background-repeat: no-repeat
	background-size: cover
	background-position: center
	min-height: 80vw
.clock
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/backgroun4.png')
	background-repeat: no-repeat
	background-size: cover
	background-position: center
	min-height: 40vw
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
	&.open
		padding-top: 2rem
	p
		margin: 3rem 0
		&.more
			opacity: 0
			transition: opacity 300ms ease-out, margin-top 300ms ease-out
			margin-top: 0rem
			&.active
				opacity: 1
				margin-top: 3rem
</style>
