<template>
  <div class="bg">
    <div class="container-block-video">
      <div class="container-block-video__text">
        <div class="container-block-video__text__alias">{{ edition }}</div>
        <h1 class="container-block-video__text__title">{{ title }}</h1>
        <ul class="container-block-video__text__list">
          <li class="container-block-video__text__list__item" v-for="(item, i) in items" >
            {{ item.text }}
          </li>
        </ul>
        <cta type="large" link="/more" label="Découvrir l'édition 2019" class="container-block-video__text__cta"></cta >
      </div>
        <div class="container-block-video__video-container">
            <video controlsList="nodownload" disablePictureInPicture muted
              class="container-block-video__video-container__video" ref="video">
                <source src="~/assets/videos/video.mp4" type="video/mp4" >
            </video>
            <div
              @click="play"
              class="playpause"
              ref="playpause"
              >
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.bg {
  height: 600px;
  background: linear-gradient(#FF9900, #FF7A00);
  display: flex;
  justify-content: center;
  align-items: center;

  @include tablet {
    height: 100%;
  }

  @include tablet-intermediate {
    height: 100%;
  }
}

.container-block-video {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 540px;
  margin-left: 40px;
  margin-right: 40px;
  padding-left: 50px;
  padding-right: 50px;

  @include tablet {
    justify-content: initial;
    align-items: initial;
    flex-wrap: wrap;
    height: 100%;
    margin: 40px;
  }

  @include tablet-intermediate {
    justify-content: center;
    align-items: initial;
    flex-wrap: wrap;
    height: 100%;
    margin: 40px;
  }

    &__text {
      width: 45%;
      transform: translateX(20px);

      @include tablet {
        width: 100%;
        padding: 20px;
        transform: translateX(0px);
      }

      @include tablet-intermediate {
        width: 100%;
        padding: 20px;
        transform: translateX(0px);
      }

      &__alias {
        text-transform: uppercase;
        font-weight: bold;
        color: #FF7A00;
        font-family: "metropolis", arial;
      }

      &__title {
        max-width: 480px;
        font-family: "metropolis", arial;
        font-weight: bold;
        font-size: 32px;
        color: #333333;
        margin-top: 25px;
      }

      &__list {
        margin-top: 45px;
        font-family: "nunito", arial;

        &__item {
          margin-bottom: 20px;
        }
      }

      &__cta {
        font-family: "Metropolis", arial;

      }
  }

    &__video-container {
      max-width: 680px;
      width: 47%;
      display: flex;
      justify-content: center;
      align-items: center;
      // box-shadow: 0 4px 4px 25px;  
      filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));

      @include tablet {
        width: 100%;
        margin-bottom: 30px;
      }

      @include tablet-intermediate {
        width: 100%;
        margin-bottom: 30px;
      }

      video {
        width: 100%;
        border: solid 10px #FF7A00;        

        @include tablet {
          width: 92%;
        }
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
        default: true
      },
      title: {
        type: String,
        default: true
      },
      items: {
        type: Array,
        required: true
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

