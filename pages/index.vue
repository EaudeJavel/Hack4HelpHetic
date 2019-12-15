<template>
	<div class="container-page container-index">
		<p>ubkjnlk</p>
		<h1>{{ texts.BANNER_TITLE }}</h1>
		<!-- <navbar/> -->
	</div>
</template>

<style lang="stylus" scoped>
	.container-index {

	}
</style>

<script>
	import { mapGetters } from 'vuex'
	import navbar from '@/components/base/navbar.vue'

	export default {
		components: {
			navbar
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
				console.log(this.getTexts);
				return this.getTexts
			},
		}
	}
</script>
