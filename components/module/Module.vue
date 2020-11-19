<template>
	<div class="section">
		<Divider v-if="module.acf_fc_layout == 'divider'" />
		<TextOneColumns
			v-if="module.acf_fc_layout == 'text_1_columns'"
			:content="module"
		/>
		<TextTwoColumns
			v-if="module.acf_fc_layout == 'text_2_columns'"
			:content="module"
		/>
		<ListTwoColumns
			v-if="module.acf_fc_layout == 'list_2_columns'"
			:content="module"
		/>
		<TeamList
			v-if="module.acf_fc_layout == 'team_list'"
			:content="module"
		/>
		<TextHeadline
			v-if="module.acf_fc_layout == 'text_headline'"
			:content="module"
		/>
	</div>
</template>

<script>
export default {
	props: {
		module: '',
	},
}
</script>

<style></style>
