<template>
	<div>
    	<p>numbers</p>
		<ul v-if="texts.KEYS && texts.KEYS.length">
			<li v-for="(item, i) in texts.KEYS" :key="`number-${i}`">
				<p>{{ item.number }}</p>
				<p>{{ item.title }}</p>
			</li>
		</ul>
	</div>
</template>

<style lang="stylus" scoped>
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: "numbers",
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

