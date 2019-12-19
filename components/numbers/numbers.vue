<template>
	<div class="numbers">
    <div class="numbers-grid">
      <h2 class="is-h2">{{ title }}</h2>
      <ul v-if="list && list.length" class="numbers-content">
        <li v-for="(item, i) in list" :key="`number-${i}`" class="item">
          <p v-html="item.number" class="item-number"></p>
          <p v-html="item.title" class="item-title"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .numbers {
    background: $orangeGradient2;
    padding: 0 40px;
    margin-top: -1px;
    margin-bottom: -1px;

    @include tablet {
      padding: 40px;
      margin-top: 0;
      margin-bottom: 0;
    }
    @include mobile {
      padding: 20px;
    }

    &-content {
      display: flex;

      @include tabletLandscape {
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }

    &-grid {
      background: $white;
      padding: 100px 114px 120px 70px;
      max-width: 1360px;
      margin: 0 auto;

      @include tabletLandscape {
        padding: 60px 30px;
      }

      .is-h2 {
        margin-bottom: 80px;

        @include tabletLandscape {
          margin-bottom: 40px;
        }
      }

      .item {
        width: 25%;
        margin: 0 14px;

        @include tabletLandscape {
          width: 45%;
          margin: 0 0 30px;
        }

        @include mobile {
          width: 100%;
        }

        &-title {
          text-align: center;
          font-size: 21px;
          line-height: 1.3;

          /deep/ span {
            color: $orange;
            font-weight: bold;
          }
        }

        &-number {
          font-family: $metropolis;
          font-weight: bold;
          color: $orange;
          font-size: 100px;
          line-height: 1;
          text-align: center;

          @include tablet {
            font-size: 80px;
          }

          /deep/ span {
            font-family: $metropolis;
            font-weight: 600;
            color: $orange;
            font-size: 32px;
          }
        }
      }
    }
  }
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: "numbers",
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
	}
</script>

