<template>
	<div>
		<div class="banner" style="">
			<div class="container">
				<div v-scroll-reveal="{ delay: 100 }" class="cc" v-html="content.acf.banner.text" />
			</div>
		</div>
		<div class="background-gradient" style="padding-top: 4rem">
			<div class="pp-icons">
				<div class="container">
					<div style="display: grid; grid-template-columns: repeat(6, 2rem); gap: 0.5rem; align-items: center">
						<span v-for="(pf, i) in content.platform" :key="i" style="padding: 5px">
							<img :src="platforms[pf].acf.platform_icon" v-scroll-reveal="{ delay: 100 * i }" alt="" />
						</span>
					</div>
					<nuxt-link v-if="content.acf.product_person" :to="'/wir#' + content.acf.product_person.post_name"
						><div class="grid cols-2 small-gap person" style="align-items: center; margin-top: 2rem">
							<div>
								<p v-scroll-reveal="{ delay: 300 }" style="margin: 0; line-height: 1em">Produktmanager</p>
								<p v-scroll-reveal="{ delay: 400 }" style="margin: 0; font-weight: 900">
									{{ content.acf.product_person.post_title }}
								</p>
							</div>
							<div>
								<img v-scroll-reveal="{ delay: 500 }" style="border-radius: 50%" src="/portrait_placeholder.png" alt="" />
							</div></div
					></nuxt-link>
				</div>
			</div>
			<div class="kompromisslos">
				<div class="container">
					<div :class="{ text: true, open: showContentKomp }">
						<h3 v-scroll-reveal="{ delay: 0 }">Kompromisslos</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">Genau so, wie es sein soll</h2>
						<p v-scroll-reveal="{ delay: 400 }" class="intro">
							Dank langjähriger Erfahrung und der engen Zusammenarbeit mit Polizeikorps überzeugt PolicePad durch seine Effizienz: es ist intiuitiv und einfach zu bedienen. Flexible Module ergänzen die Anwendung mit hilfreichen
							Funktionen. Durch einfaches und schnelles Konfigurieren lässt sich die App weiter individualisieren.
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
							PolicePad hatte den besten Treiber für Innovation, den es gibt: die Realität. Die erste Version ging vor rund 30 Jahren in Betrieb. Mit jedem Tag und jedem Einsatz wurde das System besser. Heute steht PolicePad auf
							verschiedenen Plattformen zur Verfügung. Die Bedienung und zahlreiche Zusatzmodule haben wir in enger Zusammenarbeit mit unseren Kunden ausgearbeitet, verfeinert und mit smarten Funktionen ergänzt. Um den Erfassungsablauf
							zu vereinfachen, die Eingaben zu beschleunigen und die Datenqualität zu erhöhen.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="background-diagonal">
			<div class="funktionen">
				<div class="container">
					<div class="grid cols-2 small-gap">
						<div class="image">
							<img v-scroll-reveal="{ delay: 0 }" src="/polpadintuitiv.png" alt="" />
						</div>
						<div class="text">
							<h3 v-scroll-reveal="{ delay: 0 }">Funktionen</h3>
							<h2 v-scroll-reveal="{ delay: 200 }">Simpel und intuitiv</h2>
							<p v-scroll-reveal="{ delay: 400 }">
								Die Kernfunktion von PolicePad ist simpel: das Erfassen von Bussen. Doch dahinter steckt sehr viel mehr. Etwa: eine intelligente Suchfunktion, der Live-Abgleich mit mehreren Datenbeständen oder schnelleres Erfassen mit
								Favoriten.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="pp-module">
				<div class="container" style="height: 100%; position: relative">
					<client-only>
						<swiper class="swiper" :options="swiperOption">
							<swiper-slide v-for="(slide, i) in content.acf.policepad_slider" :key="i">
								<div class="slider-grid">
									<div class="slider-content" v-html="slide.slide_text" />
									<div class="slider-image" v-if="slide.slide_image"><img :src="slide.slide_image" alt="" /></div>
								</div>
							</swiper-slide>
						</swiper>
						<div class="swiper-pagination"></div>
					</client-only>
				</div>
			</div>
		</div>
		<div style="background-color: #e7e9ec; margin-bottom: 12rem" class="backend">
			<div class="container">
				<div class="text">
					<h3 v-scroll-reveal="{ delay: 0 }">PolicePad Server</h3>
					<h2 v-scroll-reveal="{ delay: 200 }">Backend</h2>
					<p v-scroll-reveal="{ delay: 400 }">
						Der PolicePad Server ist die Gegenstelle von PolicePad und nimmt die Fälle entgegen, speichert diese, stellt sie dar und bietet diverse Statistiken. Bearbeiten Sie die Fälle, steuern Sie Gruppen und verwalten Sie die mobilen
						Eingabegeräte. Mit dem Bereitstellen der Stammdaten können Sie Inhalte live übertragen und in der App darstellen. Die Exportkontrolle dient der Sicherstellung, dass alle Fälle übertragen wurden.
					</p>
				</div>
			</div>
		</div>
		<div class="police">
			<div class="container">
				<!-- <h3 v-scroll-reveal="{ delay: 0 }" style="text-align: center">STAPO ZÜRICH / BERNER KAPO / ZÜRCHER KAPO / PRIVATE</h3> -->
				<h2 v-scroll-reveal="{ delay: 200 }" style="text-align: center; margin-bottom: 8rem">{{ content.acf.numbers.numbers_title }}</h2>
				<div class="grid cols-5 small-gap">
					<div style="grid-column: span 3">
						<h1 v-scroll-reveal="{ delay: 0 }" style="font-size: 4.5rem; margin-bottom: 0; line-height: 1em">
							<RollingNumber :number="30" />
							<!-- {{ content.acf.numbers.numbers_actual.numbers_years }} -->
						</h1>
						<h3 v-scroll-reveal="{ delay: 100 }" style="margin-bottom: 2rem">Jahre</h3>
						<h1 v-scroll-reveal="{ delay: 200 }" style="font-size: 4.5rem; margin-bottom: 0; line-height: 1em">
							<RollingNumber :number="3000" />
							<!-- {{ content.acf.numbers.numbers_actual.numbers_users }} -->
						</h1>
						<h3 v-scroll-reveal="{ delay: 300 }" style="margin-bottom: 2rem">Nutzer</h3>
						<h1 v-scroll-reveal="{ delay: 400 }" style="font-size: 4.5rem; margin-bottom: 0; line-height: 1em">
							<RollingNumber :number="300000" />
							<!-- {{ content.acf.numbers.numbers_actual.numbers_cases }} -->
						</h1>
						<h3 v-scroll-reveal="{ delay: 500 }" style="margin-bottom: 2rem">Fälle im Halbjahr</h3>
					</div>
					<div v-scroll-reveal="{ delay: 200 }" style="grid-column: span 2" v-html="content.acf.numbers.numbers_text" />
				</div>
			</div>
		</div>
		<div id="grundfunk" style="margin-top: 8rem">
			<div class="container">
				<h2>Grundfunktionen</h2>
			</div>
			<div>
				<div class="container">
					<div class="grid cols-2">
						<h4>Erfassung</h4>
						<div>
							<ul>
								<li>Erfassen von Ordnungsbussen</li>
								<li>Erfassen von Verzeigungen</li>
								<li>Erfassen von kantonalrechtlichen Bussen</li>
								<li>Erfassen von gemeinderechtlichen Bussen</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-gray">
				<div class="container">
					<div class="grid cols-2">
						<h4>Bearbeiten</h4>
						<div>
							<ul>
								<li>Kumulieren von Bussen</li>
								<li>Ergänzen von Bussen</li>
								<li>Ersetzen von Bussen</li>
								<li>Löschen von Bussen</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="container">
					<div class="grid cols-2">
						<h4>Integriert</h4>
						<div>
							<ul>
								<li>Offline-fähig: Unkomplizierte Erfassung auch in Gebieten ohne Datenempfang.</li>
								<li>Camera: Machen Sie vor Ort Fotos zu einem Fall, die dank fälschungssicherer Signatur als Beweismittel dienen.</li>
								<li>Favorites: Beim manuellen Erfassen werden die wahrscheinlichsten Eingaben als Favoriten angezeigt.</li>
								<li>
									LexiConnect: Verbindung zum elektronischen Nachschlagewerk Lexica für gesetzliche Regelwerke. Aus den Eingabefeldern können Sie direkt in die entsprechenden Assistenten des Lexica navigieren und Tatbestände
									automatisch in den neuen Fall übernehmen.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-gray">
				<div class="container">
					<div class="grid cols-2">
						<h4>Integrierbare Datenbestände</h4>
						<div>
							<ul>
								<li>Bereits erfasste Bussen und Verzeigungen</li>
								<li>Parkvorgänge (eParking, easyPark, parkingPay usw.)</li>
								<li>Bewilligungen (Anwohnerparkkarten, Tagesbewilligungen usw.)</li>
								<li>Fahndungslisten (RIPOL usw.)</li>
								<li>MFK-Auskünfte (InfoCar usw.)</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="margin-top: 8rem" class="anwender">
			<div class="container" style="padding: 4rem 0">
				<h2>Anwender</h2>
				<div style="display: grid; gap: 2rem; align-items: center" class="grid cols-3">
					<nuxt-link v-for="(img, i) in content.acf.anwender" :key="i" to="/portfolio?category=1"><img v-scroll-reveal="{ delay: 200 * i }" style="padding: 2rem; max-width: 200px" :src="img" alt="" /></nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
	async asyncData({ store }) {
		return {
			content: store.state.products['policepad'],
			platforms: store.state.platforms,
			person: store.state.person,
		}
	},
	data() {
		return {
			showContentKomp: false,
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 48,
				loop: true,
				mousewheel: true,
				direction: 'horizontal',
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true,
				},
				breakpoints: {
					960: {
						direction: 'vertical',
						loop: false,
					},
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
.anwender
	.grid
		@include mobile
			justify-items: center
			img
				max-width: 180px !important
#grundfunk
	.container
		padding-top: 4rem
		padding-bottom: 4rem
		@include mobile
			padding: 0
			.grid
				gap: 1rem
				padding: 2rem 1rem
		li
			line-height: 2em
.bg-gray
	background-color: $c-gray-light
.person
	width: 16rem
	align-items: center
	@include mobile
		width: auto
		&.grid.cols-2
			grid-template-columns: 2fr 1fr
.cc
	max-width: 40%
	@include mobile
		max-width: 100%
.background-gradient
	background-image: linear-gradient(90deg, white, #e7e9ec)
	@include mobile
		z-index: 99
		position: relative
.background-diagonal
	background-image: url('/bgdiag.svg')
	background-size: cover
	background-repeat: no-repeat
	padding: 8rem 0
	@include mobile
		padding-bottom: 4rem
		margin-top: -7rem
		z-index: 0
.swiper-pagination
	top: 50%
	transform: translateY(-50%)
	left: -8rem
	@include mobile
		transform: rotate(-90deg)
		left: 50%
		right: 50%
		top: auto
		bottom: -7rem
.banner
	margin-top: 8rem
	display: grid
	align-items: baseline
	min-height: 32rem
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/banner_policepad-1.png')
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	@include mobile
		margin-top: 2rem
		background: none
		min-height: auto
		padding: 2rem 0 4rem
	h3
		color: black
	p
		width: 40%
		@include mobile
			width: auto
img
	height: auto
	transition: transform 100ms ease
	&.more-icon
		cursor: pointer
		@include mobile
			position: absolute
			z-index: 9999
	&.mirrored
		transform: scaleY(-1)
.kompromisslos
	// margin-top: 8rem
	min-height: 200vh
	background-image: url('/polpadbg1.png')
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	@include mobile
		min-height: 50vh
		background: none
	.container
		@include mobile
			width: auto
	.text
		padding-top: 30rem
		width: 40%
		transition: padding-top 350ms ease-out
		@include mobile
			width: auto
			padding-top: 5rem
		&.open
			padding-top: 15rem
			@include mobile
				padding-top: 5rem
		p
			margin: 3rem 0
			&.more
				opacity: 0
				transition: opacity 300ms ease-out, margin-top 300ms ease-out
				margin-top: 0rem
				@include mobile
					margin-top: -10rem
				&.active
					opacity: 1
					margin-top: 3rem
					@include mobile
						margin-top: 5rem
.funktionen
	.grid
		align-items: center
	.image
		margin: -5rem
		@include mobile
			margin: 0
.pp-module
	margin-top: 8rem
	margin-bottom: 8rem
	height: 28rem
	@include mobile
		margin-bottom: 0
		height: 40rem
	.slider-grid
		display: grid
		grid-template-columns: 1fr 2fr
		gap: 8rem
		align-items: center
		@include mobile
			grid-template-columns: 1fr
			grid-template-rows: auto
			gap: 1rem
			align-items: start
			.slider-content
				grid-row: 2
			.slider-image
				grid-row: 1
	.swiper-container
		height: 100%
		width: 140%
		@include mobile
			width: 100%
	.swiper-slide
		height: 28rem
.backend
	display: grid
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2021/01/pp-backend-background-1-1.png')
	background-size: contain
	background-repeat: no-repeat
	background-position: center right
	height: 60rem
	@include mobile
		height: 25rem
		background-position: top
		padding-top: 10rem
		margin-top: -5rem
	.text
		width: 40%
		@include mobile
			width: auto
.swiper-pagination-bullet
	margin: 12px 0 !important
</style>
