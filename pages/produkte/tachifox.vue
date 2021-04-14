<template>
	<div>
		<div class="banner">
			<div class="background">
				<div class="container">
					<div class="grid cols-2">
						<span></span>
						<div>
							<h3 v-scroll-reveal="{ delay: 0 }">Fahrtenschreiber</h3>
							<h1 v-scroll-reveal="{ delay: 200 }">TachiFox //</h1>
							<p v-scroll-reveal="{ delay: 400 }">
								TachiFox ist die praxisorientierte Lösung von Conzepta und Les Routiers Suisses zum Erfassen von Daten, welche der Arbeits- und Ruhezeit Verordnung ARV unterliegen. TachiFox vereinfacht die Auswertung der Daten nach
								den gesetzlich vorgegebenen Richtwerten. Das System informiert Sie sofort über mögliche Verstösse. Verwalten Sie Fahrer- und Fahrzeugdaten an einem Ort: einlesen, bearbeiten und auswerten.
							</p>
							<br />
							<nuxt-link :to="'/wir#philippe-luethi'"
								><div class="grid cols-2 small-gap person" style="align-items: center; margin-top: 2rem">
									<div>
										<p v-scroll-reveal="{ delay: 300 }" style="margin: 0; line-height: 1em">Produktmanager</p>
										<p v-scroll-reveal="{ delay: 400 }" style="margin: 0; font-weight: 900">Philippe Lüthi</p>
									</div>
									<div>
										<img v-scroll-reveal="{ delay: 500 }" style="height: auto; border-radius: 50%" src="/portrait_placeholder.png" alt="" />
									</div></div
							></nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container firstsec">
			<div style="align-items: center" class="section grid cols-2">
				<div class="firstmobsec">
					<a href="https://www.routiers.ch/">
						<img style="height: auto; width: 10rem; margin-bottom: 2rem" src="/portfolio/tachifox/lesroutierssuisse.png" alt="" />
					</a>
					<h3 v-scroll-reveal="{ delay: 0 }">3. Generation</h3>
					<h2 v-scroll-reveal="{ delay: 200 }">Unaufhörliches Verbessern</h2>
					<p v-scroll-reveal="{ delay: 400 }">
						TachiFox besteht seit rund 15 Jahren und ist mittlerweile in der aktuellen Generation als moderne Web-Anwendung verfügbar. Durch die enge Zusammenarbeit mit Les Routiers Suisses konnten wir das Produkt laufend an die
						Bedürfnisse der Logistikunternehmen anpassen und um smarte Funktionen erweitern.
					</p>
				</div>
				<div class="secmobfirst">
					<img style="height: auto" src="/tachiimg.png" alt="" />
				</div>
			</div>
		</div>
		<div class="background2">
			<div class="container">
				<div class="tachiimg2">
					<img style="height: auto" src="/tachiimg2.png" alt="" />
				</div>
				<div class="grid cols-2">
					<span></span>
					<div>
						<h3 v-scroll-reveal="{ delay: 0 }">Funktionen</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">Alles an einem Ort</h2>
						<p v-scroll-reveal="{ delay: 400 }">Nebst den Grundfunktionen wie Einlesen, Bearbeiten und Auswerten der Daten, unterstützt TachiFox das Verwalten von Organisationen und Einzelfahrern.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="background-diagonal-3">
			<div class="aktivitaten">
				<div class="container" style="margin-top: 8rem; height: 100%; position: relative">
					<client-only>
						<swiper class="swiper" :options="swiperOption">
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3 v-scroll-reveal="{ delay: 0 }">Alles im Blick</h3>
										<h2 v-scroll-reveal="{ delay: 200 }">Geordnet</h2>
										<p v-scroll-reveal="{ delay: 400 }">
											Das Einlesen der Fahrer- und Fahrzeugdaten erfolgt über den TachiFoxReader. Dieser übermittelt die Daten an den Server, wo diese weiterverarbeitet und dem entsprechenden Fahrer oder Fahrzeug zugeordnet
											werden. Die Tachograph-Daten können auch direkt über den Browser hochgeladen werden.
										</p>
									</div>
									<div class="slider-image">
										<video style="width: 100% !important" autoplay muted loop>
											<source src="/01_Geordnet_Fahrer (1).mp4" type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>Alles im Blick</h3>
										<h2>Rückverfolgbar</h2>
										<p>
											Eine Aktivität bezieht sich auf eine Arbeitstätigkeit eines Fahrers wie etwa die Lenkzeit oder Bereitschaftszeit. Aktivitäten werden chronologisch aufgelistet und können durch Benutzer eingesehen und
											bearbeitet werden.
										</p>
									</div>
									<div class="slider-image">
										<video style="width: 100% !important" autoplay muted loop>
											<source src="/02_Rueckverfolgbar_Aktivitaet (1).mp4" type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>Alles im Blick</h3>
										<h2>Übersichtlich</h2>
										<p>Die Aktivitäten können als Rapport übersichtlich dargestellt werden. Rapporte enthalten grafische Elemente, Zusammenzüge von Fahrerdaten und die Ergebnisse der ARV Auswertung.</p>
									</div>
									<div class="slider-image">
										<video style="width: 100% !important" autoplay muted loop>
											<source src="/03_Uebersichtlich_Rapport (1).mp4" type="video/mp4" />
											Your browser does not support the video tag.
										</video>
									</div>
								</div>
							</swiper-slide>
						</swiper>
						<div class="swiper-pagination"></div>
					</client-only>
				</div>
			</div>
			<div class="rapporte">
				<div class="container">
					<div style="align-items: center" class="section grid cols-2">
						<img src="/rapport.png" style="height: auto" alt="" />
						<div>
							<h3 v-scroll-reveal="{ delay: 0 }">Rapporte</h3>
							<h2 v-scroll-reveal="{ delay: 200 }">Einfach übersichtlich auszuwerten</h2>
							<p v-scroll-reveal="{ delay: 400 }">Die Aktivitäten können als Rapport übersichtlich dargestellt werden. Rapporte enthalten grafische Elemente, Zusammenzüge von Fahrerdaten und die Ergebnisse der ARV Auswertung.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="verwaltung">
			<div class="container">
				<div class="section grid cols-2">
					<span></span>
					<div>
						<h2 v-scroll-reveal="{ delay: 0 }">Fahrer- und Fahrzeugverwaltung</h2>
						<p v-scroll-reveal="{ delay: 200 }">
							Die erfassten Fahrer und Fahrzeuge werden übersichtlich dargestellt und können effizient bearbeitet werden. TachiFox unterstützt die Benutzer durch eine freundliche Erinnerung, Daten einzulesen, wenn dies lange nicht mehr
							erfolgt ist.
						</p>
						<span style="height: 10rem; display: block" />
						<h2 v-scroll-reveal="{ delay: 300 }">Sondertagsverwaltung</h2>
						<p v-scroll-reveal="{ delay: 500 }">
							Unternehmen können firmeneigene Sondertage definieren und erfassen. Dies unterstützt die Verwaltung von Aktivitäten von Gruppen oder einzelnen Fahrern. Fahrer können so manuell Aktivitäten hinzufügen und verwalten, damit
							alle für die ARV26-Auswertung benötigten Daten vorhanden sind.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="benutzerverwaltung">
			<div class="container">
				<div class="section grid cols-2" style="margin-top: 0">
					<div class="firstmobsec">
						<h2 v-scroll-reveal="{ delay: 0 }">Benutzerverwaltung</h2>
						<p v-scroll-reveal="{ delay: 200 }">
							In der Benutzerverwaltung werden den Benutzern ihre Rollen und Fahrer zugeordnet. Hier können hierarchische Stufen geschaffen werden, indem Benutzern verschiedene Rollen und Funktionen zugewiesen werden. In einem
							Unternehmen können so etwa Disponenten und Fahrer erfasst werden. Fahrer haben nur Einblick in ihre eigenen Daten, während Disponenten die Daten aller ihnen zugeteilten Fahrer einsehen und verwalten können.
						</p>
						<br /><br />
						<br />
						<!-- <CButton v-scroll-reveal="{ delay: 400 }" text="Datenblatt" /> -->
					</div>
					<img class="secmobfirst" style="height: auto" src="/01.png" alt="" />
				</div>
			</div>
		</div>
		<div class="daskanntachifox">
			<div class="container">
				<h3>All das kann Tachifox</h3>
				<h2 style="margin-bottom: 4rem">Funktionen</h2>
				<div class="list-two-columns">
					<div class="column-1">
						<article>
							<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" class="list-icon" alt="" />
							<h4>Einlesen</h4>
							<p>Tachograph Karten und Dateien lassen sich für Fahrer und Farzeug importieren.</p>
						</article>
						<article>
							<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" class="list-icon" alt="" />
							<h4>Chauffeurverordnung</h4>
							<p>ARV Daten können ausgewertet werden.</p>
						</article>
						<article>
							<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" class="list-icon" alt="" />
							<h4>Fahrtenkontrolle</h4>
							<p>Daten können für eine Betriebskontrolle exportiert werden.</p>
						</article>
						<article>
							<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" class="list-icon" alt="" />
							<h4>Verwaltung</h4>
							<p>Aktivitäten, Benutzer und Fahrerkarten lassen sich einfach verwalten.</p>
						</article>
					</div>
					<div class="column-2">
						<article>
							<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" class="list-icon" alt="" />
							<h4>Nachverfolgung</h4>
							<p>Änderungen sind nachverfolgbar.</p>
						</article>
						<article>
							<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" class="list-icon" alt="" />
							<h4>Sondertage</h4>
							<p>Ein Kalender mit Sondertagen kann aufgerufen werden.</p>
						</article>
						<article>
							<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" class="list-icon" alt="" />
							<h4>Rapporte</h4>
							<p>Fahrer- und Fahrzeugrapporte lassen sich einfach generieren, ob wöchentlich oder monatlich.</p>
						</article>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="anwender">
			<div class="container">
				<div class="section">
					<h2>Anwender</h2>
				</div>
			</div>
		</div> -->
		<div class="kontrolle">
			<div class="container">
				<div class="section" style="text-align: center">
					<h2>Für eine kontrollierte Fahrt: TachiFox</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
	data() {
		return {
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 48,
				loop: false,
				mousewheel: true,
				direction: 'vertical',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
				},
			},
		}
	},
}
</script>

