<template>
	<div class="blockCoachs container">
    <div class="blockCoachs-grid">
      <h2 class="is-h2 title">{{ title }}</h2>

      <div v-swiper:mySwiper="swiperOption" v-if="list && list.length">
        <div class="swiper-wrapper blockCoachs-content">
          <div class="coach swiper-slide" v-for="(item, i) in list" :key="`number-${i}`"
                v-bind:style="{backgroundImage: 'url(' + `/images/coachs/${item.image}` + ')'}">
            <p class="coach-name">{{ item.name }}</p>
            <p class="coach-job">{{ item.job }}</p>
            <a :href="item.link" target="_blank" class="coach-linkedin"></a>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
	</div>
</template>

<style lang="scss" scoped>
  .blockCoachs {
    position: relative;

    .swiper-button-next,
    .swiper-button-prev {
      width: 75px;
      height: 75px;
      box-shadow: $box-shadow;
      outline: none;

      @include tabletLandscape {
        width: 45px;
        height: 45px;
      }
    }

    .swiper-button-next {
      background-image: none;
      right: 50px;

      @include tabletLandscape {
        top: 10px;
        right: 40px;
      }

      @include mobile {
        right: 20px;
      }

      &:before {
        content: '';
        position: absolute;
        background-image: url('~@/assets/images/arrow-left.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 12px;
        height: 23px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        @include tabletLandscape {
          width: 12px;
          height: 23px;
        }
      }
    }

    .swiper-button-prev {
      background-image: none;
      left: 50px;

      @include tabletLandscape {
        right: 110px;
        left: inherit;
        top: 10px;
      }

      @include mobile {
        right: 80px;
      }

      &:before {
        content: '';
        position: absolute;
        background-image: url('~@/assets/images/arrow-right.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 12px;
        height: 23px;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        @include tabletLandscape {
          width: 12px;
          height: 23px;
        }
      }
    }

    &-grid {
      width: 80%;
      margin: 150px auto 134px;

      @include tabletLandscape {
        width: 100%;
        margin: 0px auto 60px;
      }

      .title {
        padding-right: 120px;
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

      &-linkedin {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 10px;

        &:before {
          content:"";
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: url('~@/assets/images/linkedin.svg');
          background-size: cover;
          background-repeat: no-repeat;
        }
      }

      &-name {
        position: absolute;
        color: $white;
        background: $orange;
        padding: 2px 5px;
        font-size: 16px;
        font-family: $metropolis;
        font-weight: 800;
        top: 70%;
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
        top: 80%;
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

