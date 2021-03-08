<template>
	<div>
		<div style="padding: 12rem 0" id="offene-stellen">
			<div class="container">
				<div class="grid cols-2">
					<div>
						<h3>Arbeiten bei Conzepta</h3>
						<h1>Freie Stellen //</h1>
						<p>
							Die conzepta team AG ist eine kleine, etablierte Software-Firma mit Sitz in Bern. Unser Ziel ist es, das Leben unserer Kunden Stück für Stück einfacher zu machen, damit sie ihren Arbeitsalltag effizienter erledigen können.
							So entwickeln wir seit über 20 Jahren innovative Software für verschiedenste Kundengruppen, wie z.B. Polizeikorps, Transportunternehmen oder global tätige Konzerne. Wir suchen motivierte Unterstützung, um die Welt von
							morgen noch ein Stück digitaler zu machen.
						</p>
					</div>
				</div>
			</div>
			<div style="background-color: #e7e9ec; padding: 5rem 0; margin-top: 8rem">
				<div class="container">
					<h3>Offene Stellen</h3>
					<h2>Software Entwickler*in .Net<br />60-80%</h2>
					<div class="grid cols-2">
						<div>
							<h4>Deine Aufgaben</h4>
							<ul>
								<li>Betrieb und Weiterentwicklung von bestehenden Applikationen</li>
								<li>Analyse, Design und Entwicklung von neuen Projekten</li>
								<li>Testen von Software</li>
								<li>Enge Zusammenarbeit mit Kunden</li>
								<li>Bearbeiten von Supportanfragen</li>
								<li>Erstellung und Nachführung von Dokumentationen</li>
							</ul>
							<h4>Das kannst du erwarten</h4>
							<ul>
								<li>Motiviertes Team</li>
								<li>Familiäres Umfeld und flache Hierarchien</li>
								<li>Soziale Arbeitsbedingungen</li>
								<li>Flexible Arbeitszeitmodelle (Home- Office, Teilzeit/Gleitzeit)</li>
								<li>Weiterbildungsmöglichkeiten</li>
								<li>Möglichkeit deine Ideen in der Unternehmung einzubringen</li>
							</ul>
							<br /><br /><br />
						</div>
						<div>
							<h4>Was du mitbringst</h4>
							<ul>
								<li>Grundausbildung als Informatiker oder Weiterbildung in Informatik (Fachausweis mit Erfahrung, HF, FH, Uni)</li>
								<li>Projekterfahrung mit C# und .Net Technologien (Front- und Backend)</li>
								<li>Gute Kenntnisse in HTML5, CSS3, JavaScript sowie SQL (bevorzugt MSSQL)</li>
								<li>Interesse an neuen Trends und Technologien</li>
								<li>Deutsch fliessend, Englisch gut in Wort und Schrift</li>
								<li>Gute analytische und kommunikative Fähigkeiten</li>
								<li>Selbstständige Arbeitsweise</li>
								<li>Gute analytische und kommunikative Fähigkeiten</li>
								<li>Spass und Freude in einem kleinen Team zu arbeiten und gemeinsam täglich besser zu werden</li>
							</ul>
							<h4>Nice to have</h4>
							<ul>
								<li>Projekterfahrung mit Xamarin, TypeScript</li>
								<li>Erfahrungen im Bereich Testing, CI/CD</li>
								<li>Verkaufsflair</li>
								<li>Sinn für das Ästhetische, um ansprechende UIs zu entwerfen</li>
								<li>Französischkenntnisse</li>
							</ul>
							<ul>
								<li>Motiviertes Team</li>
								<li>Familiäres Umfeld und flache Hierarchien</li>
								<li>Soziale Arbeitsbedingungen</li>
								<li>Flexible Arbeitszeitmodelle (Home- Office, Teilzeit/Gleitzeit)</li>
								<li>Weiterbildungsmöglichkeiten</li>
								<li>Möglichkeit deine Ideen in der Unternehmung einzubringen</li>
							</ul>
						</div>
						<div class="bewbut">
							<p>Der Arbeitsort der Stelle ist in Bern und die Stelle ist ab Januar 2021 verfügbar. Wir freuen uns auf deine Bewerbung per Mail.</p>
							<nuxt-link :to="{ path: '/support', hash: '#support' }"><CButton text="Bewerben" /></nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.bewbut
	grid-column: 2
	@include mobile
		grid-column: 1
h4
	margin-top: 2rem
ul
	list-style-type: disc
	padding-left: 1rem
	li
		padding-left: 1rem
		line-height: 2em
</style>
