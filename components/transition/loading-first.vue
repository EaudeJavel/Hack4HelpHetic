<template>
	<div class="loading-first-container" ref="loadingContainer">
		<div class="center" ref="loadingCenter">
			<div class="center progress-bar-container">
				<progress-bar height="2" :progress="progress.value"/>				
			</div>
			
			<div class="top">
				<div class="top-title">Hack4Help</div>						
			</div>
			<div class="bot">
				<div class="bot-title">Hackaton Hetic</div>	
			</div>
		</div>
	</div>
</template>


<style lang="stylus" scoped>
	.loading-first-container {
		display flex
		justify-content center
		align-items center
		position fixed
		top 0
		left 0
		width 100%
		height 100%
		background #fff
		z-index 10
		pointer-events all
		.center {
			display flex
			width 100%
			justify-content center
			align-items center
			opacity 0
			transition opacity 0.75s ease
			.center {
				width 100%
				position absolute
			}
		 	.top {
				 margin-bottom 10%
				.top-title {
					font-size 18px
					font-weight bold
					letter-spacing 1px
					margin-bottom 10px
				}				
			}
			.bot {
				margin-top 10%
				.bot-title {
					font-size 18px
					font-weight bold
					letter-spacing 1px
					margin-bottom 10px
				}				
			}
			&.display {
				opacity 1
			}
		}
		&.complete {
			pointer-events none
		}
	}
</style>

<script>
	import { mapGetters } from 'vuex'
	import progressBar from '~/components/transition/progress-bar.vue'
	import { TweenLite } from 'gsap'
	export default {
		name: 'loading-first',
		props: [],
		components: {
			'progress-bar': progressBar
		},
		data() {
			return {
				progress: {
					value: 0
				},
				progressWatch: 0,
				progressTo: 0
			}
		},
		computed: {
			...mapGetters({
				dataLoaded: 'IS_DATA_LOADED',
			})
		},
		methods: {
			done() {
				this.$refs.loadingContainer.classList.add('complete')
			}
		},
		watch: {
			progressTo(newValue) {
				TweenLite.to(this.progress, 0.75, { value: newValue })
			},
			progressWatch(newValue) {
				if(newValue >= 100) {
					const tl = new TimelineLite({ onComplete: this.done })
					tl.add('start')
					tl.to('.progress-bar-container', 0.1, { opacity: 1 }, 'start')
					tl.to('.loading-first-container .top-title', 0.9, { y: -15, opacity: 0, ease: Power3.easeOut }, 'start+=1')
					tl.to('.loading-first-container .bot-title', 0.9, { y: 15, opacity: 0, ease: Power3.easeOut }, 'start+=1')
					tl.to('.loading-first-container', 0.3, { opacity: 0 }, 'start+=1.5') //load content
				}
			}
		},
		mounted() {
			this.$refs.loadingCenter.classList.add('display')
			const interval = setInterval(() => {
				if(!this.dataLoaded) {
					if(this.progressTo < 50) {
						this.progressTo += 5
						this.progressWatch += 5
					} else if(this.progressTo < 75) {
						this.progressTo += 1
						this.progressWatch += 1
					} else {
						this.progressTo += 0
						this.progressWatch += 0
					}
				} else {
					this.progressTo = 100
					this.progressWatch = 100
					clearInterval(interval)
				}
			}, 100)
		}
	}
</script>