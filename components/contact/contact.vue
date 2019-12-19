<template>
	<div class="contact">
    <div class="contact-content">
      <h2 class="is-h2" v-html="title"></h2>
      <ul v-if="list && list.length">
        <li v-for="(item, i) in list" :key="`number-${i}`">
          <p v-html="item.text"></p>
        </li>
      </ul>
      <ul v-if="texts.KEYS && texts.KEYS.length">
    </ul>
      <p class="contact-content-info" v-html="description"></p>
    </div>
	</div>
</template>

<style lang="scss" scoped>
  .contact {
    background: $orangeGradient;
    padding: 40px;

    @include mobile {
      padding: 20px;
    }

    &-content {
      background: $white;
      padding: 56px 72px 58px;
      max-width: 1360px;
      margin: 0 auto;

      @include mobile {
        padding: 30px;
      }

      ul {
        margin: 40px 0;

        @include mobile {
          margin: 20px 0;
        }

        li p {
          position: relative;
          font-size: 21px;
          font-family: $metropolis;
          padding-left: 30px;
          margin-bottom: 28px;

          @include mobile {
            margin-bottom: 15px;
          }

          &:before {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: $orange;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }

          /deep/ span {
            color: $orange;
            font-weight: 500;
          }
        }
      }

      &-info {
        font-size: 21px;
        font-family: $metropolis;

        /deep/ a {
          color: $purple2;
          font-weight: 500;
        }
      }
    }
  }
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: "contact",
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
        required: true
      },
      list: {
        type: Array,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
	}
</script>

