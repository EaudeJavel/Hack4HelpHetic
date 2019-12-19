<template>
  <div class="bg">
    <div class="container-block-video container">
      <div class="container-block-video__text">
        <div class="container-block-video__text__alias" v-if="hasEdition && hasEdition.length">
          <p>{{ edition }}</p>
        </div>
        <h2 class="container-block-video__text__title is-h2">{{ title }}</h2>
        <ul class="container-block-video__text__list" v-if="items && items.length">
          <li class="container-block-video__text__list__item" v-for="(item, i) in items" :key="`number-${i}`" v-html="item.text" >
          </li>
        </ul>
        <p v-if="hasText" v-html="text" class="textBlock"></p>
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
</template>

<style lang="scss" scoped>

.bg {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $orangeGradient;
  padding: 40px;

  @include mobile {
    padding: 20px;
  }
}

.textBlock {
  margin-top: 20px;
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
      width: 45%;

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
      edition: {
        type: String,
        default: false
      },
      title: {
        type: String,
        default: true
      },
      items: {
        type: Array,
        required: false
      },
      video: {
        type: String,
        required: true
      },
      text: {
        type: String,
        default: false
      },
      isButton: {
        type: Boolean,
        default: false
      },
      hasText: {
        type: Boolean,
        default: false
      },
      hasEdition: {
        type: Boolean,
        default: false
      },
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

