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
			{ hid: 'description', name: 'description', content: '' },
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
		// workbox: { dev: true },
	},

	server: {
		host: '0.0.0.0',
		port: 3000,
	},

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
}
