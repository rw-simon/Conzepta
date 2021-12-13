<template>
	<div class="page-contact">
		<div style="padding: 4rem 0 4rem; background: #e7e9ec" id="support">
			<div id="kontaktformular" class="container">
				<h3>{{ $i18n.locale == 'fr' ? 'Direct' : 'Direkt' }}</h3>
				<h1>{{ $i18n.locale == 'fr' ? 'Contact //' : 'Kontakt //' }}</h1>
				<!-- WP Forms -->
				<div class="wp-forms">
					<div v-html="wpForms"></div>
					<div id="recaptcha-container" style="padding-bottom: 20px">
						<recaptcha></recaptcha>
					</div>
				</div>
			</div>
			<div class="container" style="margin-top: 8rem">
				<p>Conzepta Team AG <br />Allmendstrasse 54 <br />3014 Bern</p>
				<p>
					<span style="display: inline-block; width: 100px">Email:</span><a href="mailto:team@conzepta.ch">team@conzepta.ch</a><br />
					<span style="display: inline-block; width: 100px">Telefon:</span><a href="tel:+41313486020">+41 031 348 60 20</a>
				</p>
			</div>
		</div>

		<div class="container" style="margin-top: 8rem">
			<div class="grid cols-2" v-if="$i18n.locale == 'de'">
				<div>
					<div>
						<h3 v-scroll-reveal="{ delay: 0 }">In 10 Minuten</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">Mit dem ÖV</h2>
						<br />
						<div class="wegbeschreibung">
							<div class="item">
								<img src="/nav/01_bahnhofsplatz.svg" alt="" />
								<p>Am Bahnhof Bern auf den grossen Platz</p>
							</div>
							<div class="item">
								<img src="/nav/02_20.svg" alt="" />
								<p>Bus Nr. 20 Richtung Bern Wankdorf</p>
							</div>
							<div class="item">
								<img src="/nav/03_bustueren.svg" alt="" />
								<p>Aussteigen bei Wyleregg</p>
							</div>
							<div class="item">
								<img src="/nav/04_busrichtung.svg" alt="" />
								<p>Der Busrichtung nachlaufen</p>
							</div>
							<div class="item">
								<img src="/nav/05_rechts.svg" alt="" />
								<p>Bei der Kreuzung mit der Allmendstrasse rechts einbiegen</p>
							</div>
							<div class="item">
								<img src="/nav/06_fahne.svg" alt="" />
								<p>Die Conzepta befindet sich auf der linken Seite</p>
							</div>
						</div>
						<!-- <p v-scroll-reveal="{ delay: 400 }">
              <ul style="padding-left: 2rem;">
                <li style="margin-bottom: 1rem;">Am Bahnhof Bern auf den grossen Platz</li>
                <li style="margin-bottom: 1rem;">Bus Nr. 20 Richtung Bern Wankdorf</li>
                <li style="margin-bottom: 1rem;">Aussteigen bei Wyleregg</li>
                <li style="margin-bottom: 1rem;">Der Busrichtung nachlaufen</li>
                <li style="margin-bottom: 1rem;">Bei der Kreuzung mit der Allmendstrasse rechts einbiegen</li>
                <li style="margin-bottom: 1rem;">Die Conzepta befindet sich auf der linken Seite</li>
              </ul>
            </p> -->
					</div>
				</div>
				<!-- <div>
					<div>
						<h3 v-scroll-reveal="{ delay: 0 }">Auf schnellstem Weg</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">Mit dem Auto</h2>
						<br />
						<div class="wegbeschreibung">
							<div class="item">
								<img src="/nav/07_37.svg" alt="" />
								<p>Ausfahrt 37 – Bern Wankdorf</p>
							</div>
							<div class="item">
								<img src="/nav/08_linkefahrbahn.svg" alt="" />
								<p>Linke Fahrbahn benutzen</p>
							</div>
							<div class="item">
								<img src="/nav/05_rechts.svg" alt="" />
								<p>Im (Untergrund-)Kreisel die erste Ausfahrt (rechts)</p>
							</div>
							<div class="item">
								<img src="/nav/09_geradeaus.svg" alt="" />
								<p>Alles geradeaus</p>
							</div>
							<div class="item">
								<img src="/nav/09_geradeaus.svg" alt="" />
								<p>Bei der coop Pronto Tankstelle über die Kreuzung fahren (Achtung Ampel)</p>
							</div>
							<div class="item">
								<img src="/nav/10_links.svg" alt="" />
								<p>In die zweite Seitenstrasse (nach FARO) links einbiegen</p>
							</div>
							<div class="item">
								<img src="/nav/06_fahne.svg" alt="" />
								<p>Die Conzepta befindet sich auf der linken Seite</p>
							</div>
						</div>
						<p v-scroll-reveal="{ delay: 400 }">
							<ul style="padding-left: 2rem;">
								<li style="margin-bottom: 1rem">Ausfahrt 37 – Bern Wankdorf</li>
								<li style="margin-bottom: 1rem">Linke Fahrbahn benutzen</li>
								<li style="margin-bottom: 1rem">Im (Untergrund-)Kreisel die erste Ausfahrt (rechts)</li>
								<li style="margin-bottom: 1rem">Alles geradeaus</li>
								<li style="margin-bottom: 1rem">Bei der coop Pronto Tankstelle über die Kreuzung fahren (Achtung Ampel)</li>
								<li style="margin-bottom: 1rem">In die nächste Seitenstrasse Links einbiegen</li>
								<li style="margin-bottom: 1rem">In die zweite Seitenstrasse (nach FARO) links einbiegen</li>
							</ul>
						</p>
					</div>
				</div> -->
			</div>
			<br />
			<div style="margin-top: 4rem">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.0179833819807!2d7.448399716028299!3d46.96133667914717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39edef291939%3A0x5d47712ae8b9fa11!2sconzepta%20team%20ag!5e0!3m2!1sde!2sch!4v1619792352890!5m2!1sde!2sch"
					width="960"
					height="640"
					style="border: 0"
					allowfullscreen=""
					loading="lazy"
				></iframe>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'kontakt',
	nuxtI18n: {
		paths: {
			fr: '/contact', // -> accessible at /fr/a-propos
			de: '/kontakt', // -> accessible at /es/sobre
		},
	},
	async asyncData({ query, app }) {
		const localeQuery = '?locale=' + app.i18n.locale
		const parseResultData = (res) => {
			let html = res.data

			// For testing purpose;
			// TODO: Parse with reg (ID)
			html = html.replace(`action="/wp_forms.php${localeQuery}#wpcf7-f678-o1"`, `action="https://admin.conzepta.ch/#wpcf7-f678-o1"`)
			html = html.replace(`action="/wp_forms.php${localeQuery}#wpcf7-f680-o1"`, `action="https://admin.conzepta.ch/#wpcf7-f680-o1"`)

			return {
				data: html,
			}
		}

		const { data } = await axios
			.get('https://admin.conzepta.ch/wp_forms.php' + localeQuery)
			.then(parseResultData)
			.catch((r) => {
				return { data: '' }
			})

		return {
			textArea: query.text,
			selectedAnliegen: query.anliegen || 'anliegen',
			sent: false,
			robot: false,
			form: {
				vorname: '',
				nachname: '',
				email: '',
			},
			error: '',
			submitting: false,
			isSubmitted: false,
			wpForms: data,
		}
	},
	async mounted() {
		try {
			await this.$recaptcha.init()
		} catch (e) {
			console.error(e)
		}

		console.log(this)

		const $recaptchaContainer = document.getElementById('recaptcha-container')

		const $target = document.querySelector('.wpcf7 form .wpcf7-submit')

		$target.before($recaptchaContainer)

		const formWpcf = document.querySelector('.wpcf7 form')
		formWpcf.addEventListener('submit', async (e) => {
			// Prevent the default form submit
			e.preventDefault()

			// Store reference to form to make later code easier to read
			const form = e.target
			let isValid = true
			;[...formWpcf.querySelectorAll('form *[required]'), ...formWpcf.querySelectorAll('form *[aria-required="true"]')].map((input) => {
				if (!input.value) {
					isValid = false
					console.log(input)
				}
			})

			if (!isValid) {
				return alert(this.$i18n.locale == 'fr' ? 'Veuillez remplir tous les champs' : 'Bitte füllen Sie alle Felder aus')
			}

			// Verify fields

			try {
				const token = await this.$recaptcha.getResponse()
				//console.log('ReCaptcha token:', token , this.$recaptcha);

				// Post data using the Fetch API
				console.log('Sending data to:', form.action)
				fetch(form.action, { method: form.method, body: new FormData(form) })
					.then((res) => res.text())
					// .then((text) => new DOMParser().parseFromString(text, "text/html"))
					.then((text) => {
						if (!text) {
							return
						}

						// Create result message container and copy HTML from doc
						const result = document.createElement('div')
						result.innerHTML = `<h2>${text}</h2>`
						window.scrollTo(0, 0)

						// Replace the form with the response children
						form.parentNode.replaceChild(result, form)
					})

				// at the end you need to reset recaptcha
				await this.$recaptcha.reset()
			} catch (error) {
				console.log('Login error:', error)
				alert(this.$i18n.locale == 'fr' ? "ReCaptcha n'est pas valide" : 'ReCaptcha ist nicht gültig')
			}
		})
	},
	methods: {},
}
</script>

