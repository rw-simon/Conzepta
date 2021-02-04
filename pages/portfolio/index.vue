<template>
	<div>
		<div class="container">
			<div class="section">
				<div class="grid cols-2" style="align-items: end">
					<div>
						<h3>Referenzen</h3>
						<h1>Portfolio</h1>
						<p>
							Sie überlegen sich, ob unsere Software auch Ihren Alltag erleichtern könnte? Im Portfolio zeigen wir Ihnen, wer bereits Produkte von Conzepta im Einsatz hat. Denn Erfahrungen, die sie bereits damit machen konnten, können
							Ihr Ratgeber sein. Setzten Sie sich unverbindlich in Verbindung mit uns, wenn Sie mehr zu spezifischen Projekten erfahren möchten.
						</p>
					</div>
					<div class="filter br-2">
						<input
							:class="{
								'br bc-blue': true,
								active: selected.includes(i),
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
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selected: [0],
			productCategories: ['Alle', 'PolicePad', 'Lexica', 'Interlink', 'TachiFox'],
		}
	},
	methods: {
		toggleCat(cat) {
			if (cat == 0) {
				this.selected = [0]
			} else {
				this.selected.includes(cat)
					? (this.selectedCategories = this.selected.filter((c) => {
							return c != cat
					  }))
					: this.selected.push(cat)
			}
		},
	},
}
</script>

<style lang="sass" scoped>
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
