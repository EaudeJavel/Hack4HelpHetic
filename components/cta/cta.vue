<template>
    <nuxt-link v-if="!isExternal" :to="link" exact class="button" :class="type" v-html="label"></nuxt-link>
    <a v-else :href="link" class="button" :class="type" v-html="label"></a>
</template>

<style lang="stylus" scoped>
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

