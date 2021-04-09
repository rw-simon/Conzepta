<template>
	<div>
		<div class="bggradient">
			<div v-scroll-reveal="{ delay: 0 }" class="banner">
				<div class="container">
					<div class="section grid cols-2">
						<div class="padfix">
							<h3 v-scroll-reveal="{ delay: 0 }">Nachschlagewerk</h3>
							<h1 v-scroll-reveal="{ delay: 200 }">Lexica //</h1>
							<p v-scroll-reveal="{ delay: 400 }">
								Lexica ist das digitale Nachschlagewerk für alle, die im Namen des Gesetzes unterwegs sind: Gesetze, Regeln, Statuten und vieles mehr in einer einzigen App. Und Lexica ist ein ganz persönlicher Helfer: Ergänzen Sie die
								Einträge individuell mit Tags und Notizen. Mittels einer ausgeklügelten Suchfunktion und einem praktischen Assistenten finden Sie sofort den Artikel, den Sie brauchen.
							</p>
							<div class="grid"></div>
						</div>
						<div style="align-self: end; padding-left: 5rem">
							<nuxt-link :to="'/wir#philippe-luethi'"
								><div class="grid cols-2 small-gap force" style="width: 16rem; align-items: center; margin-top: 2rem">
									<div>
										<p v-scroll-reveal="{ delay: 0 }" style="margin: 0; line-height: 1em">Produktmanager</p>
										<p v-scroll-reveal="{ delay: 200 }" style="margin: 0; font-weight: 900">Philippe Lüthi</p>
									</div>
									<div>
										<img v-scroll-reveal="{ delay: 400 }" style="height: auto; border-radius: 50%" src="/portrait_placeholder.png" alt="" />
									</div></div
							></nuxt-link>
							<div style="display: grid; grid-template-columns: repeat(6, 2rem); gap: 0.5rem; align-items: center">
								<span style="padding: 5px">
									<img style="height: auto; " src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/12/icon_apple.png" v-scroll-reveal="{ delay: 100}" alt="" />
								</span>
								<span style="padding: 5px">
									<img style="height: auto; opacity: 0.33" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/12/icon_android.png" v-scroll-reveal="{ delay: 100}" alt="" />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="gesetze">
				<div class="container">
					<div class="section grid cols-2">
						<div>
							<h3 v-scroll-reveal="{ delay: 0 }">Moderner Klassiker</h3>
							<h2 v-scroll-reveal="{ delay: 200 }">Gemeinsam mit den Kunden entwickelt</h2>
							<p v-scroll-reveal="{ delay: 400 }">
								Es gehörte zur Standardausrüstung jeder Polizistin und jedes Polizisten: das Bussenziffernbüchlein. Sein digitaler Nachfolger heisst Lexica. Die Anwendung, die wir dank Kundenfeedbacks stetig weiterentwickeln, hat sich
								als erfolgreiches und innovatives Nachschlagewerk im mobilen Polizei- und Sicherheitsalltag etabliert.
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
						<Poi x="10" text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ut, laudantium deleniti ea repellendus, officiis mollitia corporis vero amet maiores perspiciatis! Repellendus exercitationem alias sapiente nam accusamus, voluptas distinctio adipisci." />
					</span>
					<div class="mobilefix">
						<h3 v-scroll-reveal="{ delay: 0 }">WEIT MEHR ALS EIN BUCH</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">Was Lexica alles kann</h2>
						<p v-scroll-reveal="{ delay: 400 }">
							<ul>
								<li><strong>Simpel:</strong> unkompliziert Ansammlungen von Einträgen einbinden</li>
								<li><strong>Erweiterbar:</strong> persönliche Notizen anlegen</li>
								<li><strong>Hilfsbereit:</strong> schnelle Textsuche und diverse Assistenten erleichtern die Arbeit</li>
								<li><strong>Umfassend:</strong> Ordnungsbussenverordnung als Hauptanwendung, zahlreiche Erweiterungsmöglichkeiten wie etwa die Hinterlegung von Bewilligungen</li>
							</ul>
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
										<h3>FUNKTIONEN</h3>
										<h2>Tags</h2>
										<p>Tags erleichtern die Suche vor allem von nicht täglichen Begriffen, so kann z.B. nach "Ampel" gesucht werden, obwohl diese als "Lichtsignalanlage" im entsprechenden Gesetz hinterlegt ist.</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>FUNKTIONEN</h3>
										<h2>Notizen</h2>
										<p>Persönliche Notizen ergänzen einen Eintrag individuell und bleiben bei neuen Versionen erhalten. Zusätzlich werden die Notizen in die Suche einbezogen.</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>FUNKTIONEN</h3>
										<h2>Favoriten</h2>
										<p>
											Selbstdefinierte Einträge können als Favoriten definiert und somit prominent platziert werden.
										</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>FUNKTIONEN</h3>
										<h2>Assistenten</h2>
										<p>Die Assistenten erlauben das Finden von Einträgen mit Hilfe von grafischen Elementen. Die anwendbaren Ziffern werden auf einer Grafik, welche alltägliche Situationen abbildet, schnell und einfach ermittelt.</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>FUNKTIONEN</h3>
										<h2>Updates</h2>
										<p>Anpassungen der Ansammlungen oder einzelne Einträge davon, können bequem online gemacht werden. Die persönlichen Notizen der Benutzer bleiben natürlich erhalten.</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>FUNKTIONEN</h3>
										<h2>Datenaustausch</h2>
										<p>Lexica kann Daten von und zu anderen System importieren und exportieren. So lassen sich z.B. Ziffern anwählen und ins PolicePad übermitteln. Oder man gelangt von PolicePad zu den detaillierten Informationen von Lexica.</p>
									</div>
									<div class="slider-image"><img style="height: auto" src="/tachiimg3.png" alt="" /></div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="slider-grid">
									<div class="slider-text">
										<h3>FUNKTIONEN</h3>
										<h2>Backend</h2>
										<p>Das Backend stellt eine einfache und intuitive Oberfläche zur Verfügung um die Ansammlung von Einträgen praktisch zu Editieren und neue Versionen davon zu generieren. Zusätzlich können Benutzer und Gruppen verwaltet, sowie weitere Einstellungen vorgenommen werden.</p>
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
					<div class="grid cols-3" style="display: grid; gap: 2rem; align-items: center">
						<img v-scroll-reveal="{ delay: 0 }" style="padding: 2rem; max-width: 200px; height: auto" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2021/02/Screenshot-2021-02-05-at-11.41.08.png" alt="" />
						<img v-scroll-reveal="{ delay: 200 }" style="padding: 2rem; max-width: 200px; height: auto" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/Screenshot-2020-12-03-at-11.09.36.png" alt="" />
						<img v-scroll-reveal="{ delay: 400 }" style="padding: 2rem; max-width: 200px; height: auto" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/Screenshot-2020-12-03-at-11.09.45.png" alt="" />
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
				spaceBetween: 96,
				loop: true,
				mousewheel: true,
				direction: 'vertical',
				simulateTouch: false,
				speed: 400,
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
.mobilefix
	@include mobile
		padding-top: 5rem
.force
	@include mobile
		grid-template-columns: 3fr 1fr !important
.padfix
	padding: 12rem 0
	@include mobile
		padding: 4rem 0
.easteregg
	@include mobile
		display: none
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
	@include mobile
		padding: 0
.anwender
	.grid
		justify-items: center
.funktionsumfang
	height: 28rem
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
		width: 140%
	.swiper-slide
		height: 28rem
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
	@include mobile
		background-position-y: top
		padding-bottom: 0
.bggradient
	background-image: linear-gradient(90deg, white, $c-gray-light)
.gesetze
	padding: 8rem 0
	background-size: contain
	background-repeat: no-repeat
	background-position: right center
	background-image: url('/bglexi2.png')
	@include mobile
		padding-top: 2rem
.banner
	padding: 12rem 0
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	background-image: url('/lexibg.png')
	@include mobile
		padding-top: 2rem
</style>
