<template>
	<div>
		<div class="banner-main">
			<div class="container" style="width: auto">
				<!-- <h1 v-scroll-reveal>{{ content.title.rendered }}</h1> -->
				<img v-scroll-reveal="{ delay: 200 }" src="/icon_white.png" alt="" />
				<div v-scroll-reveal="{ delay: 400 }" style="width: 64px; text-align: center; margin: auto; margin-top: 5rem; margin-bottom: -5rem">
					<img src="/arrows.png" alt="" />
				</div>
			</div>
		</div>
		<div class="intro">
			<!-- :style="{ transform: 'translateY(' + pos + 'vh)' }"> -->
			<div class="container">
				<h2 v-scroll-reveal>Vorwärts kommen</h2>
				<p v-scroll-reveal="{ delay: 200 }">
					Mehr Effizienz und Sicherheit mit <br />
					Software von Conzepta.
				</p>
				<nuxt-link style="z-index: 99999999; position: relative" v-scroll-reveal="{ delay: 400 }" to="/produkte"><CButton text="Produkte" /></nuxt-link>
			</div>
		</div>
		<div class="since">
			<div class="container">
				<h3 v-scroll-reveal>Etablierte Lösungen</h3>
				<h2 v-scroll-reveal="{ delay: 200 }">Seit 1986</h2>
				<p v-scroll-reveal="{ delay: 400 }">
					Die Zeichen der Zeit erkennen und <br />
					Lösungen dafür suchen: Das haben unsere <br />
					Gründer vor über 30 Jahren getan.
				</p>
				<nuxt-link v-scroll-reveal="{ delay: 600 }" to="/wir"><CButton text="Wir" /></nuxt-link>
			</div>
		</div>
		<div class="vorteile">
			<div class="container">
				<h1 v-scroll-reveal="{ delay: 0 }">Vorteile verschaffen mit Conzepta</h1>
				<div v-scroll-reveal="{ delay: 200 }" class="grid cols-3 small-gap">
					<article>
						<img v-scroll-reveal="{ delay: 300 }" src="/grid1.png" alt="" />
						<h2 v-scroll-reveal="{ delay: 400 }">Adaption</h2>
						<p style="padding: 0 2rem; box-sizing: border-box" v-scroll-reveal="{ delay: 500 }">Wir bieten keine Pakete ab Stange, sondern individuelle Lösungen und persönlichen Support.</p>
					</article>
					<article>
						<img v-scroll-reveal="{ delay: 500 }" src="/grid2.png" alt="" />
						<h2 v-scroll-reveal="{ delay: 600 }">Qualität</h2>
						<p style="padding: 0 2rem; box-sizing: border-box" v-scroll-reveal="{ delay: 700 }">Wir liefern Schweizer Qualitätsprodukte aus Eigenentwicklung.</p>
					</article>
					<article>
						<img v-scroll-reveal="{ delay: 700 }" src="/grid3.png" alt="" />
						<h2 v-scroll-reveal="{ delay: 800 }">Modern</h2>
						<p style="padding: 0 2rem; box-sizing: border-box" v-scroll-reveal="{ delay: 900 }">Wir können Ihre Zukunft nicht vorhersehen. Aber wir können sie programmieren.</p>
					</article>
				</div>
				<nuxt-link to="/wir#unser-angebot"><CButton style="margin-top: 3rem" text="Mehr" /></nuxt-link>
			</div>
		</div>
		<div class="support">
			<div class="container">
				<div class="grid cols-2">
					<span></span>
					<div class="text">
						<h3 v-scroll-reveal="{ delay: 0 }">Support</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">Für Sie da!</h2>
						<p v-scroll-reveal="{ delay: 400 }">
							Eine gute Software ist jene, die ohne Probleme läuft. Aber auch eine gute Software kann mal einen schlechten Tag haben. Deshalb sind wir für Sie da, wann immer Sie uns brauchen. Das garantieren wir Ihnen.
						</p>
						<nuxt-link to="/support#support"><CButton v-scroll-reveal="{ delay: 600 }" text="Support" /></nuxt-link>
						<div class="list">
							<article v-scroll-reveal="{ delay: 300 }">
								<img src="/icon_tacho.svg" alt="" />
								<p>Wir reagieren so, wie Sie es sich wünschen: schnell und flexibel</p>
							</article>
							<article v-scroll-reveal="{ delay: 500 }">
								<img src="/icon_lock.svg" alt="" />
								<p>Wir sprechen so, dass Sie uns verstehen: ehrlich und kompetent.</p>
							</article>
							<article v-scroll-reveal="{ delay: 700 }">
								<img style="height: 37px" src="/icon_ribbon.png" alt="" />
								<p>Wir behandeln Sie so, wie wir es uns auch wünschen: freundlich, persönlich und unkompliziert.</p>
							</article>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="news" id="news">
			<div class="container">
				<h1>News</h1>
				<br />
				<div class="news-articles" style="position: relative">
					<article v-scroll-reveal="{ delay: 200 }" class="news-article" v-for="(a, i) in news" :key="i">
						<h3>{{ a.acf.datum }}</h3>
						<h2>{{ a.title.rendered }}</h2>
						<div v-html="a.content.rendered" />
					</article>
					<div class="lines">
						<hr />
						<hr />
						<hr />
						<hr />
						<hr />
						<hr />
						<hr />
						<hr />
						<hr />
						<hr />
						<hr />
						<nuxt-link to="archiv"><img src="/arrows_bot.png" alt="" /></nuxt-link>
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
export default {
	async asyncData({ store }) {
		return {
			content: store.state.pages['homepage'],
			news: store.state.news,
		}
	},
	data() {
		return {
			pos: 0,
		}
	},
	methods: {
		handleScroll() {
			// Your scroll handling here
			// let variable = window.innerHeight / window.scrollY
			// console.log('Window Height: ' + (document.body.clientHeight - window.innerHeight))
			// console.log('Scroll Position: ' + window.scrollY)
			// console.log(window.scrollY / window.innerHeight)
			this.pos = (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 50
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
.lines
	position: absolute
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
.news-articles
	// display: grid
	// grid-template-columns: repeat(2, 1fr )
	// gap: 4rem
	text-align: left
	article
		width: 40%
		margin: 5rem 0
		&:nth-child(2n)
			margin-left: 58%
		@include mobile
			width: auto
			&:nth-child(2n)
				margin-left: auto
img
	height: auto
.banner-main
	background: $c-blue
	background: linear-gradient(0deg, $c-blue-light 0%, $c-blue 50%)
	height: 80vh
	display: grid
	padding-bottom: 3rem
	z-index: 999
	position: relative
	text-align: center
	@include mobile
		height: 60vh
		padding-top: 3rem
	h1
		color: white
		font-weight: 300
	img
		width: 15rem
.intro
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2021/01/home_background_1.png')
	background-position: center center
	background-size: cover
	background-repeat: no-repeat
	margin-top: -50vh
	z-index: 0
	height: 120vh
	position: relative
	display: grid
	align-items: end
	padding: 10rem 0
	@include mobile
		background: none
		height: auto
		margin-top: auto
		padding-bottom: 4rem
	.container
		margin-top: 0
		margin-bottom: 0
		@include mobile
			width: 90%
		h2
			margin-bottom: 0
.since
	height: 150vh
	margin-top: -20rem
	padding-top: 10rem
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/home_background2.png')
	background-position: top right
	background-repeat: no-repeat
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
	margin-top: -10rem
	padding-top: 10rem
	margin-bottom: 10rem
	@include mobile
		margin-top: 0
		padding-top: 0
		h1
			margin-bottom: 0
</style>
