<template>
	<div class="brands container">
    <div class="brands-grid">
      <h2 class="is-h2">{{ title }}</h2>

      <div class="brands-list" v-if="list && list.length">
        <a class="brands-list-item" :href="item.lien" target="_blank" v-for="(item, i) in list" :key="`number-${i}`">
          <img :src="`/images/partenaires/${item.image}`"/>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .brands {
    &-grid {
			width: 80%;
			margin: 0 auto 80px;

			@include tabletLandscape {
				width: 100%;
			}
    }

    &-list {
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &-item {
        margin: 0 0 50px;

        @include mobile {
          width: 50%;

          img {
            max-width: 80%;
            max-height: 80px;
            margin: 0 auto;
            display: block;
          }
        }
      }
    }
  }
</style>

<script>
  import { mapGetters } from 'vuex'

	export default {
		name: "brands",
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
      }
    }
	}
</script>

