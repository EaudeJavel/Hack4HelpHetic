<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index home">
		<navBar page="home" />
		<banner />
		<blockText :isImageLeft="true" :title="texts.BLOCKTEXT_HOME_TITLE" :text="texts.BLOCKTEXT_HOME_TEXT" :image="texts.BLOCKTEXT_HOME_IMG" />
		<coverImg :title="texts.COVERIMG_HOME_TITLE" :text="texts.COVERIMG_HOME_TEXT" />
		<blockVideo :isButton="true" :edition="texts.BLOCKVIDEO_EDITION" :title="texts.BLOCKVIDEO_TITLE" :video="texts.BLOCKVIDEO_VIDEO_SOURCE" :items="texts.BLOCKVIDEO_ITEMS" />
		<testimonials :title="texts.TESTIMONIALS_TITLE" :list="texts.TESTIMONIALS_LIST" />
		<brands :title="texts.BRANDS_TITLE" :list="texts.BRANDS_LIST"/>
		<contact :title="texts.CONTACT_TITLE" :list="texts.CONTACT_LIST" :description="texts.CONTACT_DESCRIPTION" />
		<footerDefault :title="texts.FOOTER_TITLE" :logo="texts.FOOTER_LOGO" :items="texts.FOOTER_ITEMS" :titleLiens="texts.FOOTER_TITLE_LIENS" :titleFollow="texts.FOOTER_TITLE_FOLLOW" :reseaux="texts.FOOTER_RESEAUX" :copyright="texts.FOOTER_COPYRIGHT" :sites="texts.FOOTER_SITES" />
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
	import testimonials from '@/components/testimonials/testimonials.vue'

	export default {
		components: {
			banner,
			navBar,
			blockText,
			blockVideo,
			footerDefault,
			brands,
			coverImg,
			contact,
			testimonials,
			brands
		},
		transition: {
			mode: 'out-in',
			css: false,
			appear: true,
			enter (el, done) {

				done()
			},
			leave (el, done) {
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
