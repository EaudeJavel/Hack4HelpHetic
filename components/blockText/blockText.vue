<template>
  <div class="blockText">
    <div class="container">
      <div class="contentText">
        <h2 class="is-h2 text">{{ title }}</h2>
        <p class="text" v-html="text"></p>
      </div>
      <img class="img" :src="`/images/${image}`">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: flex-start;
    padding-right: 0;

    @include tablet {
      padding-right: 20px;
    }
  }

  .blockText {
    padding-top: 155px;
    padding-bottom: 80px;
    padding-left: 0;

    @include tablet {
      background: $white;
      padding: 0;
    }

    .contentText {
      background: $white;
      padding: 100px 0 96px;
      width: 50%;
      box-shadow: $box-shadow;
      margin-top: 30px;

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
      height: 590px;
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

