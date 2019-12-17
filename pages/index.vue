<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index">
		<navBar type="small"
				:link="texts.HEADER_LINKS.HEADER_HOME.link"
				:label="texts.HEADER_LINKS.HEADER_HOME.title"
				:isExternal="texts.HEADER_LINKS.HEADER_HOME.isExternal"
				:links="texts.HEADER_LINKS.HEADER_HOME.links"
				class="button"
		/>
		<banner />
		<blockText />
		<blockVideo />
	</div>
</template>

<style lang="scss" scoped>
</style>

<script>
	import { mapGetters } from 'vuex'
	import banner from '@/components/banner/banner.vue'
	import navBar from '@/components/navBar/navBar.vue'
	import blockText from '@/components/blockText/blockText.vue'
	import blockVideo from '@/components/blockVideo/blockVideo.vue'

	export default {
		components: {
			banner,
			navBar,
			blockText,
			blockVideo
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
