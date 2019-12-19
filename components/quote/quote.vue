<template>
	<div class="quote container">
    <div class="quoteBlock">
      <div class="img" v-bind:style="{backgroundImage: 'url(' + `/images/${image}` + ')'}"/>
      <div class="quoteBlock-block">
        <h3 class="title">{{ title }}</h3>
        <div class="job">
          <p>{{ name }} </p>
          <p>{{ job }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .quote.container {
    padding: 0 40px 0 0;

    @include tablet {
      padding: 0 20px;
    }
  }

  .quoteBlock {
    display: flex;

    @include tablet {
      flex-direction: column;
    }

    .img {
      min-width: 60%;
      width: 60%;
      height: 640px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      @include tablet {
        min-width: 100%;
        width: 100%;
        height: 280px;
      }
    }

    &-block {
      padding: 100px 38px 0;

      @include tabletLandscape {
        padding: 60px 0 50px;
      }
      .job {
        padding-left: 40px;
      }

      .title {
        position: relative;
        font-size: 40px;
        font-family: $metropolis;
        font-weight: 200;
        font-style: italic;
        line-height: 1.3;
        margin-bottom: 100px;
        padding-left: 60px;

        @include tabletLandscape {
          font-size: 32px;
          margin-bottom: 20px;
          padding-right: 50px;
          padding-left: 40px;
        }

        &:before,
        &:after {
          content:'';
          position: absolute;
          display: block;
          width: 64px;
          height: 45px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;

          @include tabletLandscape {
            width: 40px;
            height: 28px;
          }
        }

        &:before {
          background-image: url('~@/assets/images/quote-orange.png');
          top: -70px;
          left: -10px;

          @include tabletLandscape {
            top: -30px;
            left: 20px;
          }
        }

        &:after {
          background-image: url('~@/assets/images/quote-orange2.png');
          bottom: -60px;
          right: -10px;

          @include tabletLandscape {
            bottom: -30px;
            right: -10px;
          }
        }
      }
    }
  }
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: "quote",
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
      name: {
        type: String,
        default: true
      },
      job: {
        type: String,
        default: true
      },
      image: {
        type: String,
        default: true
      },
    },
	}
</script>

