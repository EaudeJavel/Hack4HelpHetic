<template>
	<div class="navbar">
		<div class="left">
			<nuxt-link to="/" exact class="navbar-item">
				logo
			</nuxt-link>
		</div>
		<div class="right">
			<nuxt-link to="/" exact class="navbar-item">
				Pourquoi ?
			</nuxt-link>
			<nuxt-link to="/page-2" exact class="navbar-item">
				Comment ?
			</nuxt-link>
			<nuxt-link to="/page-3" exact class="navbar-item">
				Qui ?
			</nuxt-link>
			<nuxt-link to="/page-1" exact class="navbar-item">
				Contact
			</nuxt-link>
			<cta
				label="Découvrir"
				type="header-cta"
				link="decouvrir"
				>
			</cta>
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

		.right {
			display flex
			flex-wrap wrap
			justify-content center
			align-items center
		}

		.header-cta {
			width 115px
			height 35px
			background-color #6326FC
			display flex
			justify-content center
			align-items center
			border-radius 5px
			color white
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

import cta from '~/components/cta/cta.vue'

	export default {
		name: 'navbar',

		components: {
			cta
		}
	}
</script>