<style lang="sass">
.wegbeschreibung
	margin-left: -4rem
	.item
		display: grid
		grid-template-columns: 2rem 1fr
		grid-template-rows: 4rem
		gap: 2rem
		align-items: center
		p
			margin: 0
#kontaktformular
	padding-top: 8rem
	@include mobile
		padding-top: 0
.page-contact .tvb
	@include mobile
		a
			display: block
			width: 100%
			box-sizing: border-box
			text-align: center
.page-contact select
	border: blue 1px solid
	border-radius: 5px
	box-sizing: border-box
	margin: 0
	width: 100%
	background-color: white
.page-contact input.wpcf7-form-control,
.page-contact textarea.wpcf7-form-control
	border: blue 1px solid
	border-radius: 5px
	box-sizing: border-box
	margin: 0
	width: 100%
	visibility: visible
	opacity: 1
	transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
	transition: opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s
.wpcf7-submit
	-webkit-appearance: none
	-moz-appearance: none
	appearance: none
	padding: .5rem 2rem
	margin: .5rem 0
	background: #004dff
	display: inline-block
	border: none
	color: #fff
	font-family: "Arboria",sans-serif
	cursor: pointer
.page-contact input, .page-contact select
	@include mobile
		grid-column: span 2
.page-contact iframe
	@include mobile
		max-width: 100% !important
</style>
