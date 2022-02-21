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
	menu: [],
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
	INITIALIZE_MENU(state, m) {
		for (const item of m.items) {
			state.menu.push(item)
		}
	},
}

export const actions = {
	setCookie() {
		Cookie.set('accepted', 'true', { expires: 365 })
	},
	setConsoleCookie({}, test) {
		Cookie.set('console', test, { expires: 365 })
	},
	async nuxtServerInit({ commit }) {
		// const pageRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/pages?per_page=100')
		// const productRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/products?per_page=100&orderby=menu_order&order=asc')
		// const productCategoryRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/product_category?per_page=100')
		// const newsRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/news?per_page=100')
		// const platformRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/platform?per_page=100')
		// const personRequest = await axios.get('https://admin.conzepta.ch/index.php/wp-json/wp/v2/person?per_page=100')
		const menuRequest = await axios.get('https://admin.conzepta.ch/wp-json/menus/v1/menus/hauptmenu?per_page=100')
		// const pageData = pageRequest.data
		// const productData = productRequest.data
		// const productCategoryData = productCategoryRequest.data
		// const newsData = newsRequest.data
		// const platformData = platformRequest.data
		// const personData = personRequest.data
		// const menuData = menuRequest.data
		// commit('SET_PAGES', pageData)
		// commit('SET_PRODUCTS', productData)
		// commit('SET_PRODUCTCATEGORIES', productCategoryData)
		// commit('SET_NEWS', newsData)
		// commit('SET_PLATFORM', platformData)
		// commit('SET_PERSON', personData)
		commit('INITIALIZE_MENU', menuRequest.data)
	},
}
