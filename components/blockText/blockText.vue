<template>
  <div class="blockText">
    <div class="container">
      <img class="img" src="~/assets/images/sans-abri.png">
      <div class="contentText">
        <h2 class="is-h2 text">{{ texts.INITIATIVE_TITLE }}</h2>
        <p class="text" v-html="texts.INITIATIVE_TEXT"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
  }
  .blockText {
    padding-top: 160px;
    padding-bottom: 225px;
    padding-left: 0;
    background: $orangeGradient;

    @include tabletLandscape {
      background: $white;
      padding: 100px 20px 75px;
    }

    .contentText {
      background: $white;
      padding: 100px 0 140px;
      width: 50%;

      @include tabletLandscape {
        padding: 0;
        width: 100%;
      }

      .is-h2 {
        color: $orange;
      }

      .text {
        max-width: 440px;
        margin: 0 auto 30px;
      }
    }

    .img {
      width: 50%;
      height: 590px;
      object-fit: cover;

      @include tabletLandscape {
        display: none;
      }
    }
  }
</style>

<script>
  import { mapGetters } from 'vuex'

	export default {
		name: 'blockImg',
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

