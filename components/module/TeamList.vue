<template>
	<div id="team">
		<article :id="p.post_name" class="list-entry" v-for="(p, i) in list" :key="i">
			<div class="container">
				<div class="grid cols-2">
					<section class="desc">
						<h3>
							{{ p.acf.person_details.person_details_position }}
						</h3>
						<h2>{{ p.post_title }}</h2>
						<p>«{{ p.acf.person_description }}»</p>
						<p v-if="p.acf.person_details.person_details_email">
							<a class="c-blue" target="_blank" :href="'mailto:' + p.acf.person_details.person_details_email">{{
								p.acf.person_details.person_details_email
							}}</a>
						</p>
						<p v-if="p.acf.person_details.person_details_phone">
							{{ p.acf.person_details.person_details_phone }}
						</p>
					</section>
					<section class="image">
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
.list-entry
	background: $c-gray-light
	padding: 5rem 0
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
	img
		height: auto
</style>
