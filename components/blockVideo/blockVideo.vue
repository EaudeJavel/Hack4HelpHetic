<template>
  <div class="bg">
    <div class="container">
      <div class="container__text">
        <div class="container__text__alias">Édition 2019</div>
        <h1 class="container__text__title">Créer une solution utilisant le numérique pour que la société intègre mieux les personnes sans-abris</h1>
        <ul class="container__text__list">
          <li class="container__text__list__item">
            <img src="~/assets/images/puce.svg" alt="">
            2 promotions concernées, soit 180 étudiants
          </li>
          <li class="container__text__list__item">
            <img src="~/assets/images/puce.svg" alt="">
            2 semaines dédiées du 9 au 20 décembre 2019 au sein du campus HETIC
          </li>
          <li class="container__text__list__item">
            <img src="~/assets/images/puce.svg" alt="">
            Un travail en collaboration avec l'écosystème de la tech (entrepreneurs et experts métiers engagés)
          </li>
        </ul>
        <cta type="large" link="/more" label="Découvrir l'édition 2019" class="container__text__cta"></cta >
      </div>
        <div class="container__video">
          <video src="~/assets/videos/video.mp4" controls autoplay type="video/mp4"></video>
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
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 540px;
  margin-left: 40px;
  margin-right: 40px;

    &__text {
      width: 45%;
      transform: translateX(20px);

      &__alias {
        text-transform: uppercase;
        color: #FF7A00;
        font-family: "metropolis", arial;
      }

      &__title {
        max-width: 480px;
        margin: 0 auto 30px;        
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

      video {
        width: 560px;
        height: 400px;
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

