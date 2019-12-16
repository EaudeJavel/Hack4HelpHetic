<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index">
		<h1 v-html="texts.BANNER_TITLE"></h1>
		<!-- <navbar/> -->
		<numbers />
		<cta type="small" link="http://google.fr" :label="texts.BANNER_ACTION" />
		<cta type="small" link="http://google.fr" :label="texts.BANNER_ACTION" :isExternal="true" />

		<img src="~/assets/images/images.png">
	</div>
</template>

<style lang="scss" scoped>
	.container-index {

	}

	h1 {
		font-family: $metropolis;
	}
</style>

<script>
	import { mapGetters } from 'vuex'
	import navbar from '@/components/base/navbar.vue'
	import numbers from '@/components/numbers/numbers.vue'
	import cta from '@/components/cta/cta.vue'

	export default {
		components: {
			navbar,
			numbers,
			cta
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
