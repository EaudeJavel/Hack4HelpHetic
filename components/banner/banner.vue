<template>
	<div class="banner">
    <div class="card">
      <div class="card-content">
        <div class="card-presentation">
          <img class="card-logo" src="~/assets/images/logo-hetic.svg">
          <p class="card-label">{{ texts.BANNER_LABEL }}</p>
        </div>

        <h1 class="is-h1">{{ texts.BANNER_H1 }}</h1>
        <h2 v-html="texts.BANNER_TITLE" class="title"></h2>
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
	.banner {
    position: relative;
    width: 100%;
    height: 85vh;
    margin-top: 80px;
    min-height: 500px;

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
      width: 100%;
      z-index: 2;
      max-width: 480px;
      background-color: $white80;
      height: 100%;

      @include mobile {
        max-width: 100%;
      }

      &-content {
        position: absolute;
        z-index: 2;
        padding: 0 66px 0 80px;
        top: 50%;
        transform: translateY(-50%);

        @include mobile {
          padding: 0 20px;
        }
      }

			&-presentation {
				display: flex;
				align-items: center;
        margin-bottom: 33px;

        @include mobile {
          margin-bottom: 20px;
        }
      }

      &-logo {
        width: 92px;

        @include mobile {
          width: 72px;
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
        margin-left: 30px;

        @include mobile {
         font-size: 10px;
        }
			}
		}

		.title {
			font-size: 24px;
      font-family: $metropolis;
      font-weight: 600;
			color: $black;
			letter-spacing: 2px;
			margin: 22px 0 22px;
      line-height: 1.4;

      @include mobile {
        max-width: 80%;
        font-size: 24px;
        margin: 20px 0 40px;
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

