<template>
	<div class="loading-container">
		<div class="back"></div>
		<div class="front"></div>
		<div class="content">
			<div class="title">Hack4Help</div>
			<div class="subtitle">Hackaton by Hetic</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.loading-container {
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		pointer-events none
		z-index 10
		.back {
			position absolute
			top 0
			left 100%
			width 100%
			height 100%
			background #000
		}
		.front {
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			background #fff
			opacity 0
		}
		.content {
			position relative
			display flex
			flex-direction column
			justify-content center
			align-items center
			height 100%
			.title {
				opacity 0
				margin-bottom 10px
			}
			.subtitle {
				opacity 0
			}
		}
	}
</style>

<script>
	export default {
		name: 'loading',
		props: []
	}
</script>
