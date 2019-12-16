<template>
	<div class="banner">
    <div class="card">
      <div class="card-presentation">
        <img class="card-logo" src="~/assets/images/logo-hetic.svg">
        <p class="card-label">{{ texts.BANNER_LABEL }}</p>
      </div>

      <img class="logo-hack" src="~/assets/images/logo-hack.svg">
      <p v-html="texts.BANNER_TITLE" class="title"></p>
      <cta type="large" link="/more" :label="texts.BANNER_ACTION" class="button"/>
    </div>
    <video autoplay loop playsinline muted class="video">
      <source src="~/assets/videos/video.mp4" type="video/mp4">
    </video>
    <div class="imageBg"></div>
	</div>
</template>

<style lang="scss" scoped>
	.banner {
    position: relative;
    width: 100%;
    height: calc(100vh - 80px);
    margin-top: 80px;

    .video,
    .imageBg {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .video {
      @include tabletLandscape {
        display: none;
      }
    }

    .imageBg {
      display: none;

      @include tabletLandscape {
        display: block;
        background-image: url('~assets/images/bg-banner.png');
        background-size: cover;
        background-repeat: no-repeat;
      }
    }

		.card {
      position: absolute;
      z-index: 2;
      top: 50%;
      transform: translateY(-50%);
			left: 40px;
      max-width: 555px;
			background-color: $white;
			padding: 45px 115px 120px;
      box-shadow: $box-shadow;
      max-height: 90%;

      @include tabletLandscape {
        padding: 18px;
        background-color: $white80;
        left: 0;
        top: 70%;
        max-width: 250px;
        min-height: auto;
      }

			&-presentation {
				display: flex;
				align-items: center;
        margin-bottom: 50px;

        @include tabletLandscape {
          display: none;
        }
      }

      &-logo,
      .button {
        @include tabletLandscape {
         display: none;
        }
      }

      .logo-hack {
        width: 100%;

        @include tabletLandscape {
          max-width: 160px;
        }
      }

			&-label {
				font-size: 13px;
				font-family: $metropolis;
				font-weight: bold;
				color: $grey;
				text-transform: uppercase;
				letter-spacing: 3px;
				opacity: 0.5;
        margin-left: 20px;

        @include tabletLandscape {
         display: none;
        }
			}
		}

		.title {
			font-size: 26px;
			font-family: $metropolis;
			font-weight: bold;
			color: $grey;
			letter-spacing: 2px;
			margin: 60px 0;
			line-height: 1.8;

			/deep/ span {
				background: $orange;
        color: $white;
        padding: 8px 10px;
      }

      @include tabletLandscape {
        font-size: 18px;
        margin: 40px 0 0;
        letter-spacing: 0;
      }
		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'
	import cta from '@/components/cta/cta.vue'

	export default {
		name: "banner",
		components: {
			cta
		},
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

