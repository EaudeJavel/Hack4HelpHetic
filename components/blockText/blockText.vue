<template>
  <div class="blockText">
    <div class="container">
      <img class="img" :src="`/images/${image}`">
      <div class="contentText-placer">
        <div class="contentText">
          <h2 class="is-h2 text">{{ title }}</h2>
          <p class="text" v-html="text"></p>
        </div>
      </div>      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: flex-start;
    padding-right: 0;
    background: linear-gradient(#6326FC, #7B3DCA);
    justify-content: center;
    align-items: center;

    @include tablet {
      padding-right: 20px;
    }
  }

  .blockText {
    padding-bottom: 80px;
    padding-left: 0;

    @include tablet {
      background: $white;
      padding: 0;
    }

    .contentText-placer {
      background: $white;
      width: 100%;
      height: 590px;
      box-shadow: $box-shadow;
      display: flex;
      justify-content: center;
      align-items: center;

      @include tablet {
        width: 100%;
        box-shadow: none;
        padding: 50px 0 75px;
        margin-top: 0;
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
      width: 50%;
      height: 430px;
      object-fit: cover;

      @include tablet {
        display: none;
      }
    }
  }
</style>

<script>
  import { mapGetters } from 'vuex'

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

