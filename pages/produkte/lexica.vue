<template>
	<div>
		<div class="bggradient">
			<div v-scroll-reveal="{ delay: 0 }" class="banner">
				<div class="container">
					<div class="section grid cols-2">
						<div>
							<div class="padfix" v-html="content.acf.modules[0].text_2_columns_column_1"></div>
							<!-- <div>
								<h3 v-scroll-reveal="{ delay: 0 }">Nachschlagewerk</h3>
								<h1 v-scroll-reveal="{ delay: 200 }">Lexica //</h1>
								<p v-scroll-reveal="{ delay: 400 }">
									Lexica ist das digitale Nachschlagewerk für alle, die im Namen des Gesetzes unterwegs sind: Gesetze, Regeln, Statuten und vieles mehr in einer einzigen App. Und Lexica ist ein ganz persönlicher Helfer: Ergänzen Sie die
									Einträge individuell mit Tags und Notizen. Mittels einer ausgeklügelten Suchfunktion und einem praktischen Assistenten finden Sie sofort den Artikel, den Sie brauchen.
								</p>
								<div class="grid"></div>
							</div> -->
							<div class="produktemanager">
								<div style="display: grid; grid-template-columns: repeat(6, 2rem); gap: 0.5rem; align-items: center">
									<span v-for="(platform, i) in content.platform" :key="i" style="padding: 5px">
										<img style="height: auto" :src="$store.state.platforms[platform].acf.platform_icon" alt="" />
									</span>
								</div>
								<nuxt-link :to="{ path: '/wir', hash: '#alin-andersen' }">
									<div class="grid cols-2 small-gap person" style="align-items: center; margin-top: 2rem">
										<div>
											<p v-scroll-reveal="{ delay: 800 }" style="margin: 0; line-height: 1em">{{ $i18n.locale == 'fr' ? 'Gestionnaire de produit' : 'Produktemanager' }}</p>
											<p v-scroll-reveal="{ delay: 1000 }" style="font-weight: 900">Alin Andersen</p>
										</div>
										<div>
											<img v-scroll-reveal="{ delay: 1200 }" style="height: auto; border-radius: 50%" src="/portrait_placeholder.png" alt="" />
										</div>
									</div>
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="gesetze">
				<div class="container">
					<div class="section grid cols-2">
						<div v-html="content.acf.modules[1].text_2_columns_column_1">
							<!-- <h3 v-scroll-reveal="{ delay: 0 }">Moderner Klassiker</h3>
							<h2 v-scroll-reveal="{ delay: 200 }">Gemeinsam mit den Kunden entwickelt</h2>
							<p v-scroll-reveal="{ delay: 400 }">
								Es gehörte zur Standardausrüstung jeder Polizistin und jedes Polizisten: das Bussenziffernbüchlein. Sein digitaler Nachfolger heisst Lexica. Die Anwendung, die wir dank Kundenfeedbacks stetig weiterentwickeln, hat sich
								als erfolgreiches und innovatives Nachschlagewerk im mobilen Polizei- und Sicherheitsalltag etabliert.
							</p> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="funktionen">
			<div class="container">
				<div class="section grid cols-2">
					<div>
						<!-- <poi
							x="10"
							text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ut, laudantium deleniti ea repellendus, officiis mollitia corporis vero amet maiores perspiciatis! Repellendus exercitationem alias sapiente nam accusamus, voluptas distinctio adipisci."
						></poi> -->
					</div>
					<div class="mobilefix">
						<h3 v-scroll-reveal="{ delay: 0 }">{{ $i18n.locale == 'fr' ? 'BIEN PLUS QU’UN LIVRE' : 'WEIT MEHR ALS EIN BUCH' }}</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">{{ $i18n.locale == 'fr' ? 'Ce que Lexica sait faire' : 'Was Lexica alles kann' }}</h2>
						<p v-scroll-reveal="{ delay: 400 }"></p>
						<article v-for="item in content.acf.modules[2].list_2_columns_column_2" :key="item['id']">
							<img class="list-icon" :src="item.list_2_columns_column_2_icon" alt="" />
							<h4>{{ item.list_2_columns_column_2_text.list_2_columns_column_2_text_title }}</h4>
							<p>{{ item.list_2_columns_column_2_text.list_2_columns_column_2_text_content }}</p>
						</article>
						<!-- <article>
							<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
							<h4>Erweiterbar</h4>
							<p>Persönliche Notizen anlegen.</p>
						</article>
						<article>
							<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
							<h4>Hilfsbereit</h4>
							<p>Schnelle Textsuche und diverse Assistenten erleichtern die Arbeit.</p>
						</article>
						<article>
							<img class="list-icon" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_circle.png" alt="" />
							<h4>Umfassend</h4>
							<p>Ordnungsbussenverordnung als Hauptanwendung, zahlreiche Erweiterungsmöglichkeiten wie etwa die Hinterlegung von Bewilligungen.</p>
						</article> -->
					</div>
				</div>
			</div>
		</div>
		<div class="lexiconnect">
			<div class="">
				<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/06_LexiConnect.png" style="height: auto" alt="" />
			</div>
		</div>
		<div class="bgdiag">
			<div class="funktionsumfang">
				<div class="container" style="margin-top: 8rem; height: 100%; position: relative">
					<client-only>
						<swiper class="swiper" :options="swiperOption">
							<swiper-slide v-for="slide in content.acf.modules[3]['slider-content']" :key="slide['id']">
								<div class="slider-grid">
									<div class="slider-text" v-html="slide.slide_text">
										<!-- <h3>FUNKTIONEN</h3>
										<h2>Tags</h2>
										<p>Tags erleichtern die Suche vor allem von nicht täglichen Begriffen, so kann z.B. nach "Ampel" gesucht werden, obwohl diese als "Lichtsignalanlage" im entsprechenden Gesetz hinterlegt ist.</p> -->
									</div>
									<div class="slider-image"><img style="height: auto" :src="slide.slide_image" alt="" /></div>
								</div>
							</swiper-slide>
						</swiper>
						<div class="swiper-pagination"></div>
					</client-only>
				</div>
			</div>
			<div class="container video">
				<div v-html="content.acf.modules[4]['text_1_columns_column_1']"></div>
			</div>
			<div class="anwender">
				<div class="container" style="padding: 4rem 0">
					<h2>{{ $i18n.locale == 'fr' ? 'Certains de nos utilisateurs' : 'Einige unserer Anwender' }}</h2>
					<div class="grid cols-3" style="display: grid; gap: 2rem; align-items: center">
						<nuxt-link to="/portfolio?category=2"
							><img v-scroll-reveal="{ delay: 0 }" style="padding: 2rem; max-width: 200px; height: auto" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2021/02/Screenshot-2021-02-05-at-11.41.08.png" alt=""
						/></nuxt-link>
						<nuxt-link to="/portfolio?category=2"
							><img v-scroll-reveal="{ delay: 200 }" style="padding: 2rem; max-width: 200px; height: auto" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/Screenshot-2020-12-03-at-11.09.36.png" alt=""
						/></nuxt-link>
						<nuxt-link to="/portfolio?category=2"
							><img v-scroll-reveal="{ delay: 400 }" style="padding: 2rem; max-width: 200px; height: auto" src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/09/Screenshot-2020-12-03-at-11.09.45.png" alt=""
						/></nuxt-link>
					</div>
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
	name: 'produkte-lexica',
	nuxtI18n: {
		paths: {
			//   en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
			fr: '/produits/lexica', // -> accessible at /fr/a-propos
			de: '/produkte/lexica', // -> accessible at /es/sobre
		},
	},
	async asyncData({ app }) {
		let content = await axios.get(`https://admin.conzepta.ch/index.php/wp-json/wp/v2/products?slug=lexica&lang=${app.i18n.locale}`)
		return {
			content: content.data[0],
		}
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 96,
				loop: true,
				mousewheel: true,
				direction: 'horizontal',
				simulateTouch: false,
				speed: 400,
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
}
</script>

