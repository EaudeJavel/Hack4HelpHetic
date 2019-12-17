<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index">
		<h1 v-html="texts.BANNER_TITLE"></h1>
		<navbar/>
		<numbers />
		<cta type="small" link="/decouvrir" :label="texts.BANNER_ACTION" />
		<cta type="small" link="/decouvrir" :label="texts.BANNER_ACTION" :isExternal="true" />		
		<brands></brands>
	</div>	
</template>

<style lang="stylus" scoped>
	.container-index {

	}
</style>

<script>
	import { mapGetters } from 'vuex'
	import navbar from '@/components/base/navbar.vue'
	import numbers from '@/components/numbers/numbers.vue'
	import cta from '@/components/cta/cta.vue'
	import brands from '@/components/brands/brands.vue'

	export default {
		components: {
			navbar,
			numbers,
			cta,
			brands
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
