<template>
	<div class="progress-bar-container">
		<svg
			:height="radius * 2"
			:width="radius * 2"
		>
			<circle
				stroke="black"
				:stroke-dasharray="circumference + ' ' + circumference"
				:style="{ strokeDashoffset: strokeDashoffset }"
				:stroke-width="stroke"
				fill="transparent"
				:r="normalizedRadius"
				:cx="radius"
				:cy="radius"
			/>
		</svg>
	</div>
</template>

<style lang="stylus" scoped>
	.progress-bar-container {

	}
</style>

<script>
	export default {
		name: 'progress-bar',
		props: ['radius', 'progress', 'stroke'],
		data() {
			const r = parseInt(this.radius) - parseInt(this.stroke) * 2
			const c = r * 2 * Math.PI

			return {
				normalizedRadius: r,
				circumference: c
			}
		},
		computed: {
			strokeDashoffset() {
				return this.circumference - this.progress / 100 * this.circumference
			}
		}
	}
</script>

