<template>
	<div>
		<div style="padding: 4rem 0 4rem; background: #e7e9ec" id="support">
			<div id="kontaktformular" class="container">
				<h3>Direkt</h3>
				<h1>Kontakt</h1>
				<div v-if="!sent">
					<form action="" class="grid cols-2" style="gap: 2rem">
						<input v-model="form.vorname" v-scroll-reveal="{ delay: 200 }" style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%" type="text" placeholder="Vorname" />
						<input v-model="form.nachname" v-scroll-reveal="{ delay: 400 }" style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%" type="text" placeholder="Nachname" />
						<input v-model="form.email" v-scroll-reveal="{ delay: 600 }" style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%" type="text" placeholder="Email" />
						<select v-scroll-reveal="{ delay: 800 }" :style="[selectedAnliegen == 'anliegen' ? { color: 'gray' } : { color: 'black' }]" name="anliegen" id="" v-model="selectedAnliegen">
							<option value="anliegen" selected>Anliegen</option>
							<option value="all">Allgemein</option>
							<!-- <option value="bew">Bewerbung</option> -->
							<option value="int">InterLink</option>
							<option value="lex">Lexica</option>
							<option value="par">ParkingPad</option>
							<option value="pp">Police Pad</option>
							<option value="tac">TachiFox</option>
							<option value="techprob">Technische Probleme</option>
						</select>
						<!-- <input
					style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
					type="text"
					placeholder="Anliegen"
				/> -->
						<textarea placeholder="Ihre Mitteilung" v-scroll-reveal="{ delay: 1000 }" style="border: blue 1px solid; border-radius: 5px; width: 100%; grid-column: span 2" name="" id="" cols="30" rows="10" v-model="textArea"></textarea>
					</form>
					<div class="grid cols-3 small-gap" style="align-items: center; margin-top: 2rem">
						<span style="padding: 0.5rem 2rem 0.5rem 0.5rem; border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%">
							<input v-model="robot" style="padding: 0; height: 1rem; width: 1rem; border: blue 1px solid; border-radius: 3px; margin-right: 10px; vertical-align: text-top" type="checkbox" name="" id="" />
							Ich bin kein Roboter
						</span>
						<span style="padding: 0.5rem 2rem 0.5rem 0.5rem; border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%">
							<input style="padding: 0; height: 1rem; width: 1rem; border: blue 1px solid; border-radius: 3px; margin-right: 10px; vertical-align: text-top" type="checkbox" name="" id="" />
							Kopie an mich senden
						</span>
						<CButton text="Senden" @click.native="send" />
					</div>
					<div v-if="error">
						<p style="color: red">{{ error }}</p>
					</div>
				</div>
				<div v-else>
					<p style="font-weight: normal">Vielen Dank für Ihre Nachricht. Wir werden uns gerne bei Ihnen zurückmelden.</p>
				</div>
			</div>
			<div class="container" style="margin-top: 8rem">
				<p>
					Conzepta Team AG <br />
					Allmendstrasse 54 <br />
					3014 Bern
				</p>
				<p>
					<span style="display: inline-block; width: 100px">Email:</span><a href="mailto:team@conzepta.ch">team@conzepta.ch</a><br />
					<span style="display: inline-block; width: 100px">Telefon:</span><a href="tel:+413486020">+41 348 60 20</a>
				</p>
			</div>
		</div>
		<div class="container" style="margin-top: 8rem">
			<div class="grid cols-2">
				<div>
					<div>
						<h3 v-scroll-reveal="{ delay: 0 }">In 10 Minuten</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">Mit dem ÖV</h2>
						<br />
						<p v-scroll-reveal="{ delay: 400 }">
							<ul style="padding-left: 2rem;">
								<li style="margin-bottom: 1rem;">Am Bahnhof Bern auf den grossen Platz</li>
								<li style="margin-bottom: 1rem;">Bus Nr. 20 Richtung Bern Wankdorf</li>
								<li style="margin-bottom: 1rem;">Aussteigen bei Wyleregg</li>
								<li style="margin-bottom: 1rem;">Der Busrichtung nachlaufen</li>
								<li style="margin-bottom: 1rem;">Bei der Kreuzung mit der Allmendstrasse rechts einbiegen</li>
								<li style="margin-bottom: 1rem;">Die Conzepta befindet sich auf der linken Seite</li>
							</ul>
						</p>
					</div>
				</div>
				<div>
					<div>
						<h3 v-scroll-reveal="{ delay: 0 }">Auf schnellstem Weg</h3>
						<h2 v-scroll-reveal="{ delay: 200 }">Mit dem Auto</h2>
						<br />
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
				</div>
			</div>
			<br />
			<div style="margin-top: 4rem">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.0179833819807!2d7.448399716028299!3d46.96133667914717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39edef291939%3A0x5d47712ae8b9fa11!2sconzepta%20team%20ag!5e0!3m2!1sde!2sch!4v1619792352890!5m2!1sde!2sch" width="960" height="640" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ query }) {
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
		}
	},
	data() {
		return {
			// selectedAnliegen: '',
			// textArea: '',
		}
	},
	mounted() {
		// if (this.$route.params.text == 'huhu') {
		// 	console.log('HUHU')
		// }
	},
	methods: {
		send() {
			if (this.form.vorname) {
				if (this.form.nachname) {
					if (this.form.email) {
						if (this.textArea) {
							if (this.robot) {
								if (this.selectedAnliegen) {
									this.sent = true
								}
							} else {
								this.error = 'Bitte wählen Sie die captcha-Checkbox an'
							}
						} else {
							this.error = 'Bitte geben Sie eine Nachricht ein'
						}
					} else {
						this.error = 'Bitte geben Sie eine gültige Email-Adresse an'
					}
				} else {
					this.error = 'Bitte geben Sie einen gültigen Nachnamen an'
				}
			} else {
				this.error = 'Bitte geben Sie einen gültigen Vornamen an'
			}
		},
	},
}
</script>

<style lang="sass" scoped>
#kontaktformular
	padding-top: 8rem
	@include mobile
		padding-top: 0
.tvb
	@include mobile
		a
			display: block
			width: 100%
			box-sizing: border-box
			text-align: center
select
	border: blue 1px solid
	border-radius: 5px
	box-sizing: border-box
	margin: 0
	width: 100%
	background-color: white
input, select
	@include mobile
		grid-column: span 2
iframe
	@include mobile
		max-width: 100% !important
</style>
