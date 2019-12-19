<template>
  <div class="coverImg">
    <div class="img"></div>
    <div class="container">
      <div class="block" v-animate="{speed: 10}">
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
      margin-bottom: 115px;
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

        @include tablet {
          position: relative;
          min-width: auto;
          padding: 20px 20px 105px 20px;
          bottom: inherit;
          right: inherit;
          margin: -200px auto 0;
          box-shadow: $box-shadow;
        }

        .is-h2 {
          margin-bottom: 30px;
        }

        .description {
          max-width: 375px;
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

