<template>
  <div class="coverImg">
    <div class="img"></div>
    <div class="container">
      <div class="block" v-animate="{speed: 7}">
        <h2 class="is-h2 text">{{ title }}</h2>
        <p class="description text" v-html="text"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .coverImg {
    display: block;

    @include tablet {
      margin-bottom: 0;
    }

    .img {
      background-image: url('~assets/images/bg-banner.png');
      background-size: cover;
      background-repeat: no-repeat;
      height: 750px;

      @include tablet {
        height: 500px;
      }
    }

    .container {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;

      .block {
        position: absolute;
        bottom: 50px;
        background: $white;
        padding: 70px 64px 82px 70px;
        min-width: 555px;

        @include tabletLandscape {
          min-width: auto;
          padding: 70px 64px 82px 70px;
          bottom: -60px;
          margin: 0 auto;
          box-shadow: $box-shadow;
          left: 40px;
          right: 40px;
        }

        @include tablet {
          padding: 20px 20px 20px 20px;
        }

        @include mobile {
          left: 20px;
          right: 20px;
        }

        .is-h2 {
          margin-bottom: 30px;
        }

        .description {
          max-width: 375px;

          @include tabletLandscape {
            max-width: inherit;
          }
        }
      }
    }
  }
</style>

<script>
  import { mapGetters } from 'vuex'

	export default {
    name: 'coverImg',
    props: {
      title: {
        type: String,
        default: true
      },
      text: {
        type: String,
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
		}
	}
</script>

