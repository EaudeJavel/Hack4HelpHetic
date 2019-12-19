<template>
	<div class="blockCoachs container">
    <div class="blockCoachs-grid">
      <h2 class="is-h2">{{ title }}</h2>

      <div v-swiper:mySwiper="swiperOption" v-if="list && list.length">
        <div class="swiper-wrapper blockCoachs-content">
          <div class="coach swiper-slide" v-for="(item, i) in list" :key="`number-${i}`"
                v-bind:style="{backgroundImage: 'url(' + `/images/coachs/${item.image}` + ')'}">
           <p class="coach-name">{{ item.name }}</p>
            <p class="coach-job">{{ item.job }}</p>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
	</div>
</template>

<style lang="scss" scoped>
  .blockCoachs {

    &-grid {
      width: 80%;
      margin: 150px auto 134px;

      @include tabletLandscape {
        width: 100%;
      }

      @include tablet {
        margin: 0px auto 60px;
      }
    }

    &-content {
      margin-top: 50px;
    }
    .coach {
      position: relative;
      border: 10px solid $orange;
      width: 33.33%;
      height: 310px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;

      &-name {
        position: absolute;
        color: $white;
        background: $orange;
        padding: 2px 5px;
        font-size: 16px;
        font-family: $metropolis;
        font-weight: 800;
        bottom: 50px;
        left: 10px;
      }

      &-job {
        position: absolute;
        color: $black;
        background: $white;
        padding: 2px 5px;
        font-size: 12px;
        font-family: $metropolis;
        font-weight: 800;
        bottom: 30px;
        left: 10px;
      }
    }
  }

  .swiper-container {
    padding-bottom: 60px;

    .swiper-pagination {
      font-family: $metropolis;
      color: $grey;
    }
  }
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: "coachs",
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
      list: {
        type: Array,
        default: true
      },
    },
    data () {
      return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            560: {
              slidesPerView: 1,
              spaceBetween: 30
            },
          }
        }
      }
    }
	}
</script>

