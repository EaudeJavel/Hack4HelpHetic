<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index">
		<navBar page="more" />
		<bannerText :edition="texts.BANNERTEXT_EDITION" :title="texts.BANNERTEXT_TITLE"/>
		<blockText :isImageLeft="true" :title="texts.BLOCKTEXT_MORE_TITLE" :text="texts.BLOCKTEXT_MORE_TEXT" :image="texts.BLOCKTEXT_MORE_IMG" />
		<numbers :title="texts.KEYS_TITLE" :list="texts.KEYS_LIST" :source="texts.KEYS_SOURCE" />
		<blockText :isImageLeft="false" :title="texts.BLOCKTEXT_MORE_TERRAIN_TITLE" :text="texts.BLOCKTEXT_MORE_TERRAIN_TEXT" :image="texts.BLOCKTEXT_MORE_TERRAIN_IMG" />
		<coachs :title="texts.COACHS_TITLE" :list="texts.COACHS_LIST" />
		<blockVideo :hasText="true" :text="texts.BLOCKVIDEO_MORE_PAGE_TEXT" :title="texts.BLOCKVIDEO_MORE_TITLE" :video="texts.BLOCKVIDEO_MORE_VIDEO_SOURCE" :items="texts.BLOCKVIDEO_MORE_ITEMS" />
		<blockVideo :hasEdition="true" :isWinner="true" :edition="texts.BLOCKVIDEO_WINNER_EDITION" :title="texts.BLOCKVIDEO_WINNER_TITLE" :video="texts.BLOCKVIDEO_WINNER_VIDEO_SOURCE" :items="texts.BLOCKVIDEO_WINNER_ITEMS" />
		<quote :title="texts.QUOTE_TITLE" :name="texts.QUOTE_NAME" :job="texts.QUOTE_JOB" :image="texts.QUOTE_IMG" />
		<contact :title="texts.CONTACT_TITLE" :list="texts.CONTACT_LIST" :description="texts.CONTACT_DESCRIPTION" />
		<footerDefault />
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
			blockVideo
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
