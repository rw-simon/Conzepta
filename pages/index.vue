<template>
	<div>
		<div class="banner-main">
			<div class="container" style="width: auto">
				<!-- <h1 v-scroll-reveal>{{ content.title.rendered }}</h1> -->
				<img v-scroll-reveal="{ delay: 200 }" src="/icon_white.png" alt="" />
				<div v-scroll-reveal="{ delay: 400 }" style="width: 64px; text-align: center; margin: auto; margin-top: 5rem; margin-bottom: -5rem; cursor: pointer">
					<img @click="scrollDown" src="/arrows.png" alt="" />
				</div>
			</div>
		</div>
		<div class="intro">
			<!-- :style="{ transform: 'translateY(' + pos + 'vh)' }"> -->
			<div class="container">
				<div style="width: 33%; min-width: 300px" v-html="content[0].text_2_columns_column_1"></div>
				<!-- <h2 v-scroll-reveal>{{}}</h2>
				<p v-scroll-reveal="{ delay: 200 }">
					Mehr Effizienz und Sicherheit mit <br />
					Software von Conzepta.
				</p> -->
				<nuxt-link style="z-index: 99999999; position: relative" v-scroll-reveal="{ delay: 400 }" :to="localePath({ name: 'produkte' })"><CButton :text="$i18n.locale == 'fr' ? 'Produits' : 'Produkte'" /></nuxt-link>
			</div>
		</div>
		<div class="since">
			<div class="container">
				<div class="grid cols-2">
					<div style="min-width: 300px" v-html="content[1].text_2_columns_column_1"></div>
					<span>
						<poi v-if="eastereggs[0].anzeigen" x="0" y="-400" :text="eastereggs[0].inhalt"></poi>
						<poi v-if="eastereggs[1].anzeigen" x="100" y="350" :text="eastereggs[1].inhalt"></poi>
					</span>
				</div>
				<!-- <h3 v-scroll-reveal>Etablierte Lösungen</h3>
				<h2 v-scroll-reveal="{ delay: 200 }">Seit 1986</h2>
				<p v-scroll-reveal="{ delay: 400 }">
					Die Zeichen der Zeit erkennen und <br />
					Lösungen dafür suchen: Das haben unsere <br />
					Gründer vor über 30 Jahren getan.
				</p> -->
				<nuxt-link v-scroll-reveal="{ delay: 600 }" :to="localePath({ name: 'wir' })"><CButton :text="$i18n.locale == 'fr' ? 'À Propos' : 'Wir'" /></nuxt-link>
			</div>
		</div>
		<div class="vorteile">
			<div class="container">
				<div v-html="content[2].text_1_columns_column_1"></div>
				<!-- <h1 v-scroll-reveal="{ delay: 0 }">Vorteile verschaffen mit Conzepta</h1> -->
				<div v-scroll-reveal="{ delay: 200 }" class="grid cols-3 small-gap">
					<article>
						<img v-scroll-reveal="{ delay: 300 }" src="/puzzle.png" alt="" />
						<div v-html="content[3].text_2_columns_column_1"></div>
						<!-- <h2 v-scroll-reveal="{ delay: 400 }">Adaption</h2>
						<p style="padding: 0 2rem; box-sizing: border-box" v-scroll-reveal="{ delay: 500 }">Wir bieten nicht nur Pakete ab Stange, sondern individuelle Lösungen und persönlichen Support.</p> -->
					</article>
					<article>
						<img v-scroll-reveal="{ delay: 500 }" src="/checkmark.png" alt="" />
						<div v-html="content[3].text_2_columns_column_2"></div>
						<!-- <h2 v-scroll-reveal="{ delay: 600 }">Qualität</h2>
						<p style="padding: 0 2rem; box-sizing: border-box" v-scroll-reveal="{ delay: 700 }">Wir liefern Schweizer Qualitätsprodukte aus Eigenentwicklung.</p> -->
					</article>
					<article>
						<img v-scroll-reveal="{ delay: 700 }" src="/grabber.png" alt="" />
						<div v-html="content[3].text_3_columns_column_3" class="none"></div>
						<!-- <h2 v-scroll-reveal="{ delay: 800 }">Modern</h2>
						<p style="padding: 0 2rem; box-sizing: border-box" v-scroll-reveal="{ delay: 900 }">Wir können Ihre Zukunft nicht vorhersehen. Aber wir können sie programmieren.</p> -->
					</article>
				</div>
				<nuxt-link :to="localePath({ name: 'wir' })"><CButton style="margin-top: 3rem" :text="$i18n.locale == 'fr' ? 'Plus' : 'Mehr'" /></nuxt-link>
			</div>
		</div>
		<div class="support">
			<div class="container">
				<div class="grid cols-2">
					<span></span>
					<div class="text">
						<div v-html="content[4].text_2_columns_column_2"></div>
						<!-- <h3 v-scroll-reveal="{ delay: 0 }">Support</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">Für Sie da!</h2>
						<p v-scroll-reveal="{ delay: 400 }">Eine gute Software ist jene, die ohne Probleme läuft. Aber auch eine gute Software kann mal einen schlechten Tag haben. Deshalb sind wir für Sie da, wann immer Sie uns brauchen.</p> -->
						<nuxt-link :to="localePath({ name: 'support', hash: '#support' })"><CButton v-scroll-reveal="{ delay: 600 }" text="Support" /></nuxt-link>
						<div class="list">
							<article v-scroll-reveal="{ delay: 300 }">
								<img src="/icon_tacho.svg" alt="" />
								<p>{{ $i18n.locale == 'fr' ? 'Nous réagissons comme vous le souhaitez : rapidement et avec souplesse' : 'Wir reagieren so, wie Sie es sich wünschen: schnell und flexibel.' }}</p>
							</article>
							<article v-scroll-reveal="{ delay: 500 }">
								<img src="/icon_lock.svg" alt="" />
								<p>{{ $i18n.locale == 'fr' ? "Nous parlons d'une manière que vous comprenez : honnêtement et avec compétence" : 'Wir sprechen so, dass Sie uns verstehen: ehrlich und kompetent.' }}</p>
							</article>
							<article v-scroll-reveal="{ delay: 700 }">
								<img style="height: 37px" src="/icon_ribbon.png" alt="" />
								<p>
									{{
										$i18n.locale == 'fr'
											? 'Nous vous traitons comme nous aimerions être traités : de manière amicale, personnelle et simple'
											: 'Wir behandeln Sie so, wie wir es uns auch wünschen: freundlich, persönlich und unkompliziert.'
									}}
								</p>
							</article>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="news" id="news">
			<div class="container">
				<h1>News</h1>
				<br />
				<div class="news-articles" style="position: relative">
					<article v-scroll-reveal="{ delay: 200 }" class="news-article" v-for="(a, i) in news" :key="i">
						<h3>{{ a.acf.datum }}</h3>
						<h2>{{ a.title.rendered }}</h2>
						<div v-html="a.content.rendered" /> -->
		<!-- <div v-if="newsToggled == i" class="more-news">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur expedita dolorum praesentium tenetur, deserunt ex tempora placeat doloremque maiores voluptates eveniet at. Culpa tenetur voluptate
								voluptatibus molestias soluta necessitatibus.
							</p>
						</div> -->
		<!-- <a
							@click="
								if (newsToggled == i) {
									newsToggled = 0
								} else {
									newsToggled = i
								}
							"
							class="more"
							><img style="width: 3rem" src="/arrows_bot.png" alt=""
						/></a> -->
		<!-- </article>
					<div class="lines">
						<hr />
						<hr class="long" />
						<span>2021</span>
						<hr />
						<hr />
						<hr />
						<hr />
						<hr />
						<span>2020</span>
						<hr />
						<hr />
						<hr />
						<hr />
						<nuxt-link to="archiv"><img src="/arrows_bot.png" alt="" /></nuxt-link>
					</div>
				</div>
			</div>
		</div> -->
		<!-- <pre>{{ news }}</pre> -->
		<div class="news" id="news">
			<div class="container">
				<h1>News</h1>
				<div class="news-grid">
					<div>
						<article style="margin-top: 4rem; position: relative">
							<nuxt-link v-if="news[0].content.rendered.length > 750" class="news-link-arrows" :to="localePath({ name: 'news', hash: `#news-0` })"
								><div style="position: absolute; bottom: -3rem; width: 100%; text-align: center"><span class="blue">Mehr</span></div>
							</nuxt-link>
							<h3>{{ formatDate(news[0].acf.datum) }}</h3>
							<nuxt-link :to="localePath({ name: 'news', hash: `#news-0` })">
								<h2>{{ news[0].title.rendered }}</h2>
							</nuxt-link>
							<div class="content" v-html="news[0].content.rendered"></div>
						</article>
						<article style="margin-top: 24rem; position: relative">
							<nuxt-link v-if="news[2].content.rendered.length > 750" class="news-link-arrows" :to="localePath({ name: 'news', hash: `#news-0` })"
								><div style="position: absolute; bottom: -3rem; width: 100%; text-align: center"><span class="blue">Mehr</span></div>
							</nuxt-link>

							<h3>{{ formatDate(news[2].acf.datum) }}</h3>
							<nuxt-link :to="localePath({ name: 'news', hash: `#news-2` })"
								><h2>{{ news[2].title.rendered }}</h2></nuxt-link
							>
							<div class="content" v-html="news[2].content.rendered"></div>
						</article>
					</div>
					<div class="liness">
						<div class="line">
							<hr />
						</div>
						<div class="line">
							<hr />
						</div>
						<div class="line">
							<!-- <span style="top: -1.75rem; left: 15rem">2021</span> -->
							<!-- <hr style="width: 250%" /> -->
							<hr />
						</div>
						<div class="line">
							<hr />
						</div>
						<div class="line">
							<hr />
						</div>
						<div class="line">
							<hr />
						</div>
						<div class="line">
							<!-- <span style="top: -1.75rem; right: 15rem; text-align: right">2021</span>
							<hr style="width: 250%; margin-left: -150%" /> -->
							<hr />
						</div>
						<div class="line">
							<hr />
						</div>
						<div class="line">
							<hr />
						</div>
						<div class="line">
							<hr />
						</div>
						<div class="line">
							<!-- <span style="top: -1.75rem; left: 15rem">2020</span>
							<hr style="width: 250%" /> -->
							<hr />
						</div>
						<div class="line">
							<hr />
						</div>
						<nuxt-link :to="localePath({ name: 'news' })"><img src="/arrows_bot.png" alt="" /></nuxt-link>
					</div>
					<div>
						<article style="margin-top: 24rem; position: relative">
							<nuxt-link v-if="news[1].content.rendered.length > 750" class="news-link-arrows" :to="localePath({ name: 'news', hash: `#news-0` })"
								><div style="position: absolute; bottom: -3rem; width: 100%; text-align: center"><span class="blue">Mehr</span></div>
							</nuxt-link>
							<h3>{{ formatDate(news[1].acf.datum) }}</h3>
							<nuxt-link :to="localePath({ name: 'news', hash: `#news-1` })"
								><h2>{{ news[1].title.rendered }}</h2></nuxt-link
							>
							<div class="content" v-html="news[1].content.rendered"></div>
						</article>
					</div>
					<div class="mobobly">
						<nuxt-link :to="localePath({ name: 'news' })"><img src="/arrows_bot.png" alt="" /></nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<!-- <div>
			{{ content['homepage'].title.rendered }}
		</div>
		<div
			class="module"
			v-for="(m, i) in content['homepage'].acf.modules"
			:key="i"
		>
			<Module :module="m" />
		</div> -->
	</div>