<style lang="sass" scoped>
.lexiconnect
	margin-top: 8rem
.video
	iframe
		width: 100% !important


.person
	width: 16rem
	@include mobile
		width: auto
		&.grid.cols-2
			grid-template-columns: 2fr 1fr
.mobilefix
	@include mobile
		padding-top: 5rem
.force
	@include mobile
		grid-template-columns: 3fr 1fr !important
.padfix
	padding: 2rem 0
	@include mobile
		padding: 0
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
		height: 100%
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
		@include mobile
			width: 100%
	.swiper-slide
		height: 28rem
.swiper-pagination
	top: 50%
	transform: translateY(-50%)
	left: -8rem
	@include mobile
		transform: rotate(-90deg)
		left: 50%
		right: 50%
		top: auto
		bottom: -5rem
.funktionen
	padding: 1rem 0
	background-size: contain
	background-repeat: no-repeat
	background-position: left center
	background-image: url('/lexibg3.png')
	@include mobile
		background-position-y: top
		padding-bottom: 0
		background-size: 170%
		padding-top: 14rem
		ul
			padding-left: 2rem
.bggradient
	background-image: linear-gradient(90deg, white, $c-gray-light)
.gesetze
	padding: 8rem 0
	background-size: contain
	background-repeat: no-repeat
	background-position: right center
	background-image: url('/bglexi2.png')
	.section
		@include mobile
			padding-top: 14rem !important
	@include mobile
		padding-top: 2rem
		background-position: top right
		background-size: 150%
		margin-top: -5rem
.banner
	padding: 16rem 0
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	background-image: url('/lexibg.png')
	@include mobile
		padding: 2rem 0
		background: none
article
	position: relative
	min-height: 80px
	.list-icon
		position: absolute
		left: -4.5rem
		// top: .5rem
		max-width: 3rem
		height: 3rem
		@include mobile
			left: -3rem
			max-width: 2rem
			height: 2rem
</style>
