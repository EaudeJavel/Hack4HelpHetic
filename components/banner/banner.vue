<template>
	<div class="banner">
    <div class="container">
      <div class="card">
        <div class="card-presentation">
          <img class="card-logo" src="~/assets/images/logo-hetic.svg">
          <p class="card-label">{{ texts.BANNER_LABEL }}</p>
        </div>

        <h1 class="is-h1">HACK4HELP</h1>
        <!-- <img class="logo-hack" src="~/assets/images/logo-hack.svg"> -->
        <p v-html="texts.BANNER_TITLE" class="title"></p>
        <cta type="large" link="/more" :label="texts.BANNER_ACTION" class="button"/>
      </div>
    </div>
    <video autoplay loop playsinline muted class="video">
      <source src="~/assets/videos/video.mp4" type="video/mp4">
    </video>
    <div class="imageBg"></div>
	</div>
</template>

<style lang="scss" scoped>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

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
			padding: 75px 115px 110px;
      box-shadow: $box-shadow;
      max-height: 90%;

      @include tabletLandscape {
        left: 20px;
        max-width: 450px;
        padding: 75px 50px 110px;
      }

      @include mobile {
        padding: 18px;
        left: 0;
        top: 70%;
        max-width: 250px;
        min-height: auto;
        padding: 40px 20px 55px;
      }

      .is-h1 {
        color: $black;
      }

			&-presentation {
				display: flex;
				align-items: center;
        margin-bottom: 35px;

        @include mobile {
          margin-bottom: 25px;
        }
      }

      &-logo {
        width: 92px;

        @include mobile {
          width: 72px;
        }
      }

      .button {
        @include mobile {
         display: none;
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

        @include mobile {
         font-size: 10px;
        }
			}
		}

		.title {
			font-size: 24px;
			font-family: $metropolis;
			font-weight: 600;
			color: $purple4;
			letter-spacing: 2px;
			margin: 10px 0 40px;
			line-height: 1.4;

      @include mobile {
        font-size: 18px;
        margin: 20px 0 0;
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

