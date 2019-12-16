<template>
  <nuxt-link v-if="!isExternal" :to="link" exact class="button" :class="type" v-html="label"></nuxt-link>
  <a v-else :href="link" class="button" :class="type" v-html="label"></a>
</template>

<style lang="scss" scoped>
  .button {
    display: inline-block;
    font-family: $metropolis;
    background-color: $purple2;
    color: $white;
    font-weight: 600;
    text-align: center;
    border-radius: 4px;
    border: 1px solid $purple2;
    padding: 6px;
    transition: all 250ms ease-in-out;

    &:hover {
      background-color: $white;
      color: $purple2;
    }
  }

  .large {
    min-width: 255px;
    line-height: 1.4;
    font-size: 20px;
  }
</style>

<script>
	export default {
    name: 'cta',
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
        required: true
      },
      isExternal: {
        type: Boolean,
        default: false
      }
    }
	}
</script>

