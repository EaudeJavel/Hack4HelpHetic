<template>
  <div class="blockText">
    <div class="container">
      <div class="contentText-placer">
        <div class="contentText">
          <h2 class="is-h2 text">{{ title }}</h2>
          <p class="text" v-html="text"></p>
        </div>
      </div>
      <div v-swiper:mySwiper="swiperOption" v-if="list && list.length">
        <div class="swiper-wrapper">
          <img ref="img" :src="`/images/terrain/${item.image}`" v-for="(item, i) in list" :key="`number-${i}`" class="swiper-slide img">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: relative;

    @include tablet {
      padding-right: 20px;
    }
  }

  .blockText {
    background: $orangeGradient;

    @include tabletLandscape {
      background: $white;
    }

    .contentText-placer {
      display: flex;
      justify-content: center;
      align-items: center;
      background: $white;
      width: 40%;
      min-height: 780px;

      @include tabletLandscape {
        padding: 50px 0;
        min-height: inherit;
        width: 100%;
      }

      .text {
        max-width: 480px;
        margin: 0 auto 30px;
        padding: 0 20px;

        @include tablet {
          margin: 0 auto;
          padding: 0;
        }
      }

      .is-h2 {
        @include tablet {
          margin-bottom: 20px;
        }
      }
    }

    .swiper-container {
      width: 60%;

      @include tabletLandscape {
        display: none;
      }
    }
  }
</style>

<script>
  import { mapGetters } from 'vuex'

	export default {
    name: 'blockImg',
    props: {
      title: {
        type: String,
        default: true
      },
      text: {
        type: String,
        default: true
      },
      list: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      ...mapGetters({
          getTexts: "text/getTexts"
      }),
      texts() {
          return this.getTexts
      },
    },
    data () {
      return {
        swiperOption: {
          // slidesPerView: 2
          // spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },

        }
      }
    }
	}
</script>

