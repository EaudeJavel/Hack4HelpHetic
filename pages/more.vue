<template>
	<div v-if="Object.keys(texts).length" class="container-page container-index">
		<navBar type="small"
				:link="texts.HEADER_LINKS.HEADER_MORE.link"
				:label="texts.HEADER_LINKS.HEADER_MORE.title"
				:isExternal="texts.HEADER_LINKS.HEADER_MORE.isExternal"
				:links="texts.HEADER_LINKS.HEADER_MORE.links"
				class="button"
		/>
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
