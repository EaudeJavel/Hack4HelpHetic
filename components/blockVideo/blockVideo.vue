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
        <div class="button-tablet" v-if="isButton">
          <cta type="large" link="/edition" label="Découvrir" class="container-block-video__text__cta button"></cta >
        </div>
      </div>
    </div>

    <!-- IF WINNER -->
    <div class="winner" v-if="isWinner">
      <div v-bind:class="[isSay ? 'container-block-video container isImg' : 'container-block-video container isImg isWinnerBlur']">
        <img ref="img" class="img" :src="`/images/${image}`">
        <div class="contentText-placer">
          <div class="contentText">
            <h2 class="is-h2 text">{{ titleWinner }}</h2>
            <p class="text" v-html="description"></p>
          </div>
        </div>
      </div>
      <div class="isWinner" v-if="!isSay">
        <p class="text">Rendez-vous le 20 décembre pour connaître le projet retenu qui sera incubé par HETIC !</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.isWinner {
  position: absolute;
  background: rgba(255, 122, 0, 0.7);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  .text {
    color: $white;
    font-weight: 800;
    font-family: $metropolis;
    font-size: 52px;
    padding: 155px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    @include tabletLandscape {
      font-size: 35px;
      padding: 70px 40px;
    }
  }
}

.winner {
  position: relative;
}
.isWinnerBlur {
  filter: blur(94px);
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
  box-shadow: $box-shadow;
}

.isImg {
  align-items: flex-start !important;

  .contentText-placer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: $white;
    width: 100%;
    // min-height: 780px;

    @include tabletLandscape {
      padding: 50px 0;
      min-height: inherit;
    }

    .text {
      max-width: 480px;
      margin: 0 auto 30px;
      padding: 0 20px;

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

    @include tabletLandscape {
      display: none;
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
    padding: 40px;
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
        default: true
      },
      description: {
        type: String,
        default: true
      },
      image: {
        type: String,
        default: true
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
    }
  }

</script>

