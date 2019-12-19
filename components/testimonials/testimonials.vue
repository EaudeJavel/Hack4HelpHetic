<template>
	<div class="testimonials container">
		<div class="testimonials-grid">
			<p class="is-h2">{{ title }}</p>

			<div class="testimonials-content" v-if="list && list.length">
				<div class="testimonials-item" v-for="(item, i) in list" :key="`number-${i}`">
					<div class="testimonials-bg" v-bind:style="{backgroundImage: 'url(' + `/images/${item.image}` + ')'}"></div>
					<div class="testimonials-text">
						<p class="testimonials-item-name">{{ item.name }}</p>
						<p class="testimonials-item-job">{{ item.job }}</p>
						<p class="testimonials-item-job">{{ item.entreprise }}</p>
						<p class="testimonials-item-quote"><span>“</span>{{ item.quote }}<span>”</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.testimonials {
		position: relative;
		margin: 130px auto 150px;

		@include tabletLandscape {
			margin: 60px auto 50px;
		}

		&:	,
		&:after {
			content:'';
			position: absolute;
			display: block;
			width: 420px;
			height: 300px;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;

			@include tabletLandscape {
				display: none;
			}
		}

		&:before {
			background-image: url('~@/assets/images/quote.png');
			top: -20px;
			left: 3%;
		}

		&:after {
			background-image: url('~@/assets/images/quote2.png');
			bottom: -80px;
			right: 3%;
		}

		&-content {
			position: relative;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		&-grid {
			width: 80%;
			margin: 0 auto;

			@include tabletLandscape {
				width: 100%;
			}
		}

		&-text {
			padding: 20px;
		}

		&-bg {
			min-width: 230px;
			width: 230px;
			min-height: 280px;
			background-position: top;
			background-repeat: no-repeat;
			background-size: cover;

			@include tabletLandscape {
				height: 230px;
				min-height: 230px;
			}

			@include mobile {
				width: 100%;
			}
		}

		&-item {
			display: flex;
			width: calc(50% - 45px);
			box-shadow: $box-shadow;
			margin-top: 60px;
			z-index: 2;
			background: $white;

			@include tabletLandscape {
				width: 100%;
				margin-top: 40px;
			}

			@include mobile {
				flex-direction: column;
			}

			img {
				width: 230px;
				min-height: 280px;
				object-fit: cover;

				@include tabletLandscape {
					width: auto;
					min-height: auto;
					height: 190px;
				}

				@include mobile {
					width: auto;
					min-height: auto;
					height: 170px;
				}
			}

			&-name {
				font-family: $metropolis;
				font-weight: 500;
				font-size: 18px;
				line-height: 1.4;
				color: $orange;
				letter-spacing: -1px;
			}

			&-job {
				font-family: $metropolis;
				font-weight: 300;
				font-size: 14px;
				line-height: 1.4;
				letter-spacing: -1px;
				color: $grey;
			}

			&-quote {
				font-family: $metropolis;
				font-weight: 500;
				font-size: 18px;
				line-height: 1.3;
				color: $black;
				letter-spacing: -1px;
				margin-top: 20px;

				span {
					color: $orange;
				}
			}
		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: "testimonials",
		computed: {
			...mapGetters({
				getTexts: "text/getTexts"
			}),
			texts() {
				return this.getTexts
			},
		},
		props: {
      title: {
        type: String,
        default: true
      },
      list: {
        type: Array,
        default: true
      },
    },
	}
</script>