<style lang="sass" scoped>
.list-two-columns
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 8rem
	article
		margin-bottom: 2rem
		position: relative
		.list-icon
			position: absolute
			left: -4.5rem
			top: .5rem
			max-width: 3rem
			height: 3rem
			@include mobile
				left: -3rem
				max-width: 2rem
				height: 2rem
	@include mobile
		grid-template-columns: 1fr
		gap: 0
		padding-left: 3rem
	@include mobile-landscape
		gap: 4rem
.person
	width: 16rem
	align-items: center
	@include mobile
		width: auto
		&.grid.cols-2
			grid-template-columns: 2fr 1fr
.firstmobsec
	@include mobile
		grid-row: 2
.secmobfirst
	@include mobile
		grid-row: 1
.firstsec
	@include mobile
		margin-top: 8rem
.force
	@include mobile
		grid-template-columns: 3fr 1fr !important
.kontrolle
	background-image: url('/38_Abfahrt.png')
	background-size: cover
	height: 110vh
	background-repeat: no-repeat
	background-position-y: 5rem
	@include mobile
		height: 50vh
		background-position-x: right
.anwender
	background-image: url('/36_Anwender.png')
	background-size: cover
	height: 80vh
	background-repeat: no-repeat
	background-position-y: 5rem
	@include mobile
		height: 40vh
		background-position-y: 2rem
