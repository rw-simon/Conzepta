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
						<span style="padding: 5px">
							<img style="height: auto" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/12/icon_windows.png" v-scroll-reveal="{ delay: 100 }" alt="" />
						</span>
						<span style="padding: 5px">
							<img style="height: auto; opacity: 0.33" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/12/icon_android.png" v-scroll-reveal="{ delay: 100 }" alt="" />
						</span>
						<span style="padding: 5px">
							<img style="height: auto; opacity: 0.33" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/12/icon_apple.png" v-scroll-reveal="{ delay: 100 }" alt="" />
						</span>
					</div>
					<nuxt-link v-if="content.acf.product_person" :to="'/wir#' + content.acf.product_person.post_name"
						><div class="grid cols-2 small-gap person" style="align-items: center; margin-top: 2rem">
							<div>
								<p v-scroll-reveal="{ delay: 300 }" style="margin: 0; line-height: 1em">{{ $i18n.locale == 'fr' ? 'Gestionnaire de produit' : 'Produktemanager' }}</p>
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
						<div v-html="content.acf.intro.intro_text1"></div>
						<img
							@click="toggleContentKomp"
							:class="{
								'more-icon': true,
								mirrored: showContentKomp,
							}"
							src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_arrowDown.png"
							alt=""
						/>
						<div :class="{ more: true, active: showContentKomp }" v-html="content.acf.intro.intro_text2"></div>
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
						<div class="text" v-html="content.acf.funktionen.funktionen_text">
							<!-- <h3 v-scroll-reveal="{ delay: 0 }">Funktionen</h3>
							<h2 v-scroll-reveal="{ delay: 200 }">Simpel und intuitiv</h2>
							<p v-scroll-reveal="{ delay: 400 }">
								Die Kernfunktion von PolicePad ist simpel: das Erfassen von Bussen. Doch dahinter steckt sehr viel mehr. Etwa: eine intelligente Suchfunktion, der Live-Abgleich mit mehreren Datenbeständen oder schnelleres Erfassen mit
								Favoriten.
							</p> -->
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
				<div class="text" v-html="content.acf.backend.backend_text">
					<!-- <h3 v-scroll-reveal="{ delay: 0 }">PolicePad Server</h3>
					<h2 v-scroll-reveal="{ delay: 200 }">Backend</h2>
					<p v-scroll-reveal="{ delay: 400 }">
						Der PolicePad Server ist die Gegenstelle von PolicePad und nimmt die Fälle entgegen, speichert diese, stellt sie dar und bietet diverse Statistiken. Bearbeiten Sie die Fälle, steuern Sie Gruppen und verwalten Sie die mobilen
						Eingabegeräte. Mit dem Bereitstellen der Stammdaten können Sie Inhalte live übertragen und in der App darstellen. Die Exportkontrolle dient der Sicherstellung, dass alle Fälle übertragen wurden.
					</p> -->
				</div>
			</div>
		</div>
		<div class="police">
			<div class="container">
				<!-- <h3 v-scroll-reveal="{ delay: 0 }" style="text-align: center">STAPO ZÜRICH / BERNER KAPO / ZÜRCHER KAPO / PRIVATE</h3> -->
				<h2 v-scroll-reveal="{ delay: 200 }" style="text-align: center; margin-bottom: 8rem">{{ content.acf.numbers.numbers_title }}</h2>
				<div class="grid cols-4 small-gap">
					<div style="grid-column: span 2">
						<h1 v-scroll-reveal="{ delay: 0 }" style="font-size: 4.5rem; margin-bottom: 0; line-height: 1em">
							<RollingNumber :number="30" />
							<!-- {{ content.acf.numbers.numbers_actual.numbers_years }} -->
						</h1>
						<h3 v-scroll-reveal="{ delay: 100 }" style="margin-bottom: 2rem">{{ $i18n.locale == 'fr' ? 'Années' : 'Jahre' }}</h3>
						<h1 v-scroll-reveal="{ delay: 200 }" style="font-size: 4.5rem; margin-bottom: 0; line-height: 1em">
							<RollingNumber :number="3000" />
							<!-- {{ content.acf.numbers.numbers_actual.numbers_users }} -->
						</h1>
						<h3 v-scroll-reveal="{ delay: 300 }" style="margin-bottom: 2rem">{{ $i18n.locale == 'fr' ? 'Utilisateur' : 'Nutzer' }}</h3>
						<h1 v-scroll-reveal="{ delay: 400 }" style="font-size: 4.5rem; margin-bottom: 0; line-height: 1em">
							<RollingNumber :number="300000" />
							<!-- {{ content.acf.numbers.numbers_actual.numbers_cases }} -->
						</h1>
						<h3 v-scroll-reveal="{ delay: 500 }" style="margin-bottom: 2rem">{{ $i18n.locale == 'fr' ? 'Cas au cours du semestre' : 'Fälle im Halbjahr' }}</h3>
					</div>
					<div v-scroll-reveal="{ delay: 200 }" style="grid-column: span 2" v-html="content.acf.numbers.numbers_text" />
				</div>
			</div>
		</div>
		<div v-if="$i18n.locale == 'de'" class="container" style="margin-top: 8rem">
			<h3>Technische Details</h3>
			<h2>Grundfunktionen</h2>
			<div class="list-two-columns">
				<div class="column-1">
					<article>
						<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
						<h4>Erfassen</h4>
						<p>Mit PolicePad erfassen Sie einfach und schnell Ordnungsbussen und Verzeigungen. Auf kantonaler und kommunaler Ebene.</p>
					</article>
					<article>
						<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
						<h4>Bearbeiten</h4>
						<p>Sie können Bussen ganz unkompliziert kumulieren, ergänzen, ersetzen oder löschen.</p>
					</article>
					<article>
						<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
						<h4>On- und Offline</h4>
						<p>Erfassen Sie Bussen auch in Gebieten, in denen es keinen mobilen Datenempfang gibt.</p>
					</article>
					<article>
						<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
						<h4>Beweissicherung</h4>
						<p>Machen Sie vor Ort Fotos mit fälschungssicherer Signatur für die Beweissicherung. Lassen Sie sich mithilfe von Favoriten die wahrscheinlichsten Eingaben anzeigen.</p>
					</article>
				</div>
				<div class="column-2">
					<article>
						<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
						<h4>LexiConnect</h4>
						<p>Konsultieren Sie das Gesetz mit dem integrierten Nachschlagewerk LexiConnect und übernehmen Sie Tatbestände automatisch in einen neuen Fall.</p>
					</article>
					<article>
						<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
						<h4>Alles im Blick</h4>
						<p>Rufen Sie bereits erfasste Bussen und Verzeigungen in Sekundenschnelle ab. Prüfen Sie vorhandene Parkbewilligungen (eParking, ParkingPay, Anwohnerparkkarten, Tagesbewilligungen etc.).</p>
					</article>
					<article>
						<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
						<h4>Integrierbare Schnittstellen</h4>
						<p>Fahndungslisten (z.B. RIPOL) und MFK-Auskünfte (z.B. InfoCar) können auf Wunsch eingebunden werden.</p>
					</article>
				</div>
			</div>
		</div>
		<div style="margin-top: 8rem" class="anwender">
			<div class="container" style="padding: 4rem 0">
				<h2>{{ $i18n.locale == 'fr' ? 'Utilisateurs' : 'Einige unserer Anwender' }}</h2>
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
import axios from 'axios'
export default {
	name: 'produkte-policepad',
	async asyncData({ app, store }) {
		let content = await axios.get(`https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/products?slug=policepad&lang=${app.i18n.locale}`)
		return {
			content: content.data[0],
			platforms: store.state.platforms,
			person: store.state.person,
		}
	},

	nuxtI18n: {
		paths: {
			//   en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
			fr: '/produits/policepad', // -> accessible at /fr/a-propos
			de: '/produkte/policepad', // -> accessible at /es/sobre
		},
	},
	data() {
		return {
			showContentKomp: false,
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 48,
				loop: true,
				mousewheel: true,
				longSwipesMs: 20,
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
.list-two-columns
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 8rem
	article
		min-height: 150px
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
.more
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
