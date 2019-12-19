<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index">
		<navBar page="more" />
		<blockText :isImageLeft="true" :title="texts.BLOCKTEXT_MORE_TITLE" :text="texts.BLOCKTEXT_MORE_TEXT" :image="texts.BLOCKTEXT_MORE_IMG" />
		<numbers :title="texts.KEYS_TITLE" :list="texts.KEYS_LIST" />
		<blockText :isImageLeft="false" :title="texts.BLOCKTEXT_MORE_TERRAIN_TITLE" :text="texts.BLOCKTEXT_MORE_TERRAIN_TEXT" :image="texts.BLOCKTEXT_MORE_TERRAIN_IMG" />
		<coachs :title="texts.COACHS_TITLE" :list="texts.COACHS_LIST" />
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

	export default {
		components: {
			navBar,
			coachs,
			contact,
			footerDefault,
			blockText,
			numbers,
			quote
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
