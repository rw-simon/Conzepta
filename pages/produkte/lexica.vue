<template>
	<div>
		<div class="bggradient">
			<div class="banner">
				<div class="container">
					<div class="section grid cols-2">
						<div style="padding: 12rem 0">
							<h3>Nachschlagwerk</h3>
							<h1>Lexica//</h1>
							<p>
								Lexica ist das digitale Nachschlagewerk für die unterschiedlichsten Ansammlungen von Gesetzen, Regeln, Statuten usw.
								Mit Tags und persönlichen Notizen können Einträge flexibel und einfach ergänzt werden. Die Suche oder die praktischen
								Assistenten ermöglichen das einfache Finden von Einträgen.
							</p>
							<div class="grid"></div>
						</div>
						<div style="align-self: end; padding-left: 5rem">
							<nuxt-link :to="'/wir#dominic-luethi'"
								><div class="grid cols-2 small-gap" style="width: 16rem; align-items: center; margin-top: 2rem">
									<div>
										<p style="margin: 0; line-height: 1em">Produktmanager</p>
										<p style="font-weight: 900">Dominic Bürki</p>
									</div>
									<div>
										<img if src="" alt="" />
										<img style="height: auto; border-radius: 50%" src="/portrait_placeholder.png" alt="" />
									</div></div
							></nuxt-link>
						</div>
					</div>
				</div>
			</div>
			<div class="gesetze">
				<div class="container">
					<div class="section grid cols-2">
						<div>
							<h3>Gesetze / Statuten / Regeln</h3>
							<h2>Gemeinsam mit den Kunden entwickelt</h2>
							<p>
								Lexica wurde ursprünglich als digitaler Nachfolger für den Bussenziffern-Katalog (Bussenziffernbüchlein) entwickelt.
								In der Zwischenzeit hat sich Lexica als erfolgreiches und innovatives Nachschlagewerk etabliert. Mit Hilfe
								konstruktiver Kundenfeedbacks konnten weitere zukunftsorientierte Erweiterungen geplant und umgesetzt werden
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="funktionen">
			<div class="container">
				<div class="section grid cols-2">
					<span>
						<span class="easteregg">
							<span class="hover"
								><span></span>
								<div class="easteregg-content">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quibusdam id. Consequatur ea quibusdam error.
								</div>
							</span>
						</span>
					</span>
					<div>
						<h3>Funktionen</h3>
						<h2>Lexica kann individuell gestaltet werden</h2>
						<p>
							Mit Lexica lassen sich sehr einfach Ansammlungen von Einträgen einbinden, erweitern und mit persönlichen Notizen ergänzen.
							Die Benutzer gelangen zu diesen Einträgen entweder über eine Textsuche oder über diverse Assistenten. Der Gestaltung der
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="bgdiag">
			<div class="funktionsumfang">
				<div class="container" style="margin-top: 8rem; height: 100%; position: relative">
					<client-only>
						<swiper class="swiper" :options="swiperOption">
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>Aktivitäten</h3>
										<h2>Tags</h2>
										<p>
											Tags erleichtern die Suche vor allem von nicht täglichen Begriffen, so kann z.B. nach "Ampel" gesucht
											werden, obwohl diese als "Lichtsignalanlage" im entsprechenden Gesetz hinterlegt ist
										</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>Aktivitäten</h3>
										<h2>Notizen</h2>
										<p>
											Persönliche Notizen ergänzen einen Eintrag individuell und bleiben bei neuen Versionen erhalten.
											Zusätzlich werden die Notizen in die Suche einbezogen
										</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>Aktivitäten</h3>
										<h2>Favoriten</h2>
										<p>Selbstdefinierte Einträge können als Favoriten definiert und somit prominent platziert werden</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>Aktivitäten</h3>
										<h2>Assistenten</h2>
										<p>
											Die Assistenten erlauben das Finden von Einträgen mit Hilfe von grafischen Elementen. Die anwendbaren
											Ziffern werden auf einer Grafik, welche alltägliche Situationen abbildet, schnell und einfach ermittelt
										</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>Aktivitäten</h3>
										<h2>Updates</h2>
										<p>
											Anpassungen der Ansammlungen oder einzelne Einträge davon, können bequem online gemacht werden. Die
											persönlichen Notizen der Benutzer bleiben natürlich erhalten
										</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>Aktivitäten</h3>
										<h2>Datenaustausch</h2>
										<p>
											Lexica kann Daten von und zu anderen System importieren und exportieren. So lassen sich z.B. Ziffern
											anwählen und ins PolicePad übermitteln. Oder man gelangt von PolicePad zu den detaillierten Informationen
											von Lexica.
										</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>Aktivitäten</h3>
										<h2>Backend</h2>
										<p>
											Das Backend stellt eine einfache und intuitive Oberfläche zur Verfügung um die Ansammlung von Einträgen
											praktisch zu Editieren und neue Versionen davon zu generieren. Zusätzlich können Benutzer und Gruppen
											verwaltet, sowie weitere Einstellungen vorgenommen werden
										</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
						</swiper>
						<div class="swiper-pagination"></div>
					</client-only>
				</div>
			</div>
			<div class="anwender">
				<div class="container" style="padding: 4rem 0">
					<h2>Anwender</h2>
					<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; align-items: center">
						<img
							style="padding: 2rem; max-width: 200px"
							src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/Screenshot-2020-12-03-at-11.09.36.png"
							alt=""
						/>
						<img
							style="padding: 2rem; max-width: 200px"
							src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/Screenshot-2020-12-03-at-11.09.45.png"
							alt=""
						/>
						<img
							style="padding: 2rem; max-width: 200px"
							src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/Screenshot-2020-12-03-at-11.09.54.png"
							alt=""
						/>
					</div>
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
.easteregg
	.hover
		display: block
		height: 3rem
		width: 3rem
		border: 3px solid $c-blue
		border-radius: 50%
		display: grid
		align-items: center
		cursor: pointer
		position: absolute
		left: 35%
		span
			position: absolute
			justify-self: center
			display: block
			height: 1rem
			width: 1rem
			border-radius: 50%
			background-color: $c-blue
		.easteregg-content
			display: none
			background: $c-blue
			color: white
			padding: 1rem
			width: 300px
			top: 2rem
			right: 2rem
			position: absolute
		&:hover
			background-color: $c-blue
			.easteregg-content
				display: block
			span
				background-color: white
.anwender, .funktionsumfang
	padding: 12rem 0
.funktionsumfang
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
.funktionen
	padding: 8rem 0
	background-size: contain
	background-repeat: no-repeat
	background-position: left center
	background-image: url('/lexibg3.png')
.bggradient
	background-image: linear-gradient(90deg, white, $c-gray-light)
.gesetze
	padding: 8rem 0
	background-size: contain
	background-repeat: no-repeat
	background-position: right center
	background-image: url('/bglexi2.png')
.banner
	padding: 12rem 0
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	background-image: url('/lexibg.png')
</style>
