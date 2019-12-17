<template>
  <div class="bg">
    <div class="container-block-video">
      <div class="container-block-video__text">
        <div class="container-block-video__text__alias">Édition 2019</div>
        <h1 class="container-block-video__text__title">Créer une solution utilisant le numérique pour que la société intègre mieux les personnes sans-abris</h1>
        <ul class="container-block-video__text__list">
          <li class="container-block-video__text__list__item">
            <img src="~/assets/images/puce.svg" alt="">
            2 promotions concernées, soit 180 étudiants
          </li>
          <li class="container-block-video__text__list__item">
            <img src="~/assets/images/puce.svg" alt="">
            2 semaines dédiées du 9 au 20 décembre 2019 au sein du campus HETIC
          </li>
          <li class="container-block-video__text__list__item">
            <img src="~/assets/images/puce.svg" alt="">
            Un travail en collaboration avec l'écosystème de la tech (entrepreneurs et experts métiers engagés)
          </li>
        </ul>
        <cta type="large" link="/more" label="Découvrir l'édition 2019" class="container-block-video__text__cta"></cta >
      </div>
        <div class="container-block-video__video">
          <video src="~/assets/videos/video.mp4" controls muted autoplay type="video/mp4"></video>
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
}

.container-block-video {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 540px;
  margin-left: 40px;
  margin-right: 40px;

  @include tablet {
    justify-content: initial;
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

    &__video {
      width: 47%;
      display: flex;
      justify-content: center;
      align-items: center;

      @include tablet {
        width: 100%;
      }

      video {
        width: 97%;

        @include tablet {
          width: 92%;
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
      cta
    },
	}
</script>

