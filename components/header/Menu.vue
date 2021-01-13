<template>
	<nav class="main-menu">
		<ul>
			<li class="menu-item">
				<nuxt-link to="/">Home</nuxt-link>
			</li>
			<li class="menu-item">
				<nuxt-link :to="localePath('wir')">Wir</nuxt-link>
			</li>
			<li class="menu-item">
				<nuxt-link :to="localePath('produkte')">Produkte</nuxt-link>
			</li>
			<li class="menu-item">
				<nuxt-link :to="localePath('support')">Support</nuxt-link>
			</li>
			<!-- <li class="menu-item">
				<nuxt-link :to="localePath('portfolio')">Portfolio</nuxt-link>
			</li> -->
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Menu',
}
</script>

<style lang="sass" scoped>
.main-menu
	ul
		display: grid
		gap: 1rem
		width: min-content
		margin: auto
		height: 100%
		align-items: center
		grid-template-columns: repeat(4, auto)
		list-style: none
		padding: 0
		@include mobile
			display: none
		li
			// display: inline-block
			a
				padding: .5rem 1rem
				&.nuxt-link-active
					color: $c-blue
					background-image: linear-gradient(90deg, $c-blue, $c-blue)
					background-size: 10px 2px
					background-repeat: no-repeat
					background-position: 1rem bottom
				&:hover
					color: $c-blue
					// border-bottom: 2px solid $c-blue
					background-image: linear-gradient(90deg, $c-blue, $c-blue)
					background-size: 10px 2px
					background-repeat: no-repeat
					background-position: 1rem bottom
</style>
