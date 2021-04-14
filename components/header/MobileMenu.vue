<template>
	<div>
		<nav class="main-menu">
			<ul>
				<li class="menu-item">
					<nuxt-link to="/" exact>Home</nuxt-link>
				</li>
				<li class="menu-item">
					<nuxt-link style="margin: 0; border: 0; padding: 0" v-if="opened == 'wir'" to="/wir">Wir</nuxt-link>
					<a v-else @click="opened = 'wir'">Wir</a>
					<ul class="submenu" v-if="opened == 'wir'">
						<li><nuxt-link :to="localePath('portfolio')">Portfolio</nuxt-link></li>
						<li><nuxt-link :to="localePath('archiv')">News</nuxt-link></li>
						<li><nuxt-link :to="localePath('offene-stellen')">Jobs</nuxt-link></li>
						<!-- <li><nuxt-link :to="localePath('archiv')">Archiv</nuxt-link></li>
						<li><nuxt-link :to="localePath('wir')">Geschichte</nuxt-link></li> -->
					</ul>
				</li>
				<li class="menu-item">
					<nuxt-link style="margin: 0; border: 0; padding: 0" v-if="opened == 'produkte'" to="/produkte">Produkte</nuxt-link>
					<a v-else @click="opened = 'produkte'">Produkte</a>
					<ul class="submenu" v-if="opened == 'produkte'">
						<li><nuxt-link :to="localePath('/produkte/policepad')">PolicePad</nuxt-link></li>
						<li><nuxt-link :to="localePath('/produkte/lexica')">Lexica</nuxt-link></li>
						<li><nuxt-link :to="localePath('/produkte/interlink')">InterLink</nuxt-link></li>
						<li><nuxt-link :to="localePath('/produkte/tachifox')">TachiFox</nuxt-link></li>
						<!-- <li><nuxt-link :to="localePath('/produkte/parkingpad')">ParkingPad</nuxt-link></li> -->
					</ul>
				</li>
				<li class="menu-item">
					<a @click="opened = 'support'">Kontakt</a>
					<ul class="submenu" v-if="opened == 'support'">
						<li><nuxt-link :to="{ path: '/kontakt' }">Kontaktformular</nuxt-link></li>
						<li><nuxt-link :to="{ path: '/support' }">Support</nuxt-link></li>
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
