import axios from 'axios'
export const state = () => ({
	pages: {},
	products: {},
	productCategories: {},
})

export const mutations = {
	SET_PAGES(state, p) {
		for (let i = 0; i < Object.keys(p).length; i++) {
			state.pages[p[i].slug] = p[i]
		}
	},
	SET_PRODUCTS(state, prod) {
		for (let i = 0; i < Object.keys(prod).length; i++) {
			state.products[prod[i].slug] = prod[i]
		}
	},
	SET_PRODUCTCATEGORIES(state, prodcats) {
		for (let i = 0; i < Object.keys(prodcats).length; i++) {
			state.productCategories[prodcats[i].id] = prodcats[i]
		}
	},
}

export const actions = {
	async nuxtServerInit({ commit }) {
		const pageRequest = await axios.get(
			'https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/pages?per_page=100'
		)
		const productRequest = await axios.get(
			'https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/products?per_page=100'
		)
		const productCategoryRequest = await axios.get(
			'https://admin.conzepta.rechtwinklig.ch/index.php/wp-json/wp/v2/product_category?per_page=100'
		)
		const pageData = pageRequest.data
		const productData = productRequest.data
		const productCategoryData = productCategoryRequest.data
		commit('SET_PAGES', pageData)
		commit('SET_PRODUCTS', productData)
		commit('SET_PRODUCTCATEGORIES', productCategoryData)
	},
}
