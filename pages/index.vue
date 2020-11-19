<template>
	<div>
		<div class="banner-main">
			<div class="container">
				<h1>We make IT happen</h1>
				<img src="/icon_white.png" alt="" />
			</div>
		</div>
		<div class="intro" :style="{ transform: 'translateY(' + pos + 'vh)' }">
			<div class="container">
				<h2>Vorwärts kommen</h2>
				<p>
					Mehr Effizienz und Sicherheit mit <br />
					Software von Conzepta.
				</p>
				<nuxt-link to="/produkte"><CButton text="Produkte" /></nuxt-link>
			</div>
		</div>
		<div class="since">
			<div class="container">
				<h3>Etablierte Lösungen</h3>
				<h2>Seit 1986</h2>
				<p>
					Die Zeichen der Zeit erkennen und <br />
					Lösungen dafür suchen: Das haben unsere <br />
					Gründer vor über 30 Jahren getan.
				</p>
				<nuxt-link to="/wir"><CButton text="Wir" /></nuxt-link>
			</div>
		</div>
		<div class="vorteile">
			<div class="container">
				<h1>Vorteile verschaffen mit Conzepta</h1>
				<div class="grid cols-3">
					<article>
						<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_puzzle.png" alt="" />
						<h2>Adaption</h2>
						<p>Wir bieten keine Pakete ab Stange, sondern individuelle Lösungen und persönlichen Support.</p>
					</article>
					<article>
						<img style="height: 234px; display: block" src="" alt="" />
						<h2>Qualität</h2>
						<p>Wir liefern Schweizer Qualitätsprodukte aus Eigenentwicklung.</p>
					</article>
					<article>
						<img src="https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/icon_grabber.png" alt="" />
						<h2>Modern</h2>
						<p>Wir können Ihre Zukunft nicht vorhersehen. Aber wir können sie programmieren.</p>
					</article>
				</div>
				<CButton style="margin-top: 8rem" text="Mehr" />
			</div>
		</div>
		<div class="support">
			<div class="container">
				<div class="grid cols-2">
					<span></span>
					<div class="text">
						<h3>Support</h3>
						<h2>Für Sie da!</h2>
						<p>
							Eine gute Software ist jene, die ohne Probleme läuft. Das garantieren wir Ihnen. Deshalb sind wir für Sie da – wann immer
							Sie uns brauchen
						</p>
						<CButton text="Support" />
						<div class="list">
							<article>
								<img src="/icon_tacho.svg" alt="" />
								<p>Wir reagieren so, wie Sie es sich wünschen: schnell und flexibel</p>
							</article>
							<article>
								<img src="/icon_lock.svg" alt="" />
								<p>Wir behandeln Sie so, wie wir selber am liebsten arbeiten: unkompliziert, aber immer diskret.</p>
							</article>
							<article>
								<img src="" alt="" />
								<p>
									Wir sprechen so, dass Sie uns verstehen: Einfach, wenn etwas nicht klar ist – kompetent, wenn es ins Detail geht.
								</p>
							</article>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="news">
			<div class="container">
				<h1>News</h1>
				<br />
				<h2 style="font-style: italic; margin-bottom: 8rem">keine Einträge gefunden</h2>
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
			content: store.state.pages,
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
img
	height: auto
.banner-main
	background: $c-blue
	background: linear-gradient(0deg, $c-blue-light 0%, $c-blue 100%)
	height: 80vh
	display: grid
	padding-bottom: 3rem
	z-index: 999
	position: relative
	text-align: center
	h1
		color: white
		font-weight: 300
	img
		width: 10rem
.intro
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/home_background.png')
	background-position: center center
	background-size: cover
	background-repeat: no-repeat
	margin-top: -50vh
	z-index: -100
	height: 120vh
	position: relative
	display: grid
	align-items: end
	padding: 10rem 0
	.container
		margin-top: 0
		margin-bottom: 0
		h2
			margin-bottom: 0
.since
	height: 150vh
	margin-top: -10rem
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/home_background2.png')
	background-position: top center
	background-repeat: no-repeat
	position: relative
	display: grid
	align-items: end
	img
		max-height: 1200px !important
.vorteile
	text-align: center
	margin-bottom: 8rem
	h1
		margin-bottom: 8rem
.support
	background-image: url('https://admin.conzepta.rechtwinklig.ch/wp-content/uploads/2020/11/home_background_support-copy.png')
	background-position: center left
	background-repeat: no-repeat
	height: 50rem
	background-size: contain
	img
		max-height: 700px !important
		top: 40vh !important
	.text
		margin-top: 10rem
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
</style>
