<template>
  <div class="blockText">
    <div class="container" v-if="isImageLeft">
      <img ref="img" class="img" :src="`/images/${image}`">
      <div class="contentText-placer">
        <div class="contentText">
          <h2 class="is-h2 text">{{ title }}</h2>
          <p class="text" v-html="text"></p>
        </div>
      </div>
    </div>

    <div class="container" v-else>
      <div class="contentText-placer">
        <div class="contentText">
          <h2 class="is-h2 text">{{ title }}</h2>
          <p class="text" v-html="text"></p>
        </div>
      </div>
      <img ref="img" class="img" :src="`/images/${image}`">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    @include tablet {
      padding-right: 20px;
    }
  }

  .blockText {
    background: $orangeGradient;

    @include tablet {
      background: $white;
    }

    .contentText-placer {
      display: flex;
      justify-content: center;
      align-items: center;
      background: $white;
      width: 100%;
      min-height: 780px;

      @include tablet {
        padding: 50px 0 95px;
        min-height: auto;
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
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  import { TweenLite } from 'gsap'
  import imgBlock from './img.vue'

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
<<<<<<< HEAD
=======
      image: {
        type: String,
        default: true
      },
      isImageLeft: {
        type: Boolean,
        default: true
      },
>>>>>>> 4f62bb6a14306f1d119277ae0540b5c935362351
    },
		computed: {
			...mapGetters({
				getTexts: "text/getTexts"
			}),
			texts() {
				return this.getTexts
			},
    },
<<<<<<< HEAD
    components: {
      imgBlock
    },
=======
    // components: {
    //   parallax
    // },
    // mounted() {
    //   const { img } = this.$refs
    //   // var tl = new TimelineLite()

    //   // tl.to(img, 1, { y: scroll, ease:Linear.easeNone })

    // }
>>>>>>> 4f62bb6a14306f1d119277ae0540b5c935362351
	}
</script>

