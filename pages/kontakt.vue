<template>
	<div>
		<div style="padding: 4rem 0 4rem; background: #e7e9ec" id="support">
			<div id="kontaktformular" class="container">
				<h3>{{ $i18n.locale == 'fr' ? 'Direct' : 'Direkt' }}</h3>
				<h1>{{ $i18n.locale == 'fr' ? 'Contact' : 'Kontakt' }}</h1>
				<div v-if="!sent">
					<form class="grid cols-2" style="gap: 2rem">
						<input
							v-model="form.vorname"
							v-scroll-reveal="{ delay: 200 }"
							style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
							type="text"
							:placeholder="$i18n.locale == 'fr' ? 'Prénom' : 'Vorname'"
						/>
						<input
							v-model="form.nachname"
							v-scroll-reveal="{ delay: 400 }"
							style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
							type="text"
							:placeholder="$i18n.locale == 'fr' ? 'Nom de famille' : 'Nachname'"
						/>
						<input
							v-model="form.email"
							v-scroll-reveal="{ delay: 600 }"
							style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
							type="text"
							:placeholder="$i18n.locale == 'fr' ? 'Email' : 'Email'"
						/>
						<select v-scroll-reveal="{ delay: 800 }" :style="[selectedAnliegen == 'anliegen' ? { color: 'gray' } : { color: 'black' }]" name="anliegen" id="" v-model="selectedAnliegen">
							<option value="anliegen" selected>{{ $i18n.locale == 'fr' ? 'Thèmes' : 'Anliegen' }}</option>
							<option value="Allgemein">{{ $i18n.locale == 'fr' ? 'Généralités' : 'Allgemein' }}</option>
							<!-- <option value="bew">Bewerbung</option> -->
							<option value="Interlink">InterLink</option>
							<option value="Lexica">Lexica</option>
							<option value="ParkingPad">ParkingPad</option>
							<option value="PolicePad">PolicePad</option>
							<option value="TachiFox">TachiFox</option>
							<option value="Technische Probleme">{{ $i18n.locale == 'fr' ? 'Postulation' : 'Technische Probleme' }}</option>
						</select>
						<!-- <input
					style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
					type="text"
					placeholder="Anliegen"
				/> -->
						<textarea
							:placeholder="$i18n.locale == 'fr' ? 'Votre message' : 'Ihre Mitteilung'"
							v-scroll-reveal="{ delay: 1000 }"
							style="border: blue 1px solid; border-radius: 5px; width: 100%; grid-column: span 2"
							name=""
							id="textarea"
							cols="30"
							rows="10"
							v-model="textArea"
						></textarea>
					</form>
					<div class="grid cols-3 small-gap" style="align-items: center; margin-top: 2rem">
						<span style="padding: 0.5rem 2rem 0.5rem 0.5rem; border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%">
							<input v-model="robot" style="padding: 0; height: 1rem; width: 1rem; border: blue 1px solid; border-radius: 3px; margin-right: 10px; vertical-align: text-top" type="checkbox" name="" id="" />
							{{ $i18n.locale == 'fr' ? 'Je ne suis pas un robot' : 'Ich bin kein Roboter' }}
						</span>
						<span style="padding: 0.5rem 2rem 0.5rem 0.5rem; border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%">
							<input style="padding: 0; height: 1rem; width: 1rem; border: blue 1px solid; border-radius: 3px; margin-right: 10px; vertical-align: text-top" type="checkbox" name="" id="" />
							{{ $i18n.locale == 'fr' ? 'M’envoyer une copie' : 'Kopie an mich senden' }}
						</span>
						<CButton @click.native="registerForm" :text="$i18n.locale == 'fr' ? 'Envoyer' : 'Senden'" />
					</div>
					<div v-if="error">
						<p style="color: red">{{ error }}</p>
					</div>
				</div>
				<div v-else>
					<p style="font-weight: normal">
						{{ $i18n.locale == 'de' ? 'Vielen Dank für Ihre Nachricht. Wir werden uns gerne bei Ihnen zurückmelden.' : 'Merci pour votre demande. Nous traiterons votre demande dans les meilleurs délais.' }}
					</p>
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
					<span style="display: inline-block; width: 100px">Telefon:</span><a href="tel:+41313486020">+41 (0)31 348 60 20</a>
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
				<div>
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
						<!-- <p v-scroll-reveal="{ delay: 400 }">
							<ul style="padding-left: 2rem;">
								<li style="margin-bottom: 1rem">Ausfahrt 37 – Bern Wankdorf</li>
								<li style="margin-bottom: 1rem">Linke Fahrbahn benutzen</li>
								<li style="margin-bottom: 1rem">Im (Untergrund-)Kreisel die erste Ausfahrt (rechts)</li>
								<li style="margin-bottom: 1rem">Alles geradeaus</li>
								<li style="margin-bottom: 1rem">Bei der coop Pronto Tankstelle über die Kreuzung fahren (Achtung Ampel)</li>
								<li style="margin-bottom: 1rem">In die nächste Seitenstrasse Links einbiegen</li>
								<li style="margin-bottom: 1rem">In die zweite Seitenstrasse (nach FARO) links einbiegen</li>
							</ul>
						</p> -->
					</div>
				</div>
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
			submitting: false,
			isSubmitted: false,
		}
	},
	mounted() {
		// if (this.$route.params.text == 'huhu') {
		// 	console.log('HUHU')
		// }
	},
	methods: {
		async registerForm() {
			if (this.form.vorname) {
				if (this.form.nachname) {
					if (this.form.email) {
						if (this.textArea) {
							if (this.robot) {
								if (this.selectedAnliegen) {
									this.submitting = true
									try {
										// await this.$axios.$post('/mail/send', {
										// 	config: 'to-conz',
										// 	from: 'Conzepta <info@conzepta.ch>',
										// 	subject: 'Kopie Ihrer Anfrage Kontaktformular Conzepta',
										// 	text: 'Vielen Dank für Ihre Anfrage. Wir werden Ihre Anliegen so schnell wie möglich bearbeiten. Freundliche Grüsse, Conzepta',
										// 	html: '<h1>Vielen Dank für Ihre Anfrage</h1><p> Wir werden Ihre Anliegen so schnell wie möglich bearbeiten.</p><p>Freundliche Grüsse<br />Conzepta</p>',
										// })
										await this.$axios.$post('/mail/send', {
											config: 'to-conz',
											from: 'Conzepta <info@rechtwinklig.ch>',
											subject: 'Neue Nachricht via Kontaktformular',
											text: `Von: ${this.form.vorname} ${this.form.nachname} (${this.form.email}). Nachricht: ${this.textArea}`,
											html: '<h1>Neue Nachricht via Kontaktformular</h1><h3>' + this.selectedAnliegen + '</h3><p>Von: ' + this.form.vorname + ' ' + this.form.nachname + '</p><p>' + this.textArea + '</p>',
										})
										// await this.$axios.$post('', {
										// 	vorname: ' ', //this.form.vorname || ' ',
										// 	nachname: ' ', //this.form.name || ' ',
										// 	email: ' ', //this.form.email || ' ', // String
										// 	anliegen: ' ', //this.selectedAnliegen || ' ', // Array [{name: '', date: '', time: '', place: ''}, …]
										// 	nachricht: ' ', //this.textArea || ' ', // Array [{name: '', date: '', time: '', place: ''}, …]
										// })
										await new Promise((resolve) => setTimeout(resolve, 2500))
										this.submitting = false
										this.isSubmitted = true
										this.sent = true
									} catch (err) {
										this.submitting = false
										console.log(err)
									}
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
