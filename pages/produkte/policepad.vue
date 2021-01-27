<template>
	<div>
		<div class="banner" style="">
			<div class="container">
				<div class="cc" v-html="content.acf.banner.text" />
			</div>
		</div>
		<div class="background-gradient" style="padding-top: 4rem">
			<div class="pp-icons">
				<div class="container">
					<div style="display: grid; grid-template-columns: repeat(6, 2rem); gap: 0.5rem; align-items: center">
						<span v-for="(pf, i) in content.platform" :key="i" style="padding: 5px">
							<img :src="platforms[pf].acf.platform_icon" alt="" />
						</span>
					</div>
					<nuxt-link v-if="content.acf.product_person" :to="'/wir#' + content.acf.product_person.post_name"
						><div class="grid cols-2 small-gap person" style="align-items: center; margin-top: 2rem">
							<div>
								<p style="margin: 0; line-height: 1em">Produktmanager</p>
								<p style="font-weight: 900">{{ content.acf.product_person.post_title }}</p>
							</div>
							<div>
								<img if src="" alt="" />
								<img style="border-radius: 50%" src="/portrait_placeholder.png" alt="" />
							</div></div
					></nuxt-link>
				</div>
			</div>
			<div class="kompromisslos">
				<div class="container">
					<div :class="{ text: true, open: showContentKomp }">
						<h3>Kompromisslos</h3>
						<h2>Genau so, wie es sein soll</h2>
						<p class="intro">
							Dank langjähriger Erfahrung und der engen Zusammenarbeit mit Polizeikorps und privaten Nutzern überzeugt PolicePad durch
							seine Effizienz: es ist einfach zu erlernen und zu bedienen. Flexible Module ergänzen die Anwendung mit hilfreichen
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
							PolicePad hatte den besten Treiber für Innovation, den es gibt: die Realität. Die erste Version ging vor rund 30 Jahren in
							Betrieb. Mit jedem Tag, jedem Einsatz, jeder einzelnen erfassten Busse wurde das System besser. Heute steht PolicePad auf
							allen gängigen Plattformen (iOS, Windows, Android) zur Verfügung.
							<br />
							Die Bedienung und zahlreiche Zusatzmodule haben wir in enger Zusammenarbeit mit unseren Kunden ausgearbeitet, verfeinert
							und mit smarten Funktionen ergänzt. Um den Erfassungsablauf zu vereinfachen, die Eingaben zu beschleunigen und die
							Datenqualität zu erhöhen.
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
							<img src="/polpadintuitiv.png" alt="" />
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
				<div class="container" style="height: 100%; position: relative">
					<client-only>
						<swiper class="swiper" :options="swiperOption">
							<swiper-slide v-for="(slide, i) in content.acf.policepad_slider" :key="i">
								<div class="slider-grid">
									<div v-html="slide.slide_text" />
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
				<h2 style="text-align: center; margin-bottom: 8rem">{{ content.acf.numbers.numbers_title }}</h2>
				<div class="grid cols-5">
					<div style="grid-column: span 3">
						<h1 style="font-size: 4.5rem; margin-bottom: 0; line-height: 1em">{{ content.acf.numbers.numbers_actual.numbers_years }}</h1>
						<h3 style="margin-bottom: 2rem">Jahre</h3>
						<h1 style="font-size: 4.5rem; margin-bottom: 0; line-height: 1em">{{ content.acf.numbers.numbers_actual.numbers_users }}</h1>
						<h3 style="margin-bottom: 2rem">Nutzer</h3>
						<h1 style="font-size: 4.5rem; margin-bottom: 0; line-height: 1em">{{ content.acf.numbers.numbers_actual.numbers_cases }}</h1>
						<h3 style="margin-bottom: 2rem">Fälle im Jahr</h3>
					</div>
					<div style="grid-column: span 2" v-html="content.acf.numbers.numbers_text" />
				</div>
			</div>
		</div>
		<div style="background: #e7e9ec; margin-top: 8rem" class="anwender">
			<div class="container" style="padding: 4rem 0">
				<h2>Anwender</h2>
				<div style="display: grid; gap: 2rem; align-items: center" class="grid cols-3">
					<img style="padding: 2rem; max-width: 200px" v-for="(img, i) in content.acf.anwender" :key="i" :src="img" alt="" />
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
	methods: {
		toggleContentKomp() {
			this.showContentKomp = !this.showContentKomp
		},
	},
}
</script>

<style lang="sass" scoped>
.person
	width: 16rem
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
.background-diagonal
	background-image: url('/bgdiag.svg')
	background-size: cover
	background-repeat: no-repeat
	padding: 8rem 0
	@include mobile
		padding-bottom: 4rem
.swiper-pagination
	top: 50%
	transform: translateY(-50%)
	left: -8rem
.banner
	margin-top: 8rem
	display: grid
	align-items: baseline
	min-height: 32rem
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/banner_policepad.png')
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	@include mobile
		margin-top: 2rem
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
				&.active
					opacity: 1
					margin-top: 3rem
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
	height: 20rem
	@include mobile
		margin-bottom: 0
		height: 20rem
	.slider-grid
		display: grid
		grid-template-columns: 1fr 1fr
		gap: 8rem
		@include mobile
			grid-template-columns: 1fr
			.slider-image
				display: none
	.swiper-container
		height: 100%
	.swiper-slide
		height: 20rem
.backend
	display: grid
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2021/01/pp-backend-background-1-1.png')
	background-size: contain
	background-repeat: no-repeat
	background-position: center right
	height: 60rem
	@include mobile
		height: 25rem
		background: none
	.text
		width: 40%
		@include mobile
			width: auto
</style>
