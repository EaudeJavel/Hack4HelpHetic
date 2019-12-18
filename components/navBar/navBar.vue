<template>
	<div class="navBar">
    <a href="/"><img class="logo-hack" src="~/assets/images/logo-hack.svg"></a>
    <div class="navLinks">
      <a href="/" class="navLinks-item" v-bind:class="[page === 'home' ? 'is-active' : '']">Accueil</a>
      <a href="/more" class="navLinks-item" v-bind:class="[page === 'more' ? 'is-active' : '']">Edition 2019</a>
    </div>
	</div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

	.navBar {
    position: fixed;
    width: 100%;
    box-shadow: $box-shadow;
    z-index: 20;
    top: 0;
    background: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;

    @include mobile {
      padding: 0 20px;
    }

		.logo-hack {
			width: 70px;
    }

    .navLinks {
      display: flex;
      align-items: center;

      &-item {
        position: relative;
        font-size: 16px;
        font-weight: 600;
        color: $black;
        margin-left: 40px;
        padding: 32px 0;

        &.is-active {
          color: $purple2;

          &:before {
            content: '';
            height: 4px;
            background: $purple2;
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }

        &:hover {
          color: $purple2;
        }
      }
    }
	}
</style>

<script>
	import { mapGetters } from 'vuex'

	export default {
    name: "navBar",
		computed: {
			...mapGetters({
				getTexts: "text/getTexts"
			}),
			texts() {
				return this.getTexts
			},
    },
    props: {
      page: {
        type: String,
        required: false
      },
    }
	}
</script>

