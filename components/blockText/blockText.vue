<template>
  <div class="blockText">
    <div class="container" v-if="isImageLeft">
      <img ref="img" class="img" :src="`/images/${image}`" v-animate="{speed: 2}">
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
      <img ref="img" class="img2" :src="`/images/${image}`">
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
      width: 100%;
      min-height: 780px;

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
      }

      .is-h2 {
        @include tablet {
          margin-bottom: 20px;
        }
      }
    }

    .img {
      width: 60%;
      margin-top: 13%;

      @include tabletLandscape {
        display: none;
      }
    }
    .img2 {
      width: 60%;

      @include tabletLandscape {
        display: none;
      }
      }
  }
</style>

<script>
  import { mapGetters } from 'vuex'
  import { TweenLite } from 'gsap'

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
      image: {
        type: String,
        default: true
      },
      isImageLeft: {
        type: Boolean,
        default: true
      },
    },
		computed: {
			...mapGetters({
				getTexts: "text/getTexts"
			}),
			texts() {
				return this.getTexts
			},
    },
	}
</script>

