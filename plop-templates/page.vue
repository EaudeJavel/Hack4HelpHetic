<template>
	<div class="container-page container-{{ dashCase name }}">
		<navbar/>
	</div>
</template>

<style lang="stylus" scoped>
	.container-{{ dashCase name }} {

	}
</style>

<script>
	import navbar from '@/components/base/navbar.vue'

	export default {
		name: '{{ dashCase name }}',
		asyncData ({ params, error }) {
			// return axios.get('/api/users/' + params.id)
			// 	.then((res) => {
			// 		return { user: res.data }
			// 	})
			// 	.catch((e) => {
			// 		error({ statusCode: 404, message: 'User not found' })
			// 	})
		},
		head () {
			return {
				title: 'Page — Title'
			}
		},
		props: [],
		components: {
			navbar,
		},
		data () {
			return {

			}
		},
		methods: {

		},
		mounted () {

		}
	}
</script>
