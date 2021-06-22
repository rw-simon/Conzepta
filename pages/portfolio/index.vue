<template>
	<div>
		<div class="container">
			<div class="section">
				<div class="grid cols-2" style="align-items: end">
					<div v-html="content.acf.modules[0].text_2_columns_column_1">
						<!-- <h3>Referenzen</h3>
						<h1>Portfolio //</h1>
						<p>
							Sie überlegen sich, ob unsere Software auch Ihren Alltag erleichtern könnte? Im Portfolio zeigen wir Ihnen, wer bereits Produkte von Conzepta im Einsatz hat. Denn Erfahrungen, die sie bereits damit machen konnten, können
							Ihr Ratgeber sein. Setzen Sie sich unverbindlich mit uns in Verbindung, wenn Sie mehr zu spezifischen Projekten erfahren möchten.
						</p> -->
					</div>
					<div class="filter br-2">
						<input
							:class="{
								'br bc-blue': true,
								active: selectedCategories.includes(i),
							}"
							v-for="(cat, i) in productCategories"
							:key="i"
							type="button"
							:value="cat"
							@click="toggleCat(i)"
						/>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="logos">
					<div class="grid cols-3">
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(1) || selectedCategories.includes(2)" class="policepad" src="/portfolio/policepad/kapo_bern.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(1)" class="policepad" src="/portfolio/policepad/kapo_schwyz.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(2)" class="lexica" src="/portfolio/policepad/kapo_zurich.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(1) || selectedCategories.includes(2)" class="policepad" src="/portfolio/policepad/stadt_biel.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(1)" class="policepad" src="/portfolio/policepad/stapo_stgallen.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(1)" class="policepad" src="/portfolio/policepad/stapo_winterthur.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(1) || selectedCategories.includes(2)" class="policepad" src="/portfolio/policepad/stapo_zurich.jpg" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/allegion.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/bmw.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/coop.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/grz.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/interflex.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/migros.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/mpdv.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/polypoint.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/spital_bern.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(3)" class="interlink" src="/portfolio/interlink/zeit_ag.png" alt="" />
						<img v-if="selectedCategories.includes(0) || selectedCategories.includes(4)" class="tachifox" src="/portfolio/tachifox/lesroutierssuisse.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'portfolio',

	async asyncData({ app, query }) {
		let content = await axios.get(`https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/pages?slug=portfolio&lang=${app.i18n.locale}`)
		return { content: content.data[0], selectedCategories: [parseInt(query.category)] || [0] }
	},
	data() {
		return {
			productCategories: ['Alle', 'PolicePad', 'Lexica', 'Interlink', 'TachiFox'],
		}
	},
	methods: {
		toggleCat(cat) {
			if (cat == 0) {
				this.selectedCategories = [0]
			} else {
				this.selectedCategories = []
				this.selectedCategories.includes(cat)
					? (this.selectedCategories = this.selectedCategories.filter((c) => {
							return c != cat
					  }))
					: this.selectedCategories.push(cat)
			}
		},
	},
}
</script>

<style lang="sass" scoped>
.logos
	img
		height: auto
		max-height: 5rem
	.grid
		align-items: center
		row-gap: 4rem
		justify-items: center
.filter
		border: 1px solid $c-blue
		display: grid
		grid-template-columns: auto auto auto auto auto
		@include mobile
			grid-template-columns: 1fr
		@include mobile-landscape
			grid-template-columns: 1fr
		input
			font-family: 'Arboria', sans-serif
			font-weight: 600
			margin: 2px 1px
			border-radius: 1px
			transition: background-color .15s ease, color .15s ease
			background: none
			color: $c-gray
			@include mobile
				border-radius: 5px
				margin: 2px
			@include mobile-landscape
				border-radius: 5px
				margin: 2px
			&:hover
				cursor: pointer
			&.active
				background-color: $c-blue
				color: white
			&:first-child
				border-top-left-radius: 5px
				border-bottom-left-radius: 5px
				margin-left: 2px
			&:last-child
				margin-right: 2px
				border-top-right-radius: 5px
				border-bottom-right-radius: 5px
</style>
