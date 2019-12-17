<template>
  <div>
    <h2 class="is-h2 text">À la rencontre des sans-abri</h2>
    <p class="text">La première édition du HACK4HELP est dédiée aux personnes sans-abri.
      180 élèves d’Hetic ont été répartis en 12 équipes qui auront 2 semaines pour proposer
      des solutions innovantes afin d’aider les sans-abri. Pour ce faire, ils sont conseillés
      par des experts du terrain et de la tech, et sont allés confronter leurs idées sur le terrain
      en allant à la rencontre de sans-abri et d’associations. Au terme de ces 2 semaines, le projet
      retenu par le jury sera incubé et concrétisé pendant 1 an au sein du Hub Hetic.

      Découvrez un recap de cette première édition ci-dessous !</p>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
  import { mapGetters } from 'vuex'

	export default {
		name: 'blockVideo',
		computed: {
			...mapGetters({
				getTexts: "text/getTexts"
			}),
			texts() {
				return this.getTexts
			},
		}
	}
</script>

