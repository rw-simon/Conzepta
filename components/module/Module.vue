<template>
	<div class="section">
		<divider v-scroll-reveal v-if="module.acf_fc_layout == 'divider'" />
		<text-one-columns v-scroll-reveal v-if="module.acf_fc_layout == 'text_1_columns'" :content="module" />
		<text-two-columns
			v-scroll-reveal
			:style="[module.id == 'unser-angebot' ? { marginTop: '-10rem', paddingTop: '10rem' } : { marginTop: '0', paddingTop: '0' }]"
			:id="module.id"
			v-if="module.acf_fc_layout == 'text_2_columns'"
			:content="module"
		/>
		<list-two-columns v-scroll-reveal v-if="module.acf_fc_layout == 'list_2_columns'" :content="module" />
		<team-list v-scroll-reveal v-if="module.acf_fc_layout == 'team_list'" :content="module" />
		<text-headline v-scroll-reveal v-if="module.acf_fc_layout == 'text_headline'" :content="module" />
	</div>
</template>

<script>
import Divider from './Divider.vue'
import ListTwoColumns from './ListTwoColumns.vue'
import TeamList from './TeamList.vue'
import TextHeadline from './TextHeadline.vue'
import TextOneColumns from './TextOneColumns.vue'
import TextTwoColumns from './TextTwoColumns.vue'
export default {
	components: { Divider, TextOneColumns, TextTwoColumns, ListTwoColumns, TeamList, TextHeadline },
	props: {
		module: '',
	},
}
</script>

<style></style>
