<template>
    <div class="bannerText">
      <div class="container">
        <p class="edition">{{ edition }}</p>
        <h1 class="title" v-html="title"></h1>

        <div class="rectangle"></div>
         <div class="rectangle-small"></div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .bannerText {
    background: $orangeGradient2;
    padding: 135px 0 40px;
    margin-bottom: -1px;
    overflow: hidden;

    @include tabletLandscape {
      padding: 80px 0 40px;
    }

    .container {
      position: relative;
    }

    .rectangle-small {
      width: 500px;
      height: 500px;
      position: absolute;
      z-index: 0;
      right: 50px;
      top: 100px;

      &:before {
        content: "";
        background-image: url('~@/assets/images/rect-small.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(115deg);
      }

      @include tabletLandscape {
        right: -60px;
      }
    }

    .rectangle {
      width: 600px;
      height: 600px;
      position: absolute;
      z-index: 0;
      left: -290px;
      top: -150px;

      &:before {
        content: "";
        background-image: url('~@/assets/images/rect-small.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 100%;
        height: 100%;
      }

      @include tabletLandscape {
        right: -60px;
      }
    }

    .edition {
      font-size: 104px;
      font-weight: 600;
      font-family: $metropolis;
      line-height: 1.4;
      margin-bottom: 44px;
      color: $white;
      z-index: 2;
      position: relative;

      @include tabletLandscape {
        font-size: 60px;
      }
    }

    .title {
      font-size: 47px;
      font-family: $metropolis;
      line-height: 1.5;
      font-weight: 600;
      color: $white;
      z-index: 2;
      position: relative;

      /deep/ span {
        font-weight: 200;
      }

      @include tabletLandscape {
        font-size: 35px;
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
    },
    props: {
      title: {
        type: String,
        default: true
      },
      edition: {
        type: String,
        default: true
      },
    }
	}
</script>

