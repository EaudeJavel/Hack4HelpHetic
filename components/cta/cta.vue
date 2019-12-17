<template>
  <nuxt-link v-if="!isExternal" :to="link" exact class="button" :class="type" v-html="label"></nuxt-link>
  <a v-else-if="mailTo" :href="`mailTo:${link}`" class="button" :class="type" v-html="label"></a>
  <a v-else :href="link" class="button" :class="type" v-html="label"></a>
</template>

<style lang="scss" scoped>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $metropolis;
    background-color: $purple2;
    color: $white;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid $purple2;
    transition: all 250ms ease-in-out;

    &:hover {
      background-color: $white;
      color: $purple2;
    }
  }

  .large {
    width: 230px;
    height: 50px;
    line-height: 1.4;
    font-size: 16px;
  }

  .small {
    min-width: 115px;
    font-size: 16px;
    padding: 10px;
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
        required: false
      },
      isExternal: {
        type: Boolean,
        default: false
      },
      mailTo: {
        type: Boolean,
        default: false
      },
    }
	}
</script>

