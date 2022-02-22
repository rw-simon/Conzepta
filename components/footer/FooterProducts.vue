<template>
	<div class="footer-products">
		<h3>{{ $i18n.locale == 'fr' ? 'Produits' : 'Produkte' }}</h3>

		<nuxt-link :to="localePath({ path: `/produkte/${item.slug}` })" v-for="(item, i) in $store.state.menu[$i18n.locale].footer.items[1].child_items" :key="i"
			><p>{{ item.title }}</p></nuxt-link
		>
	</div>
</template>

<script>
export default {
	name: 'FooterProducts',
}
</script>

<style lang="sass" scoped>
h3
	margin-bottom: 2rem
	font-size: 1.1rem
	text-transform: none
p
	margin: 0
</style>