.verwaltung
	background-image: url('/bgtachi3.png')
	background-position: left center
	background-repeat: no-repeat
	background-size: cover
	padding: 8rem 0
	margin-top: -20rem
	background-size: contain
	@include mobile
		background-position-y: top
		padding: 0
		padding-top: 8rem
.background-diagonal-3
	background-image: url('/bgdiag3.svg')
	padding: 25rem 0
	margin-top: -20rem
	z-index: 0
	background-position: center
	background-repeat: no-repeat
	@include mobile
		padding: 0
.aktivitaten
	height: 20rem
	.slider-grid
		display: grid
		grid-template-columns: 1fr 2fr
		align-items: center
		gap: 8rem
		@include mobile
			grid-template-columns: 1fr
			.slider-image
				display: none
	.swiper-container
		height: 100%
	.swiper-slide
		height: 20rem
.swiper-pagination
	top: 50%
	transform: translateY(-50%)
	left: -8rem
.banner
	background-image: linear-gradient(90deg, white, $c-gray-light)
	height: 80vh
	.background
		height: 100%
		box-sizing: border-box
		padding-top: 8rem
		background-image: url('/bgtachi.png')
		background-size: cover
		background-position: bottom center
		@include mobile
			background-image: none
			padding-top: 0
.background2
	margin-top: 24rem
	background-image: linear-gradient(90deg, $c-gray-light, white)
	padding-bottom: 4rem
	z-index: 10
	position: relative
	@include mobile
		margin-top: 12rem
	.tachiimg2
		transform: translateY(-50%)
		margin-bottom: -20%
</style>
