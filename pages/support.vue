<template>
	<div style="margin-top: 12rem">
		<div class="container">
			<div class="grid cols-2">
				<div>
					<h3>Jederzeit</h3>
					<h1>Support</h1>
					<p>
						Eine gute Software ist jene, die ohne Probleme läuft. Das garantieren wir Ihnen. Deshalb sind wir für Sie da – wann immer Sie
						uns brauchen
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
				<input
					style="border: blue 1px solid; border-radius: 5px; box-sizing: border-box; margin: 0; width: 100%"
					type="text"
					placeholder="Anliegen"
				/>
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
</template>

<script>
export default {}
</script>

<style></style>