</template>

<script>
import axios from 'axios'
export default {
	async asyncData({ app }) {
		let slug = app.i18n.locale == 'fr' ? 'homepage-fr' : 'homepage'
		let content = await axios.get(`https://admin.conzepta.ch/index.php/wp-json/wp/v2/pages?slug=${slug}`)
		let news = await axios.get(`https://admin.conzepta.ch/index.php/wp-json/wp/v2/news?lang=${app.i18n.locale}`)
		return {
			content: content.data[0].acf.modules,
			eastereggs: content.data[0].acf.easteregg,
			news: news.data.sort(function (a, b) {
				return parseFloat(b.acf.datum) - parseFloat(a.acf.datum)
			}),
		}
	},
	data() {
		return {
			pos: 0,
			newsToggled: 0,
		}
	},
	methods: {
		formatDate(date) {
			let _d = ''
			_d = `${date.substring(6)}.${date.substring(4, 6)}.${date.substring(0, 4)}`
			return _d
		},
		handleScroll() {
			// Your scroll handling here
			// let variable = window.innerHeight / window.scrollY
			// console.log('Window Height: ' + (document.body.clientHeight - window.innerHeight))
			// console.log('Scroll Position: ' + window.scrollY)
			// console.log(window.scrollY / window.innerHeight)
			this.pos = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 50
		},
		scrollDown() {
			window.scrollTo({
				top: 1000,
				behavior: 'smooth',
			})
		},
	},
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
}
</script>

