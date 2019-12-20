<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index">
		<navBar page="more" />
		<bannerText :edition="texts.BANNERTEXT_EDITION" :title="texts.BANNERTEXT_TITLE"/>
		<blockText :isImageLeft="true" :title="texts.BLOCKTEXT_MORE_TITLE" :text="texts.BLOCKTEXT_MORE_TEXT" :image="texts.BLOCKTEXT_MORE_IMG" />
		<numbers :title="texts.KEYS_TITLE" :list="texts.KEYS_LIST" :source="texts.KEYS_SOURCE" />
		<blockTextSlider :title="texts.BLOCKTEXT_MORE_TERRAIN_TITLE" :text="texts.BLOCKTEXT_MORE_TERRAIN_TEXT" :list="texts.BLOCKTEXT_MORE_TERRAIN_LIST" />
		<coachs :title="texts.COACHS_TITLE" :list="texts.COACHS_LIST" />
		<blockVideo :text="texts.BLOCKVIDEO_MORE_PAGE_TEXT" :title="texts.BLOCKVIDEO_MORE_TITLE" :video="texts.BLOCKVIDEO_MORE_VIDEO_SOURCE" :items="texts.BLOCKVIDEO_MORE_ITEMS"
		 :isWinner="true" :isSay="true" :titleWinner="texts.BLOCKVIDEO_WINNER_TITLE" :description="texts.BLOCKVIDEO_WINNER_DESCRIPTION" :listImages="texts.BLOCKVIDEO_WINNER_LIST_IMAGE"
		 />
		<quote :title="texts.QUOTE_TITLE" :name="texts.QUOTE_NAME" :job="texts.QUOTE_JOB" :image="texts.QUOTE_IMG" />
		<contact :title="texts.CONTACT_TITLE" :list="texts.CONTACT_LIST" :description="texts.CONTACT_DESCRIPTION" />
		<footerDefault :title="texts.FOOTER_TITLE" :logo="texts.FOOTER_LOGO" :items="texts.FOOTER_ITEMS" :titleLiens="texts.FOOTER_TITLE_LIENS" :titleFollow="texts.FOOTER_TITLE_FOLLOW" :reseaux="texts.FOOTER_RESEAUX" :copyright="texts.FOOTER_COPYRIGHT" :sites="texts.FOOTER_SITES" />
	</div>
</template>

<style lang="scss" scoped>
	.container-page {
		margin-top: 60px;

		@include tablet {
			margin-top: 50px;
		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'
	import navBar from '@/components/navBar/navBar.vue'
	import coachs from '@/components/coachs/coachs.vue'
	import contact from '@/components/contact/contact.vue'
	import footerDefault from '@/components/footer/footer.vue'
	import blockText from '@/components/blockText/blockText.vue'
	import numbers from '@/components/numbers/numbers.vue'
	import quote from '@/components/quote/quote.vue'
	import bannerText from '@/components/bannerText/bannerText.vue'
	import blockVideo from '@/components/blockVideo/blockVideo.vue'
	import blockTextSlider from '@/components/blockTextSlider/blockTextSlider.vue'

	export default {
		components: {
			navBar,
			coachs,
			contact,
			footerDefault,
			blockText,
			numbers,
			quote,
			bannerText,
			blockVideo,
			blockTextSlider
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
