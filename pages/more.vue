<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index">
		<navBar />
	</div>
</template>

<style lang="scss" scoped>
</style>

<script>
	import { mapGetters } from 'vuex'
	import navBar from '@/components/navBar/navBar.vue'

	export default {
		components: {
			navBar
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
