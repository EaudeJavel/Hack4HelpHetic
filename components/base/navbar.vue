<template>
	<div class="navbar">
		<div class="left">
			<nuxt-link to="/" exact class="navbar-item">
				Accueil
			</nuxt-link>
		</div>
		<div class="right">
			<nuxt-link to="/page-1" exact class="navbar-item">
				Page 1
			</nuxt-link>
			<nuxt-link to="/page-2" exact class="navbar-item">
				Page 2
			</nuxt-link>
			<nuxt-link to="/page-3" exact class="navbar-item">
				Page 3
			</nuxt-link>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.navbar {
		display flex
		width 100%
		justify-content space-between
		padding-top	20px

		.left {
			.navbar-item {
				// font-family: 'Circular Bold'
			}
		}

		@media screen and (max-width: 380px) {
			flex-direction column

			.left {
				display	flex
				justify-content center

				.navbar-item {
					padding 30px 0 25px 0
				}
			}

			.right {
				display	flex
				justify-content center
			}
		}

		@media screen and (max-width: 600px) {
			padding-top 10px
		}

		.navbar-item {
			display	inline-block
			margin-right 30px
			padding	20px 0

			&.nuxt-link-active {
				color red
			}

			@media screen and (max-width: 480px) {
				margin-right 10px
			}

			@media screen and (max-width: 380px) {
				margin-right 30px
			}

			&:last-child {
				margin-right 0
			}
		}
	}
</style>

<script>
	export default {
		name: 'navbar',
	}
</script>
