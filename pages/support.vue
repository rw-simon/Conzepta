<template>
	<div>
		<div style="padding: 12rem 0; background: #e7e9ec">
			<div class="container">
				<div class="grid cols-2">
					<div>
						<h3>Jederzeit</h3>
						<h1>Support</h1>
						<p>
							Eine gute Software ist jene, die ohne Probleme läuft. Das garantieren wir Ihnen. Deshalb sind wir für Sie da – wann immer
							Sie uns brauchen
						</p>
						<br /><br />
						<p>Email: team@conzepta.ch <br />Telefon: +41 348 60 20</p>
					</div>
				</div>
				<p>Und übrigens: Wenn alles läuft, sind Sie bei uns erst recht willkommen, zu einer Tasse Kaffee oder Tee. Denn auch</p>
			</div>
			<div style="margin-top: 8rem" class="container">
				<h3>Direkt</h3>
				<h2>Kontakt</h2>
				<form action="" class="grid cols-2" style="gap: 2rem">
					<input
						style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
						type="text"
						placeholder="Vorname"
					/>
					<input
						style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
						type="text"
						placeholder="Nachname"
					/>
					<input
						style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
						type="text"
						placeholder="Email"
					/>
					<select
						style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
						name=""
						id=""
						value="Anliegen"
					>
						<option value="anliegen">Anliegen</option>
						<option value="techprob">Technische Probleme</option>
						<option value="pp">Police Pad</option>
						<option value="lex">Lexica</option>
						<option value="int">Interlink</option>
						<option value="tac">Tachifox</option>
						<option value="par">ParkingPad</option>
						<option value="all">Allgemein</option>
					</select>
					<!-- <input
					style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
					type="text"
					placeholder="Anliegen"
				/> -->
					<textarea
						style="border: blue 1px solid; border-radius: 5px; width: 100%; grid-column: span 2"
						name=""
						id=""
						cols="30"
						rows="10"
					></textarea>
				</form>
				<CButton text="Senden" style="margin-top: 2rem" />
			</div>
		</div>
		<div class="container" style="margin-top: 8rem">
			<div class="grid cols-2">
				<div>
					<p>Conzepta Team<br />Allmendstrasse 54<br />3014 Bern</p>
					<br />
					<div class="grid cols-4" style="gap: 0">
						<img style="grid-column: span 1" src="/busicon.png" alt="" />
						<div style="grid-column: span 3">
							<p>B20<br />Richtung Bern Wankdorf</p>
						</div>
					</div>
				</div>
				<div>
					<h3>Von Richtung Olten</h3>
					<h2>Mit dem Auto</h2>
					<br />
					<p>
						Nehmen sie die Ausfahrt 37-BernWankdorf und biegen sie anschliessend in die Papiermühlestrasse ein. Beim ersten Kreisel rechts
						und dann nur noch dem
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
