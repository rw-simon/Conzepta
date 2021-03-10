<template>
	<div>
		<div style="padding: 4rem 0 12rem; background: #e7e9ec" id="support">
			<div id="kontaktformular" style="padding-top: 8rem" class="container">
				<h3>Direkt</h3>
				<h1>Kontakt</h1>
				<form action="" class="grid cols-2" style="gap: 2rem">
					<input v-scroll-reveal="{ delay: 200 }" style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%" type="text" placeholder="Vorname" />
					<input v-scroll-reveal="{ delay: 400 }" style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%" type="text" placeholder="Nachname" />
					<input v-scroll-reveal="{ delay: 600 }" style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%" type="text" placeholder="Email" />
					<select v-scroll-reveal="{ delay: 800 }" :style="[selectedAnliegen == '' ? { color: 'gray' } : { color: 'black' }]" name="anliegen" id="" v-model="selectedAnliegen">
						<option value="" hidden>Anliegen</option>
						<option value="techprob">Technische Probleme</option>
						<option value="pp">Police Pad</option>
						<option value="lex">Lexica</option>
						<option value="int">InterLink</option>
						<option value="tac">TachiFox</option>
						<option value="par">ParkingPad</option>
						<option value="bew">Bewerbung</option>
						<option value="all">Allgemein</option>
					</select>
					<!-- <input
					style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
					type="text"
					placeholder="Anliegen"
				/> -->
					<textarea v-scroll-reveal="{ delay: 1000 }" style="border: blue 1px solid; border-radius: 5px; width: 100%; grid-column: span 2" name="" id="" cols="30" rows="10" v-model="textArea"></textarea>
				</form>
				<div class="grid cols-3 small-gap" style="align-items: center; margin-top: 2rem">
					<CButton text="Senden" />
					<span style="padding: 0.5rem 2rem 0.5rem 0.5rem; border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%">
						<input style="padding: 0; height: 1rem; width: 1rem; border: blue 1px solid; border-radius: 3px; margin-right: 10px; vertical-align: text-top" type="checkbox" name="" id="" />
						Ich bin kein Roboter
					</span>
					<span style="padding: 0.5rem 2rem 0.5rem 0.5rem; border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%">
						<input style="padding: 0; height: 1rem; width: 1rem; border: blue 1px solid; border-radius: 3px; margin-right: 10px; vertical-align: text-top" type="checkbox" name="" id="" />
						Kopie an mich senden
					</span>
				</div>
			</div>
		</div>
		<div class="container" style="margin-top: 8rem">
			<div class="grid cols-2">
				<div>
					<p v-scroll-reveal="{ delay: 0 }">Conzepta Team<br />Allmendstrasse 54<br />3014 Bern</p>
					<br />
					<div class="grid cols-4" style="gap: 0">
						<img v-scroll-reveal="{ delay: 200 }" style="grid-column: span 1; height: auto" src="/busicon.png" alt="" />
						<div v-scroll-reveal="{ delay: 400 }" style="grid-column: span 3">
							<p>B20<br />Richtung Bern Wankdorf</p>
						</div>
					</div>
				</div>
				<div>
					<h3 v-scroll-reveal="{ delay: 0 }">Von Richtung Olten</h3>
					<h2 v-scroll-reveal="{ delay: 200 }">Mit dem Auto</h2>
					<br />
					<p v-scroll-reveal="{ delay: 400 }">Nehmen sie die Ausfahrt 37-BernWankdorf und biegen sie anschliessend in die Papiermühlestrasse ein. Beim ersten Kreisel rechts und dann nur noch dem</p>
				</div>
			</div>
			<br />
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.72679096551!2d7.449444113907455!3d46.96051126040452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39edef28aee1%3A0x62b5697e8242d481!2sAllmendstrasse%2054%2C%203014%20Bern!5e0!3m2!1sen!2sch!4v1611054249814!5m2!1sen!2sch"
					width="960"
					height="640"
					frameborder="0"
					style="border: 0"
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				></iframe>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ query }) {
		return {
			textArea: query.text,
			selectedAnliegen: query.anliegen,
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
}
</script>

<style lang="sass" scoped>
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
