<template>
	<div>
		<div class="banner">
			<div class="container">
				<h3>Bussenerfassung</h3>
				<h1>PolicePad //</h1>
				<p>
					PolicePad ist die fortschrittlichste Schweizer Lösung zum Erfassen von Bussen. Schnell, einfach und zuverlässig. Mit smarten
					Modulen, die fast alles ermöglichen, was Sie sich wünschen.
				</p>
			</div>
		</div>
		<div class="pp-icons" style="margin-top: 4rem">
			<div class="container">
				<div>
					<img style="width: 3rem" src="/icon_ios.png" alt="" />
					<img style="width: 3rem" src="/icon_windows.png" alt="" />
					<img style="width: 3rem" src="/icon_android.png" alt="" />
				</div>
				<div class="grid cols-2 small-gap" style="width: 16rem; align-items: center; margin-top: 2rem">
					<div>
						<p style="margin: 0; line-height: 1em">Produktmanager</p>
						<p style="font-weight: 900">Dominic Bürki</p>
					</div>
					<div>
						<img src="/portrait_placeholder.png" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="kompromisslos">
			<div class="container">
				<div :class="{ text: true, open: showContentKomp }">
					<h3>Kompromisslos</h3>
					<h2>Genau so, wie es sein soll</h2>
					<p class="intro">
						Dank langjähriger Erfahrung und der engen Zusammenarbeit mit Polizeikorps und privaten Nutzern überzeugt PolicePad durch seine
						Effizienz: es ist einfach zu erlernen und zu bedienen. Flexible Module ergänzen die Anwendung mit hilfreichen Funktionen.
						Durch einfaches und schnelles Konfigurieren lässt sich die App weiter individualisieren.
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
						PolicePad hatte den besten Treiber für Innovation, den es gibt: die Realität. Die erste Version ging vor rund 30 Jahren in
						Betrieb. Mit jedem Tag, jedem Einsatz, jeder einzelnen erfassten Busse wurde das System besser. Heute steht PolicePad auf
						allen gängigen Plattformen (iOS, Windows, Android) zur Verfügung.
						<br />
						Die Bedienung und zahlreiche Zusatzmodule haben wir in enger Zusammenarbeit mit unseren Kunden ausgearbeitet, verfeinert und
						mit smarten Funktionen ergänzt. Um den Erfassungsablauf zu vereinfachen, die Eingaben zu beschleunigen und die Datenqualität
						zu erhöhen.
					</p>
				</div>
			</div>
		</div>
		<div class="funktionen">
			<div class="container">
				<div class="grid cols-2 small-gap">
					<div class="image">
						<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/image_policepad.png" alt="" />
					</div>
					<div class="text">
						<h3>Funktionen</h3>
						<h2>Simpel und intuitiv</h2>
						<p>
							Die Kernfunktion von PolicePad ist simpel: Das Erfassen von Ordnungsbussen. Doch dahinter steckt sehr viel mehr. Etwa:
							Eine intelligente Suchfunktion, der Live-Abgleich mit mehreren Datenbeständen oder schnelleres Erfassen mit Favoriten.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="pp-module">
			<div class="container" style="height: 100%">
				<client-only>
					<swiper class="swiper" :options="swiperOption">
						<swiper-slide>
							<h3>Module</h3>
							<h2>QR Code</h2>
							<p>
								Das Modul QRCode erfasst die Fallnummern automatisch. Dieses Verfahren schliesst Tippfehler bei der manuellen
								Erfassung aus. Zusätzlich kann das Scannen eines QRCodes an anderen Stellen eingesetzt.
							</p>
						</swiper-slide>
						<swiper-slide>
							<h3>Module</h3>
							<h2>eCar</h2>
							<p>
								Das Modul eCar gleicht ein erfasstes Kontrollschild mit den Daten der Motorfahrzeugkontrolle ab. Die Daten der
								Motorfahrzeugkontrolle werden automatisch in die Erfassung eines Falles übernommen. Das aktuell unterstützte InfoCar
								liefert nebst der Fahrzeugmarke und -farbe zusätzlich den Fahrzeugtyp. Diese Informationen können in.
							</p>
						</swiper-slide>
						<swiper-slide>
							<h3>Module</h3>
							<h2>Observer</h2>
							<p>
								Das Modul Observer gleicht das Kontrollschild mit polizeilichen Datenbeständen in den Bereichen der Fahndung und
								Observation ab (RIPOL). Die serverseitige Komponente für die RIPOL-Abfragen wurde in Zusammenarbeit von Dycom AG
								(Hersteller von MACS) entwickelt.
							</p>
						</swiper-slide>
						<swiper-slide>
							<h3>Module</h3>
							<h2>eParking</h2>
							<p>
								Das Modul eParking gibt Auskunft über alle auf ein Fahrzeug ausgestellten Bewilligungen, etwa Anwohnerparkkarten,
								Spitex-Bewilligungen oder Marktfahrerbewilligungen. Es überprüft bei bargeldlos bezahlten Parkvorgängen die
								Parkberechtigung.
							</p>
						</swiper-slide>
						<swiper-slide>
							<h3>Module</h3>
							<h2>Print</h2>
							<p>
								Das Modul Print erlaubt es, die Fallinformationen mit einem mobilen Bluetooth-Drucker auszudrucken und dem
								Einzahlungsschein beizulegen.
							</p>
						</swiper-slide>
					</swiper>
				</client-only>
			</div>
		</div>
		<div class="backend">
			<div class="container">
				<div class="text">
					<h3>PolicePad Server</h3>
					<h2>Backend</h2>
					<p>
						Der PolicePadServer ist die Gegenstelle von PolicePad und nimmt die Fälle entgegen, speichert diese, stellt sie dar und bietet
						diverse Statistiken. Verwalten Sie die Fälle, steuern Sie Gruppen und verwaltne Sie die mobilen Eingabegeräte. Mit dem
						Bereitstellen der Stammdaten können Sie Inhalte live übertragen und in der App darstellen. Die Exportkontrolle dient der
						Sicherstellung, dass alle Fälle übertragen wurden.
					</p>
				</div>
			</div>
		</div>
		<div class="police">
			<div class="container">
				<h3 style="text-align: center">STAPO ZÜRICH / BERNER KAPO / ZÜRCHER KAPO / PRIVATE</h3>
				<h2 style="text-align: center; margin-bottom: 8rem">Seit eh und je steht PolicPad im Zentrum der Digitalen Datenerfassung</h2>
				<div class="grid cols-5">
					<div style="grid-column: span 3">
						<h1 style="font-size: 5rem; margin-bottom: 0; line-height: 1em">30</h1>
						<h3 style="margin-bottom: 2rem">Jahre</h3>
						<h1 style="font-size: 5rem; margin-bottom: 0; line-height: 1em">3'000</h1>
						<h3 style="margin-bottom: 2rem">Nutzer</h3>
						<h1 style="font-size: 5rem; margin-bottom: 0; line-height: 1em">1'000'000</h1>
						<h3 style="margin-bottom: 2rem">Fälle im Jahr</h3>
					</div>
					<div style="grid-column: span 2">
						<p>
							Mit seinen schweizweit über 3'000 Nutzern und den damit eröffneten 1'000'000 Fällen pro Tag, bewährt sich PolicePad jeden
							Tag. Mittlerweile ist die Software seit 30 Jahren mit höchster Zuverlässigkeit im Einsatz. PolicePad ist nun schon in der
							5.Generation und wird laufend an neuen Eingabegeräten angepasst
						</p>
					</div>
				</div>
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
	data() {
		return {
			showContentKomp: false,
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 48,
				loop: false,
				disableOnInteraction: false,
				freeMode: false,
				autoplay: false,
				mouseWheel: true,
				direction: 'vertical',
				pagination: {
					el: '.swiper-pagination',
					clickable: false,
				},
			},
		}
	},
	methods: {
		toggleContentKomp() {
			this.showContentKomp = !this.showContentKomp
		},
	},
}
</script>

<style lang="sass" scoped>
.banner
	margin-top: 8rem
	display: grid
	align-items: baseline
	min-height: 32rem
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/banner_policepad.png')
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	h3
		color: black
	p
		width: 40%
img
	height: auto
	transition: transform 100ms ease
	&.more-icon
		cursor: pointer
	&.mirrored
		transform: scaleY(-1)
.kompromisslos
	// margin-top: 8rem
	min-height: 200vh
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/background_policepad.png')
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	.text
		padding-top: 30rem
		width: 40%
		transition: padding-top 350ms ease-out
		&.open
			padding-top: 15rem
		p
			margin: 3rem 0
			&.more
				opacity: 0
				transition: opacity 300ms ease-out, margin-top 300ms ease-out
				margin-top: 0rem
				&.active
					opacity: 1
					margin-top: 3rem
.funktionen
	.grid
		align-items: center
.pp-module
	margin-top: 8rem
	margin-bottom: 8rem
	height: 20rem
	.swiper-container
		height: 100%
	.swiper-slide
		height: 20rem
		width: 40%
.backend
	display: grid
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/pp-backend-background.png')
	background-size: contain
	background-repeat: no-repeat
	background-position: center right
	height: 60rem
	.text
		width: 40%
</style>
