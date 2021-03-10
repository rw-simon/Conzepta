<template>
	<div style="background-color: #e7e9ec; padding: 8rem 0">
		<div class="container">
			<div class="grid cols-2">
				<div>
					<h3>ParkingPad</h3>
					<h1>Bald verfügbar //</h1>
					<br />
					<p>Wir arbeiten mit Hochdruck daran unser neues Parkingverwaltungstool für private Anwender fertigzustellen</p>
					<br />
					<br />
					<p>
						Email: team@conzepta.ch <br />
						Tel: +41 348 60 20
					</p>
					<br />
					<nuxt-link :to="{ path: '/kontakt', query: { anliegen: 'par', text: 'Guten Tag. Bitte schicken Sie mir unterlagen betreffend dem Projekt ParkingPad Freundliche Grüsse' } }"><CButton text="Informieren Sie mich" /></nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
