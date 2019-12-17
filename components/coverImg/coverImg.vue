<template>
  <div class="coverImg">
    <div class="img"></div>
    <div class="container">
      <div class="block">
        <h2 class="is-h2 text">{{ title }}</h2>
        <p class="text" v-html="text"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .coverImg {
    display: block;
    margin-bottom: 70px;

    .img {
      background-image: url('~assets/images/bg-banner.png');
      background-size: cover;
      background-repeat: no-repeat;
      height: 594px;

      @include tablet {
        height: 300px;
      }
    }

    .container {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;

      .block {
        position: absolute;
        bottom: -70px;
        right: 40px;
        background: $white;
        padding: 71px;
        max-width: 555px;

        @include tablet {
          position: relative;
          max-width: auto;
          padding: 30px;
          bottom: inherit;
          right: inherit;
          margin: -40px auto 0;
        }

        .is-h2 {
          margin-bottom: 30px;
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