<style lang="sass" scoped>
.news-grid
	display: grid
	position: relative
	gap: 4rem
	grid-template-columns: 1fr 5rem 1fr
	article
		text-align: left
		.news-link-arrows
			@include mobile
				display: none
		.content
			max-height: 250px
			overflow: hidden
		// .content:after
		// 	content: ""
		// 	position: absolute
		// 	top: 0
		// 	bottom: 0
		// 	left: -30px
		// 	right: -30px
		// 	box-shadow: inset white 0 -40px 30px
		@include mobile
			border-bottom: 1px solid $c-gray
			padding-bottom: 1rem
	.line
		position: relative
		margin: 5rem 0
		span
			position: absolute
			font-size: 3rem
			top: 0
.lines
	// position: absolute
	width: 4rem
	left: 50%
	transform: translateX(-50%)
	top: 0
	@include mobile
		display: none
	hr
		height: 1px
		background: black
		border: none
		display: block
		margin-bottom: 5rem
		&.long
			width: 200%
.news-articles
	// display: grid
	// grid-template-columns: repeat(2, 1fr )
	// gap: 4rem
	text-align: left
	article
		.more
			display: none
		width: 40%
		margin: 5rem 0
		&:nth-child(2n)
			margin-left: 58%
		@include mobile
			width: auto
			border-bottom: 1px solid black
			&:nth-child(2n)
				margin-left: auto
		&:first-child
			.more
				display: block
