<template>
	<div>
		<div class="banner">
			<div class="background">
				<div class="container">
					<div class="grid cols-2">
						<span></span>
						<div>
							<h3 v-scroll-reveal="{ delay: 0 }">Fahrtenschreiber</h3>
							<h1 v-scroll-reveal="{ delay: 200 }">Tachifox</h1>
							<p v-scroll-reveal="{ delay: 400 }">
								TachiFox ist die praxisorientierte Lösung der Conzepta und Les Routiers Suisses zum Erfassen von Daten, welche der Arbeits- und Ruhezeit Verordnung ARV unterliegen. Die Fahrer- und Fahrzeugdaten können zentral und
								unkompliziert eingelesen, bearbeitet und ergänzt werden. TachiFox vereinfacht die Auswertung der Daten nach den gesetzlich vorgegebenen Richtwerten und informiert den Benutzer über mögliche Verstösse.
							</p>
							<br />
							<nuxt-link :to="'/wir#philippe-luethi'"
								><div class="grid cols-2 small-gap" style="width: 16rem; align-items: center; margin-top: 2rem">
									<div>
										<p v-scroll-reveal="{ delay: 0 }" style="margin: 0; line-height: 1em">Produktmanager</p>
										<p v-scroll-reveal="{ delay: 200 }" style="margin: 0; font-weight: 900">Philippe Lüthi</p>
									</div>
									<div>
										<img v-scroll-reveal="{ delay: 400 }" style="height: auto; border-radius: 50%" src="/portrait_placeholder.png" alt="" />
									</div></div
							></nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div style="align-items: center" class="section grid cols-2">
				<div>
					<h3 v-scroll-reveal="{ delay: 0 }">3. Generation</h3>
					<h2 v-scroll-reveal="{ delay: 200 }">Unaufhörliches Massschneidern</h2>
					<p v-scroll-reveal="{ delay: 400 }">
						TachiFox besteht seit rund 15 Jahren und ist mittlerweile in der dritten Generation als moderne Web-Anwendung verfügbar. Dadurch konnte auf die Bedürfnisse der Fahrer und Firmen eingegangen werden. Durch die enge
						Zusammenarbeite mit Les Routiers Suisses wird das Produkt laufend an neue Kundenanforderungen angepasst und um smarte Funktionen erweitert.
					</p>
				</div>
				<div>
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
						<h2 v-scroll-reveal="{ delay: 200 }">Alles wichtige an einem Ort</h2>
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
										<h3 v-scroll-reveal="{ delay: 0 }">Aktivitäten</h3>
										<h2 v-scroll-reveal="{ delay: 200 }">Volle Kontrolle über die Arbeitstätigkeit</h2>
										<p v-scroll-reveal="{ delay: 400 }">
											Eine Aktivität bezieht sich auf eine Arbeitstätigkeit eines Fahrers wie z.B. Lenkzeit, Bereitschaftszeit etc. Aktivitäten werden chronologisch aufgelistet und können durch Benutzer eingesehen und
										</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<p>Slider Content</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<p>Slider Content</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
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
							Die erfassten Fahrer und Fahrzeuge werden übersichtlich dargestellt und können effizient bearbeitet werden. TachiFox unterstützt die Benutzer durch eine freundliche Erinnerung, Daten einzulesen, wenn dies lange nicht
						</p>
						<span style="height: 10rem; display: block" />
						<h2 v-scroll-reveal="{ delay: 300 }">Sondertagsverwaltung</h2>
						<p v-scroll-reveal="{ delay: 500 }">
							Unternehmen können firmeneigene Sondertage definieren und erfassen. Dies Unterstützt die Unternehmung bei der Verwaltung von Aktivitäten von Gruppen oder einzelnen Fahrern. Fahrer können so manuell Aktivitäten hinzufügen
							und verwalten, damit alle für die ARV26
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="benutzerverwaltung">
			<div class="container">
				<div class="section grid cols-2" style="margin-top: 0">
					<div>
						<h2 v-scroll-reveal="{ delay: 0 }">Benutzerverwaltung</h2>
						<p v-scroll-reveal="{ delay: 200 }">
							In der Benutzerverwaltung werden den Benutzern der Organisation ihre Rollen und Fahrer zugeordnet. Hier können hierarchische Stufen geschaffen werden, indem Benutzern verschiedene Rollen / Funktionen zugewiesen werden.
						</p>
						<CButton v-scroll-reveal="{ delay: 400 }" text="Datenblatt" />
					</div>
					<img style="height: auto" src="/01.png" alt="" />
				</div>
			</div>
		</div>
		<div class="anwender">
			<div class="container">
				<div class="section">
					<h2>Anwender</h2>
				</div>
			</div>
		</div>
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
					clickable: false,
				},
			},
		}
	},
}
</script>

<style lang="sass" scoped>
.kontrolle
	background-image: url('/38_Abfahrt.png')
	background-size: cover
	height: 110vh
	background-repeat: no-repeat
	background-position-y: 5rem
.anwender
	background-image: url('/36_Anwender.png')
	background-size: cover
	height: 80vh
	background-repeat: no-repeat
	background-position-y: 5rem
.verwaltung
	background-image: url('/bgtachi3.png')
	background-position: left center
	background-repeat: no-repeat
	background-size: cover
	padding: 8rem 0
	background-size: contain
.background-diagonal-3
	background-image: url('/bgdiag3.svg')
	padding: 8rem 0
	background-position: center
	background-repeat: no-repeat
.aktivitaten
	height: 20rem
	.slider-grid
		display: grid
		grid-template-columns: 1fr 1fr
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
.background2
	margin-top: 24rem
	background-image: linear-gradient(90deg, $c-gray-light, white)
	padding-bottom: 4rem
	.tachiimg2
		transform: translateY(-50%)
		margin-bottom: -20%
</style>
