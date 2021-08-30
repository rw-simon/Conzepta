export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'Conzepta',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: 'we make IT happen',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
	},

	loading: { color: '#1b52f5', height: '3px' },

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/app.sass'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		// { src: '~/plugins/scroll-reveal', mode: 'client' },
		{ src: '~/plugins/jarallax.js', mode: 'client' },
		{ src: '~/plugins/vue-swiper.js', mode: 'client' },
		{ src: '~/plugins/scroll-reveal.js', mode: 'client' },
	],
	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		[
			'@nuxtjs/google-analytics',
			{
				id: 'UA-180573922-1',
			},
		],
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/style-resources',
		'@nuxtjs/recaptcha',
		// https://go.nuxtjs.dev/pwa
		// '@nuxtjs/pwa',
		'nuxt-i18n',
		[
			'nuxt-mail',
			{
				message: { to: ['admin@rechtwinklig.ch', 'team@conzepta.ch'] },
				// smtp: {
				// 	host: 'dali.sui-inter.net',
				// 	port: 465,
				// 	secure: true,
				// 	auth: {
				// 		user: 'info@rechtwinklig.ch',
				// 		pass: '!ml18Py3',
				// 	},
				// },
				smtp: {
					host: 'dali.sui-inter.net',
					port: 465,
					secure: true,
					auth: {
						user: 'info@rechtwinklig.ch',
						pass: '!ml18Py3',
					},
				},
			},
		],
	],
	recaptcha: {
		hideBadge: false,
		siteKey: '6LcYRTMcAAAAAGxI3XAb_rbJ1amuurHn5lLFH4wP', // Site key for requests
		version: 2, // Version
		size: 'normal', // Size: 'compact', 'normal', 'invisible' (v2)
	},
	i18n: {
		locales: [
			{ code: 'de', iso: 'de-CH' },
			{ code: 'fr', iso: 'fr-FR' },
		],
		defaultLocale: 'de',
		seo: true,
		vueI18n: {
			fallbackLocale: 'de',
		},
	},

	styleResources: {
		sass: ['@/assets/_variables.sass', '@/assets/_utility.sass'],
	},

	// pwa: {
	// 	manifest: {
	// 		name: 'Conzepta',
	// 		short_name: 'Conzepta',
	// 		orientation: 'portrait',
	// 	},
	// 	workbox: { debug: false },
	// },

	// serverMiddleware: ['~/api/contact'],

	// server: {
	// 	host: '0.0.0.0',
	// 	port: 3000,
	// },

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: { baseURL: 'https://www.conzepta.ch' },

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
}