img
	height: auto
.banner-main
	background: $c-blue
	background: linear-gradient(0deg, $c-blue-light 0%, $c-blue 50%)
	height: 100vh
	display: grid
	padding-bottom: 3rem
	z-index: 999
	position: relative
	text-align: center
	@include mobile
		height: calc(100vh - 10rem)
		padding-top: 3rem
	h1
		color: white
		font-weight: 300
	img
		width: 15rem
.intro
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2021/02/home_background.png')
	background-position: center center
	background-size: cover
	background-repeat: no-repeat
	margin-top: -50vh
	z-index: 0
	height: 100vh
	position: relative
	display: grid
	align-items: end
	padding: 20rem 0
	@include mobile
		background: none
		height: auto
		margin-top: auto
		padding-bottom: 4rem
		padding-top: 6rem
	.container
		margin-top: 0
		margin-bottom: 0
		@include mobile
			width: 90%
		h2
			margin-bottom: 0
.since
	height: 120vh
	margin-top: -20rem
	padding-top: 10rem
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/home_background2.png')
	background-position: top right
	background-repeat: no-repeat
	background-size: contain
	position: relative
	display: grid
	align-items: end
	@include mobile
		.container
			width: 90%
			margin: 0 auto
		margin-top: 0
		padding-top: 50vh
		height: auto
		margin-bottom: 8rem
		background-size: 150%
	img
		max-height: 1200px !important
.vorteile
	text-align: center
	margin-bottom: 8rem
	h1
		margin-bottom: 8rem
		@include mobile
			margin-bottom: 4rem
			font-size: 2rem
.support
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2021/01/home_background_support-copy.png')
	background-position: center left
	background-repeat: no-repeat
	height: 50rem
	background-size: contain
	@include mobile
		background: none
	img
		max-height: 700px !important
		top: 40vh !important
	.text
		margin-top: 10rem
		@include mobile
			margin-top: 0rem
		.list
			margin-top: 6rem
			@include mobile
				padding-left: 4rem
			article
				position: relative
				img
					width: 2rem
					height: 2rem
					position: absolute
					left: -3.25rem
					top: .5rem !important
.news
	text-align: center
	// margin-top: -10rem
	padding-top: 10rem
	margin-bottom: 10rem
	.mobobly
		display: none
		width: 4rem
		margin: auto
	@include mobile
		.mobobly
			display: block
		margin-top: 0
		padding-top: 0
		.news-grid
			grid-template-columns: auto
			gap: 0
			.liness
				display: none
			article
				margin-top: 4rem !important
		h1
			margin-bottom: 0
</style>
