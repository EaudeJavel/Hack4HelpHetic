<template>
	<div class="navBar container">
		<a href="/"><img class="logo-hack" src="~/assets/images/logo-hack.svg"></a>
		<div class="navLinks" v-if="links && links.length">
      <div v-for="(item, i) in links" :key="`number-${i}`">
        <a class="navLinks-item" :href="item.ancre">{{ item.title }}</a>
      </div>
			<cta :type="type" :link="link" :label="label" :isExternal="isExternal" :mailTo="mailTo" class="button"/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.navBar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    box-shadow: $box-shadow;
    z-index: 20;
    top: 0;
    background: $white;

		.logo-hack {
			width: 70px;
    }

    .navLinks {
      display: flex;
      align-items: center;

      &-item {
        font-size: 16px;
        font-weight: 600;
        color: $black;
        margin-right: 24px;
        transition: color 250ms ease-in-out;

        @include tabletLandscape {
          display: none;
        }

        &:hover {
          color: $grey;
        }
      }
    }
	}
</style>

<script>
	import { mapGetters } from 'vuex'
	import cta from '@/components/cta/cta.vue'

	export default {
		name: "navBar",
		components: {
			cta
    },
    props: {
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: false
      },
      isExternal: {
        type: Boolean,
        default: false
      },
      links: {
        type: Array,
        default: false
      },
      mailTo: {
        type: Boolean,
        default: false
      }
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

