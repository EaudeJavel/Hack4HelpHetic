<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index">
		<navBar page="home" />
		<banner />
		<blockText :title="texts.BLOCKTEXT_HOME_TITLE" :text="texts.BLOCKTEXT_HOME_TEXT" :image="texts.BLOCKTEXT_HOME_IMG" />
		<coverImg :title="texts.COVERIMG_HOME_TITLE" :text="texts.COVERIMG_HOME_TEXT" />
		<blockVideo />
		<!-- <brands /> -->
		<contact :title="texts.CONTACT_TITLE" :list="texts.CONTACT_LIST" :description="texts.CONTACT_DESCRIPTION" />
		<footerDefault />
	</div>
</template>

<style lang="scss" scoped>
</style>

<script>
	import { mapGetters } from 'vuex'
	import banner from '@/components/banner/banner.vue'
	import brands from '@/components/brands/brands.vue'
	import navBar from '@/components/navBar/navBar.vue'
	import blockText from '@/components/blockText/blockText.vue'
	import blockVideo from '@/components/blockVideo/blockVideo.vue'
	import footerDefault from '@/components/footer/footer.vue'
	import coverImg from '@/components/coverImg/coverImg.vue'
	import contact from '@/components/contact/contact.vue'

	export default {
		components: {
			banner,
			navBar,
			blockText,
			blockVideo,
			footerDefault,
			brands,
			coverImg,
			contact
		},
		transition: {
			mode: 'out-in',
			css: false,
			appear: true,
			enter (el, done) {
				// let tl = new TimelineMax({ onComplete: done })

				// tl.add('start')

				done()
			},
			leave (el, done) {
				// let tl = new TimelineMax({ onComplete: done })

				// tl.add('start')

				done()
			}
		},
		computed: {
			...mapGetters({
				getTexts: "text/getTexts"
			}),
			projects() {
				return this.$store.getters.projects
			},
			texts() {
				return this.getTexts
			},
		}
	}
</script>
