import Cookie from 'js-cookie'
import axios from 'axios'
export const state = () => ({
	pages: {},
	products: {},
	productCategories: {},
	media: {},
	news: {},
	person: {},
	platforms: {},
	menu: {},
	platform_ids: [30, 31, 32, 33, 60, 62, 64, 85, 86],
	popup: [],
	console: [],
})

export const mutations = {
	SET_PAGES(state, p) {
		for (let i = 0; i < Object.keys(p).length; i++) {
			if (p[i].lang == 'fr') {
				state.pages[p[i].slug] = p[i]
				// console.log("Hello");
			} else {
				state.pages[p[i].slug] = p[i]
			}
		}
	},
	SET_PRODUCTS(state, prod) {
		for (let i = 0; i < Object.keys(prod).length; i++) {
			state.products[prod[i].slug] = prod[i]
		}
	},
	SET_PERSON(state, pers) {
		for (let i = 0; i < Object.keys(pers).length; i++) {
			state.person[pers[i].slug] = pers[i]
		}
	},
	SET_PRODUCTCATEGORIES(state, prodcats) {
		for (let i = 0; i < Object.keys(prodcats).length; i++) {
			state.productCategories[prodcats[i].id] = prodcats[i]
		}
	},
	SET_NEWS(state, n) {
		for (let i = 0; i < Object.keys(n).length; i++) {
			state.news[n[i].id] = n[i]
		}
	},
	SET_PLATFORM(state, p) {
		for (let i = 0; i < Object.keys(p).length; i++) {
			state.platforms[p[i].id] = p[i]
		}
	},
	SET_POPUP(state, p) {
		state.popup.push(p[1]) // Set deutsch console
		state.popup.push(p[0]) // Set french console
	},
	SET_CONSOLE(state, c) {
		state.console.push(c[1]) // Set deutsch console
		state.console.push(c[0]) // Set french console
	},
	INITIALIZE_MENU(state, m) {
		Object.assign(state.menu, m)
	},
	// SET_MEDIA(state, media) {
	// 	for (let i = 0; i < Object.keys(media).length; i++) {
	// 		state.media[media[i].id] = media[i]
	// 	}
	// },
}

export const actions = {
	setPopupCookie() {
		Cookie.set('popup-accepted', 'true', { expires: 365 })
	},
	setCookie() {
		Cookie.set('accepted', 'true', { expires: 365 })
	},
	setConsoleCookie({}, test) {
		Cookie.set('console', test, { expires: 365 })
	},
	async nuxtServerInit({ commit }) {
		const menuRequestHauptDE = await axios.get('https://admin.conzepta.ch/wp-json/menus/v1/menus/hauptmenu-de?per_page=100')
		const menuRequestHauptFR = await axios.get('https://admin.conzepta.ch/wp-json/menus/v1/menus/hauptmenu-fr?per_page=100')
		const menuRequestFooterDE = await axios.get('https://admin.conzepta.ch/wp-json/menus/v1/menus/footer-de?per_page=100')
		const menuRequestFooterFR = await axios.get('https://admin.conzepta.ch/wp-json/menus/v1/menus/footer-fr?per_page=100')
		// const pageRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/pages?per_page=100')
		// const productRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/products?per_page=100&orderby=menu_order&order=asc')
		// const productCategoryRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/product_category?per_page=100')
		// const newsRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/news?per_page=100')
		const platformRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/platform?per_page=100')
		const popupRequest = await axios.get('https://admin.conzepta.ch/wp-json/wp/v2/popup?slug=popup,popup-2')
		const consoleRequest = await axios.get('https://admin.conzepta.ch/wp-json/wp/v2/popup?slug=konsole')
		// const personRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/person?per_page=100')
		// const mediaRequest = await axios.get(
		// 	'https://admin.conzepta.ch/index.php/wp-json/wp/v2/media?per_page=100'
		// )
		// const pageData = pageRequest.data
		// const productData = productRequest.data
		// const productCategoryData = productCategoryRequest.data
		// const newsData = newsRequest.data
		const platformData = platformRequest.data
		const popupData = popupRequest.data
		const consoleData = consoleRequest.data
		// const personData = personRequest.data
		// const mediaData = mediaRequest.data
		// commit('SET_PAGES', pageData)
		// commit('SET_PRODUCTS', productData)
		// commit('SET_PRODUCTCATEGORIES', productCategoryData)
		// commit('SET_NEWS', newsData)
		commit('SET_PLATFORM', platformData)
		commit('SET_CONSOLE', consoleData)
		commit('SET_POPUP', popupData)
		// commit('SET_PERSON', personData)
		// commit('SET_MEDIA', mediaData)
		commit('INITIALIZE_MENU', { de: { header: menuRequestHauptDE.data, footer: menuRequestFooterDE.data }, fr: { header: menuRequestHauptFR.data, footer: menuRequestFooterFR.data } })
	},
}
