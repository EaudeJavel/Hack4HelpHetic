<template>
	<div class="full-page-container" :style="{padding: withBottom ? '6rem' : '6rem 6rem 0 6rem', 'background': background}">
		<slot></slot>
	</div>
</template>

<style lang="stylus" scoped>
	.full-page-container {
		display flex
		flex-direction column
		height 100vh
	}
</style>

<script>
	export default {
		name: 'fullPage',
		props: ['withBottom', 'background']
	}
</script>

