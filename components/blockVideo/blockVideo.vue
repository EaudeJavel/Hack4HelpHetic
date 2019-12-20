<template>
  <div class="contentBg">
    <div class="bg">
      <div v-bind:class="[isWinner ? 'container-block-video container videoImg' : 'container-block-video container videoImg']">
        <div class="container-block-video__text">
          <div class="container-block-video__text__alias" v-if="edition && edition.length">
            {{ edition }}
          </div>
          <h2 class="container-block-video__text__title is-h2">{{ title }}</h2>
          <ul class="container-block-video__text__list" v-if="items && items.length">
            <li class="container-block-video__text__list__item" v-for="(item, i) in items" :key="`number-${i}`" v-html="item.text" >
            </li>
          </ul>
          <p v-if="text && text.length" v-html="text" class="textBlock"></p>
          <cta v-if="isButton" type="large" link="/edition" label="Découvrir" class="container-block-video__text__cta button-desktop"></cta >
        </div>
        <div class="container-block-video__video-container">
            <video controlsList="nodownload" disablePictureInPicture muted
              class="container-block-video__video-container__video" ref="video">
                <source :src="`/videos/${video}`" type="video/mp4" >
            </video>
            <div
              @click="play"
              class="playpause"
              ref="playpause"
            >
            </div>
        </div>
        <div class="isWinner" v-if="!isSay">
          <p class="text">Rendez-vous le 20 décembre pour connaître le projet retenu qui sera incubé par HETIC !</p>
        </div>
        <div class="button-tablet" v-if="isButton">
          <cta type="large" link="/edition" label="Découvrir" class="container-block-video__text__cta button"></cta >
        </div>
      </div>
    </div>

    <!-- IF WINNER -->
    <div class="winner" v-if="isSay">
      <div v-bind:class="[isSay ? 'container-block-video container isImg' : 'container-block-video container isImg']">
        <div v-swiper:mySwiper="swiperOption" v-if="listImages && listImages.length">
          <div class="swiper-wrapper">
            <img ref="img" :src="`/images/gagnant/${item.image}`" v-for="(item, i) in listImages" :key="`number-${i}`" class="swiper-slide img">
          </div>
        </div>
        <div class="contentText-placer">
          <div class="contentText">
            <h2 class="is-h2 text">{{ titleWinner }}</h2>
            <div class="text" v-html="description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.isWinner {
  width: 100%;

  .text {
    color: $black;
    font-weight: 800;
    font-family: $metropolis;
    font-size: 30px;
    margin-top: 30px;
    line-height: 1.4;

    @include tabletLandscape {
      font-size: 20px;
    }
  }
}

.winner {
  position: relative;

  .swiper-container {
    width: 50%;
    height: 450px;
    margin-left: 0;

    @include tabletLandscape {
      display: none;
    }
  }

  .contentText-placer {
    width: 40% !important;
    padding-top: 10px !important;

    @include tabletLandscape {
      width: 100% !important;
    }
  }

  .text {
    /deep/ h2 {
      font-family: $nunito;
      font-weight: 600;
      font-size: 23px;
      line-height: 1.7;
      color: $black;
    }

    /deep/ p {
      font-family: $nunito;
      font-size: 16px;
      line-height: 1.7;
    }

    /deep/ a {
      font-family: $nunito;
      font-size: 16px;
      line-height: 1.7;
      border-bottom: 1px solid $black;
    }
  }
}

.contentBg {
  background: $orangeGradient;
  padding: 40px;

  @include mobile {
    padding: 20px;
  }

  &.container-block-video {
    padding: 0 95px 0 108px;
  }
}

.videoImg {
  flex-wrap: wrap;
  box-shadow: $box-shadow;
  z-index: 2;
}

.home {
  .isWinner {
    display: none;
  }
}

.isImg {
  align-items: flex-start !important;

  @include tabletLandscape {
    margin-top: 20px;
  }

  .contentText-placer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: $white;
    width: 100%;

    @include tabletLandscape {
      padding: 40px 0 0;
      min-height: inherit;
    }

    .text {
      max-width: 480px;
      margin: 0 auto 30px;
      padding: 0 20px;

      @include tabletLandscape {
        max-width: 100%;
      }

      @include tablet {
        margin: 0 auto;
        padding: 0;
      }

      /deep/ br {
        display: flex;
        height: 30px;
        content: '';
      }
    }

    .is-h2 {
      @include tablet {
        margin-bottom: 20px;
      }
    }
  }

  .img {
    width: 60%;
    object-fit: contain;

    @include tabletLandscape {
      width: 100%;
    }
  }
}
.bg {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.textBlock {
  margin-top: 20px;

  /deep/ br {
    display: flex;
    height: 30px;
    content: '';
  }
}

.button {
  &-desktop {
    @include tabletLandscape {
      display: none;
    }
  }

  &-tablet {
    display: none;

     @include tabletLandscape {
      display: block;
      width: 100%;

      .button {
        margin: 30px auto 0;
        align-items: center;
        justify-content: center;
        display: flex;
      }
    }
  }
}

.container-block-video {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $white;
  max-width: 1360px;
  padding: 96px 95px 84px 108px;

  @include tabletLandscape {
    flex-direction: column;
    padding: 30px;
  }

    &__text {
      width: 38%;

      @include tabletLandscape {
        width: 100%;
      }

      &__alias {
        text-transform: uppercase;
        color: $orange;
        font-family: $metropolis;
        font-weight: 500;
      }

      &__title {
        margin-top: 20px;
      }

      &__list {
        margin-top: 20px;
        margin-bottom: 40px;

        @include tabletLandscape {
          margin-bottom: 0;
        }

        &__item {
          position: relative;
          font-size: 16px;
          line-height: 2;
          font-family: $metropolis;
          padding-left: 30px;
          margin-bottom: 10px;

          @include tabletLandscape {
            line-height: 1.3;
          }

          &:before {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: $orange;
            left: 0;
            top: 10px;
          }

          /deep/ span {
            color: $orange;
            font-weight: 500;
          }

          /deep/ b {
            font-weight: bold;
          }
        }
      }
  }

    &__video-container {
      max-width: 680px;
      width: 47%;
      display: flex;
      justify-content: center;
      align-items: center;
      filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));

      @include tabletLandscape {
        width: 100%;
        max-width: 100%;
        margin-top: 20px;
      }

      video {
        width: 100%;
      }

      .playpause {
        background-image: url("../../assets/icons/play-button.svg");
        background-repeat: no-repeat;
        width: 24%;
        height: 24%;
        position: absolute;
        background-size: contain;
        background-position: center;

        &:hover {
          cursor: pointer;
        }
      }
    }
}


</style>


<script>
  import { mapGetters } from 'vuex'
  import cta from '@/components/cta/cta.vue'

	export default {
    name: 'blockVideo',
    components: {
      cta,
    },
    props: {
      titleWinner: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      listImages: {
        type: Array,
        default: () => []
      },
      edition: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default: () => []
      },
      video: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      isButton: {
        type: Boolean,
        default: false
      },
      isWinner: {
        type: Boolean,
        default: false
      },
      isSay: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      videoElement () {
        return this.$refs.video
      },
      playpause () {
        return this.$refs.playpause
      }
    },
    methods: {
      play: function() {
        this.videoElement.play()
        this.videoElement.controls = "controls"
        this.playpause.style.display = "none"
      }
    },
    data () {
      return {
        swiperOption: {
          slidesPerView: 1,
          centeredSlides: true,
          autoplay: {
            delay: 5000,
          },
        }
      }
    }
  }

</script>

