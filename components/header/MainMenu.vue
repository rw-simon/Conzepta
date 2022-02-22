<template>
	<nav class="main-menu">
		<ul :class="{ opened: opened }">
			<li v-for="(item, i) in $store.state.menu[$i18n.locale].header.items" :key="i" class="menu-item">
				<nuxt-link v-if="item.slug.includes('homepage')" :to="localePath({ name: 'index' })" exact>{{ item.title }}</nuxt-link>
				<nuxt-link v-else :to="localePath({ path: `/${item.slug}` })">{{ item.title }}</nuxt-link>
				<ul class="submenu" v-if="opened && item.child_items">
					<li v-for="(subitem, j) in item.child_items" :key="j">
						<nuxt-link v-if="subitem.object == 'page'" :to="localePath({ path: `/${subitem.slug}` })">{{ subitem.title }}</nuxt-link>
						<nuxt-link v-else :to="localePath({ path: `/produkte/${subitem.slug}` })">{{ subitem.title }}</nuxt-link>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'MainMenu',
	props: ['opened'],
}
</script>

<style lang="sass" scoped>
.main-menu
	padding-top: 1.4rem
	align-self: start
	ul
		display: grid
		gap: 6rem
		width: fit-content
		margin: auto
		height: 100%
		align-items: center
		grid-template-columns: repeat(6, auto)
		list-style: none
		padding: 0
		li
			position: relative
			// display: inline-block
			padding: 0 .5rem
			// padding-right: .5rem
			z-index: 99999
			.submenu
				position: absolute
				z-index: 50
				top: 0
				padding-top: 3rem
				border-left: 1px solid $c-blue
				height: fit-content
				display: block
				width: max-content
				li
					padding: .2rem 0
					display: block
					a
						padding: .5rem
						color: $c-gray
						&.nuxt-link-active
							background-image: none
							background-size: 10px 2px
							background-repeat: no-repeat
							background-position: .5rem bottom
						&:hover
							color: $c-black
							// border-bottom: 2px solid $c-blue
							background-image: none
							background-size: 10px 2px
							background-repeat: no-repeat
							background-position: .5rem bottom
			a
				padding: .5rem
				position: relative
				z-index: 999
				&.nuxt-link-active
					color: $c-blue
					background-image: linear-gradient(90deg, $c-blue, $c-blue)
					background-size: 10px 2px
					background-repeat: no-repeat
					background-position: .5rem bottom
				&:hover
					color: $c-blue
					// border-bottom: 2px solid $c-blue
					background-image: linear-gradient(90deg, $c-blue, $c-blue)
					background-size: 10px 2px
					background-repeat: no-repeat
					background-position: .5rem bottom
</style>
