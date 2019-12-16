<template>
	<div class="__layout-wrapper">
		<!-- <loading-first v-if="firstLoad"/>
		<loading/> -->
		<!-- <nuxt v-if="dataLoaded"/> -->
		<nuxt/>
	</div>
</template>

<style lang="stylus">
	html {
		font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
		font-size 16px
		word-spacing 1px
		-ms-text-size-adjust 100%
		-webkit-text-size-adjust 100%
		-moz-osx-font-smoothing grayscale
		-webkit-font-smoothing antialiased
		box-sizing border-box
	}

	.__layout-wrapper {}

	.container-page {
		// min-height 100vh
		// margin auto

		// /* Extra small devices (phones, 600px and down) */
		// @media screen and (max-width: 600px) {
		// 	padding 0 20px
		// }

		// /* Small devices (portrait tablets and large phones, 600px and up) */
		// @media screen and (min-width: 600px) {
		// 	padding 0 40px
		// }

		// /* Medium devices (landscape tablets, 768px and up) */
		// @media screen and (min-width: 768px) {
		// 	padding 0 60px
		// }

		// /* Large devices (laptops/desktops, 992px and up) */
		// @media screen and (min-width: 992px) {
		// 	padding 0 80px
		// }

		// /* Extra large devices (large laptops and desktops, 1200px and up) */
		// @media screen and (min-width: 1200px) {
		// 	padding 0 100px
		// 	max-width 1200px
		// }
	}

	*,
	*:before,
	*:after {
		box-sizing border-box
		margin 0
	}
</style>


<script>
	import { mapGetters } from 'vuex'

	import loadingFirst from '~/components/transition/loading-first.vue'
	import loading from '~/components/transition/loading.vue'
	import text from '~/data/text.json'
	export default {
		components: {
			'loading-first': loadingFirst,
			'loading': loading,
		},
		computed: {
			...mapGetters({
				dataLoaded: 'IS_DATA_LOADED'
			}),
		},
		created() {
			this.firstLoad = this.$store.getters['IS_FIRST_LOAD']

			this.loadData()
		},
		mounted() {
			this.$store.dispatch("text/setTexts", text)
		},
		methods: {
			async loadData() {
				const local = 'http://localhost:3000/'
				const prod = 'test'
				const data = {}

				// data.collections = await this.$axios.$get(`${prod}/wp-json/wp/v2/collection?per_page=100`)

				// const oeuvres1 = await this.$axios.$get(`${prod}/wp-json/wp/v2/oeuvre?per_page=100&page=1`)
				// const oeuvres2 = await this.$axios.$get(`${prod}/wp-json/wp/v2/oeuvre?per_page=100&page=2`)

				// data.oeuvres = oeuvres1.concat(oeuvres2)

				// data.articles = await this.$axios.$get(`${prod}/wp-json/wp/v2/article`)
				// data.pages = await this.$axios.$get(`${prod}/wp-json/wp/v2/pages`)

				this.$store.commit('SET_DATA', data)
			}
		}
	}
</script>

