const pkg = require('./package')

module.exports = {
	mode: 'universal',

	/*
	** Headers of the page
	*/
	head: {
		title: 'Hack4Help',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description },

		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
			{ rel: 'manifest', href: '/favicon/site.webmanifest' },
			{ rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' }
		],
		script: [
			{ src: "https://www.googletagmanager.com/gtag/js?id=UA-154807894-1"},
		]
	},

	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },


	/*
	** Global CSS
	*/
	css: [
		'~/assets/styles/main.styl',
		'swiper/dist/css/swiper.css'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		{ src: '~/plugins/swiper.js', ssr: false },
		{ src: '~/plugins/vue-scroll-parallax/index.js', ssr: false },
		{ src: '~/plugins/ga.js', ssr: false },
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		'@nuxtjs/style-resources'
	],
	styleResources: {
		scss: [
			'~/assets/styles/fonts.scss',
			'~/assets/styles/vars.scss',
			'~/assets/styles/mixins.scss',
			'~/assets/styles/typographie.scss',
		]
	},
	/*
	** Build configuration
	*/
	build: {
	/*
	** You can extend webpack config here
	*/
		extend (config, ctx) {
		}
	}
}
