<template>
	<div class="progress-ring-container">
		<svg
			:height=2
			:width="width"
		>
		</svg>
	</div>
</template>



<style lang="stylus" scoped>
	.progress-ring-container {
	}
</style>



<script>
	export default {
		name: 'progress-bar',
		props: ['progress', 'stroke', 'width'],
		data() {
			// const r = parseInt(this.radius) - parseInt(this.stroke) * 2
            // const c = r * 2 * Math.PI
            const w = parseInt(this.width)
			return {
				// normalizedRadius: r,
                // circumference: c
                totalWidth: w
			}
		},
		computed: {
			strokeDashoffset() {
				return this.totalWidth - this.progress / 100 * this.totalWidth
			}
		}
	}
</script>