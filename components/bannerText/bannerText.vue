<template>
    <div>
      <p>Édition 2019</p>
      <p>Créer une solution utilisant le numérique pour que la société intègre mieux les personnes sans-abri.</p>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script>
	import { mapGetters } from 'vuex'
	import cta from '@/components/cta/cta.vue'

	export default {
		name: "banner",
		components: {
			cta
		},
		computed: {
			...mapGetters({
				getTexts: "text/getTexts"
			}),
			texts() {
				return this.getTexts
			},
    },
	}
</script>

