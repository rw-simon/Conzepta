<template>
	<nav class="main-menu">
		<ul :class="{ opened: opened }">
			<li class="menu-item">
				<nuxt-link to="/" exact>Home</nuxt-link>
			</li>
			<li class="menu-item">
				<nuxt-link :to="localePath('wir')">Wir</nuxt-link>
				<ul class="submenu" v-if="opened">
					<li style="color: white">-</li>
					<li style="color: white">-</li>
					<li><nuxt-link :to="localePath('portfolio')">Portfolio</nuxt-link></li>
					<li><nuxt-link :to="{ path: '/archiv' }">News</nuxt-link></li>
					<li><nuxt-link :to="localePath('offene-stellen')">Jobs</nuxt-link></li>
					<!-- <li><nuxt-link :to="localePath('archiv')">Archiv</nuxt-link></li> -->
					<!-- <li><nuxt-link :to="localePath('wir')">Geschichte</nuxt-link></li> -->
				</ul>
			</li>
			<li class="menu-item">
				<nuxt-link :to="localePath('produkte')">Produkte</nuxt-link>
				<ul class="submenu" v-if="opened">
					<li><nuxt-link :to="localePath('/produkte/policepad')">PolicePad</nuxt-link></li>
					<li><nuxt-link :to="localePath('/produkte/lexica')">Lexica</nuxt-link></li>
					<li><nuxt-link :to="localePath('/produkte/interlink')">InterLink</nuxt-link></li>
					<li><nuxt-link :to="localePath('/produkte/tachifox')">TachiFox</nuxt-link></li>
					<li><nuxt-link :to="localePath('/produkte/parkingpad')">ParkingPad</nuxt-link></li>
				</ul>
			</li>
			<li class="menu-item">
				<nuxt-link :to="{ path: '/kontakt' }">Kontakt</nuxt-link>
				<ul class="submenu" v-if="opened">
					<li style="color: white">-</li>
					<li style="color: white">-</li>
					<li style="color: white">-</li>
					<li style="color: white">-</li>
					<li><nuxt-link :to="{ path: '/support' }">Support</nuxt-link></li>
					<!-- <li><nuxt-link :to="{ path: '/support', hash: '#kontaktformular' }">Kontaktformular</nuxt-link></li> -->
				</ul>
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
		width: min-content
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
			z-index: 99999;
			.submenu
				position: absolute
				z-index: 50;
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
