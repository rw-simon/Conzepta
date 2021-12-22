<template>
	<div>
		<nav class="main-menu">
			<ul>
				<li class="menu-item">
					<nuxt-link :to="localePath('index')" exact>Home</nuxt-link>
				</li>
				<li class="menu-item">
					<nuxt-link style="margin: 0; border: 0; padding: 0" v-if="opened == 'wir'" to="/wir">{{ $i18n.locale == 'de' ? 'Wir' : 'À propos' }}</nuxt-link>
					<a v-else @click="opened = 'wir'">{{ $i18n.locale == 'de' ? 'Wir' : 'À propos' }}</a>
					<ul class="submenu" v-if="opened == 'wir'">
						<li><nuxt-link :to="localePath('portfolio')">Portfolio</nuxt-link></li>
						<li><nuxt-link :to="localePath({ name: 'news', hash: '#news' })">News</nuxt-link></li>
						<li>
							<nuxt-link :to="localePath({ path: 'leitbild' })">{{ $i18n.locale == 'fr' ? 'Leitbild' : 'Leitbild' }}</nuxt-link>
						</li>
						<li><nuxt-link :to="localePath('jobs')">Jobs</nuxt-link></li>
						<!-- <li><nuxt-link :to="localePath('archiv')">Archiv</nuxt-link></li>
						<li><nuxt-link :to="localePath('wir')">Geschichte</nuxt-link></li> -->
					</ul>
				</li>
				<li class="menu-item">
					<nuxt-link style="margin: 0; border: 0; padding: 0" v-if="opened == 'produkte'" to="/produkte">{{ $i18n.locale == 'de' ? 'Produkte' : 'Produits' }}</nuxt-link>
					<a v-else @click="opened = 'produkte'">{{ $i18n.locale == 'de' ? 'Produkte' : 'Produits' }}</a>
					<ul class="submenu" v-if="opened == 'produkte'">
						<li><nuxt-link :to="localePath({ name: 'produkte-policepad' })">PolicePad</nuxt-link></li>
						<li><nuxt-link :to="localePath({ name: 'produkte-lexica' })">Lexica</nuxt-link></li>
						<li><nuxt-link :to="localePath({ name: 'produkte-interlink' })">InterLink</nuxt-link></li>
						<li><nuxt-link :to="localePath({ name: 'produkte-tachifox' })">TachiFox</nuxt-link></li>
						<!-- <li><nuxt-link :to="localePath('/produkte/parkingpad')">ParkingPad</nuxt-link></li> -->
					</ul>
				</li>
				<li class="menu-item">
					<a @click="opened = 'support'">{{ $i18n.locale == 'de' ? 'Kontakt' : 'Contact' }}</a>
					<ul class="submenu" v-if="opened == 'support'">
						<li>
							<nuxt-link :to="{ path: '/kontakt', hash: '#kontakt' }">{{ $i18n.locale == 'de' ? 'Kontaktformular' : 'Formulaire de contact' }}</nuxt-link>
						</li>
						<li><nuxt-link :to="{ path: '/support', hash: '#support' }">Support</nuxt-link></li>
					</ul>
				</li>
				<li class="menu-item">
					<a @click="opened = 'sprache'">{{ $i18n.locale == 'de' ? 'Sprache' : 'Langue' }}</a>
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
