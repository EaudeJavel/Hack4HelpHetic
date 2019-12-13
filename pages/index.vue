<template>
	<div class="container-page container-index">
		<navbar/>
	</div>
</template>

<style lang="stylus" scoped>
	.container-index {

	}
</style>

<script>
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
			projects() {
				return this.$store.getters.projects
			}
		}
	}
</script>
