<template>
	<nav class="main-menu">
		<ul>
			<li class="menu-item">
				<nuxt-link to="/wir">Wir</nuxt-link>
			</li>
			<li class="menu-item">
				<nuxt-link to="/produkte">Produkte</nuxt-link>
			</li>
			<li class="menu-item">
				<nuxt-link to="/support">Support</nuxt-link>
			</li>
			<li class="menu-item">
				<nuxt-link to="/portfolio">Portfolio</nuxt-link>
			</li>
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
				&:hover
					border-bottom: 2px solid $c-blue
</style>
