export const state = () => ({
	firstLoad: true,
	dataLoaded: false,
	collections: [],
	oeuvres: [],
	articles: [],
	pages: []
})

export const getters = {
	GET_COLLECTIONS(state) {
		return state.collections
	},
	GET_OEUVRES(state) {
		return state.oeuvres
	},
	GET_ARTICLES(state) {
		return state.articles
	},
	GET_PAGES(state) {
		return state.pages
	},
	IS_FIRST_LOAD(state) {
		return state.firstLoad
	},
	IS_DATA_LOADED(state) {
		return state.dataLoaded
	}
}

export const mutations = {
	SET_DATA (state, data) {
		state.collections = data.collections
		state.oeuvres = data.oeuvres
		state.articles = data.articles
		state.pages = data.pages

		state.dataLoaded = true
	},
	// SET_COLLECTIONS (state, payload) {
	// 	state.collections = payload
	// },
	// SET_OEUVRES(state, payload) {
	// 	state.oeuvres = payload
	// },
	// SET_ARTICLES(state, payload) {
	// 	state.articles = payload
	// },
	// SET_PAGES(state, payload) {
	// 	state.pages = payload
	// },
	SET_FIRST_LOAD(state, payload) {
		state.firstLoad = payload
	},
	SET_DATA_LOADED(state, payload) {
		state.dataLoaded = payload
	}
}

export const actions = {
	setFirstLoad({ commit }, data) {
		commit('SET_FIRST_LOAD', data)
	},
	setDataLoaded({ commit }, data) {
		commit('SET_DATA_LOADED', data)
	}
}
