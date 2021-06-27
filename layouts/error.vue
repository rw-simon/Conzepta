<template>
	<div class="container">
		<div class="section">
			<h1 v-if="$i18n.locale == 'de'">Seite nicht gefunden</h1>
			<h1 v-if="$i18n.locale == 'en'">Page not found</h1>
			<h1 v-if="$i18n.locale == 'fr'">Page non trouvée</h1>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
