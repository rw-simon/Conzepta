<template>
	<div>
		<nav class="main-menu">
			<ul>
				<li class="menu-item">
					<nuxt-link to="/" exact>Home</nuxt-link>
				</li>
				<li class="menu-item">
					<a @click="opened = 'wir'">Wir</a>
					<ul class="submenu" v-if="opened == 'wir'">
						<li><nuxt-link :to="localePath('portfolio')">Portfolio</nuxt-link></li>
						<li><nuxt-link :to="localePath('archiv')">Archiv</nuxt-link></li>
						<li><nuxt-link :to="localePath('wir')">Geschichte</nuxt-link></li>
						<li><nuxt-link :to="localePath('wir')">News</nuxt-link></li>
						<li><nuxt-link :to="localePath('offene-stellen')">Offene Stellen</nuxt-link></li>
					</ul>
				</li>
				<li class="menu-item">
					<a @click="opened = 'produkte'">Produkte</a>
					<ul class="submenu" v-if="opened == 'produkte'">
						<li><nuxt-link :to="localePath('/produkte/policepad')">Policepad</nuxt-link></li>
						<li><nuxt-link :to="localePath('/produkte/lexica')">Lexica</nuxt-link></li>
						<li><nuxt-link :to="localePath('/produkte/interlink')">Interlink</nuxt-link></li>
						<li><nuxt-link :to="localePath('/produkte/tachifox')">Tachifox</nuxt-link></li>
						<li><nuxt-link :to="localePath('/produkte/parkingpad')">ParkingPad</nuxt-link></li>
					</ul>
				</li>
				<li class="menu-item">
					<a @click="opened = 'support'">Support</a>
					<ul class="submenu" v-if="opened == 'support'">
						<li><nuxt-link :to="{ path: '/support', hash: '#support' }">Kontakt</nuxt-link></li>
						<li><nuxt-link :to="{ path: '/support', hash: '#support' }">Kontaktformular</nuxt-link></li>
					</ul>
				</li>
				<li class="menu-item">
					<a @click="opened = 'sprache'">Sprache</a>
					<ul class="submenu" v-if="opened == 'sprache'">
						<li><nuxt-link :to="switchLocalePath('de')">DE</nuxt-link></li>
						<li><nuxt-link :to="switchLocalePath('fr')">FR</nuxt-link></li>
					</ul>
				</li>
				<!-- <li class="menu-item">
				<nuxt-link :to="localePath('portfolio')">Portfolio</nuxt-link>
			</li> -->
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
	data() {
		return {
			opened: 'wir',
		}
	},
}
</script>

<style lang="sass" scoped>
.main-menu
	padding: 2rem
	ul
		list-style-type: none
		li
			border-bottom: solid 1px $c-blue
			padding: .66rem 0
			a
				font-size: 1.15rem
				color: $c-blue !important
			ul.submenu
				padding: 1rem 0 0 2rem
				li:last-child
					border-bottom: none
</style>
