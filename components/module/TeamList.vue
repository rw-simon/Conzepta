<template>
	<div id="team">
		<article class="list-entry" v-for="(p, i) in list" :key="i">
			<span :id="p.post_name" style="position: absolute; top: -5rem"></span>
			<div class="container">
				<div class="grid cols-2">
					<section class="desc firstmobsec">
						<h3>
							{{ p.acf.person_details.person_details_position }}
						</h3>
						<h2>{{ p.post_title }}</h2>
						<p>«{{ p.acf.person_description }}»</p>
						<p v-if="p.acf.person_details.person_details_email">
							<a class="c-blue" target="_blank" :href="'mailto:' + p.acf.person_details.person_details_email">{{ p.acf.person_details.person_details_email }}</a>
						</p>
						<p v-if="p.acf.person_details.person_details_phone">
							{{ p.acf.person_details.person_details_phone }}
						</p>
					</section>
					<section class="image secmobfirst">
						<img v-if="p.acf.person_portrait.url" :src="p.acf.person_portrait.url" alt="" />
						<img v-else src="/99_Profilbild.png" alt="" />
					</section>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
export default {
	name: 'TeamList',
	data() {
		return {
			id: '',
			list: this.content.team_list_objects,
		}
	},
	props: ['content'], // team_list_options = large, image, description, email, phone; team_list_objects = person objects
}
</script>

<style lang="sass" scoped>
article
	position: relative
	// margin-top: -4rem
.firstmobsec
	@include mobile
		grid-row: 2 !important
		grid-column: 1 !important
.secmobfirst
	@include mobile
		grid-row: 1 !important
		grid-column: 1 !important
.list-entry
	background: $c-gray-light
	padding: 5rem 0
	.image
		grid-column: 2
		grid-row: 1
		@include mobile
			transform: scale(0.7)
	.desc
		grid-row: 1
		grid-column: 1
	&:nth-child(2n)
		background: white
		.image
			grid-column: 1
			grid-row: 1
		.desc
			grid-column: 2
			grid-row: 1
			@include mobile
				grid-column: 1
				grid-row: 2
	img
		height: auto
</style>
