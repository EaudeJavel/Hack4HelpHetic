<template>
	<svg enable-background="new 0 0 408 408" class="arrow" :style="{transform: `rotate(${rotate}deg)`}" viewBox="0 0 408 408" :fill="color" xmlns="http://www.w3.org/2000/svg"><path d="m408 178.5h-311.1l142.8-142.8-35.7-35.7-204 204 204 204 35.7-35.7-142.8-142.8h311.1z"/></svg>
</template>

<style lang="stylus" scoped>
	.arrow {
		position relative
		top 1px
		width 12px
		margin-right 10px
	}
</style>

<script>
	export default {
		name: 'arrow',
		props: ['rotate', 'color']
	}
</script>

