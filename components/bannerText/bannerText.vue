<template>
    <div class="bannerText">
      <div class="container">
        <p class="edition">{{ edition }}</p>
        <h1 class="title" v-html="title"></h1>

        <div class="rectangle" v-animate="{speed: -1.2}">
          <div class="rectangle__before"></div>
        </div>
         <div class="rectangle-small" v-animate="{speed: -1.2}">
           <div class="rectangle-small__before" ></div>
         </div>
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

      &__before {
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
       @include tablet {
        display: none;
      }
    }

    .rectangle {
      width: 600px;
      height: 600px;
      position: absolute;
      z-index: 0;
      left: -290px;
      top: -150px;

      &__before {
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
      text-transform: uppercase;

      @include tabletLandscape {
        font-size: 30px;
      }
    }

    .title {
      font-size: 47px;
      font-family: $metropolis;
      line-height: 1.5;
      font-weight: 200;
      color: $white;
      z-index: 2;
      position: relative;

      /deep/ b {
        font-weight: 600;
      }

      @include tabletLandscape {
        font-size: 24px;
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

