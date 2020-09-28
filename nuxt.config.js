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
		// link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	loading: { color: '#000000', height: '4px' },

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: ['~/assets/app.sass'],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/style-resources',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		[
			'@nuxtjs/firebase',
			{
				config: {
					apiKey: 'AIzaSyAkFvVEYyerY4QiRHrBxot-vvYdGKhYAEk',
					authDomain: 'conzepta-17144.firebaseapp.com',
					databaseURL: 'https://conzepta-17144.firebaseio.com',
					projectId: 'conzepta-17144',
					storageBucket: 'conzepta-17144.appspot.com',
					messagingSenderId: '199437049066',
					appId: '1:199437049066:web:c61df4bc6485cbc7f44b93',
					measurementId: 'G-GM99B4YN1W',
				},
				services: {},
			},
		],
	],

	styleResources: {
		sass: ['@/assets/_variables.sass', '@/assets/_utility.sass'],
	},

	pwa: {
		manifest: {
			name: 'Conzepta',
			short_name: 'Conzepta',
			orientation: 'portrait',
		},
		workbox: { debug: false },
	},

	// server: {
	// 	host: '0.0.0.0',
	// 	port: 3000,
	// },

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
}
