<template>
	<div>
		<div class="footer-container">
			<div class="footer-container">
				<div class="footer-container__placer container">
					<a href="/" class="footer-container__placer__logo">
						<img class="footer-container__placer__logo__img" src="~/assets/images/logo-hack-white.svg">
					</a>

					<div class="footer-infos">
						<ul class="footer-container__placer__footer-list" >
							<div class="footer-container__placer__footer-list__title"> {{ title }}</div>
							<li class="footer-container__placer__footer-list__item" v-for="(item, i) in items" :key="`number-${i}`">
								{{ item.text }}
							</li>
						</ul>

						<ul class="footer-container__placer__footer-list">
							<div class="footer-container__placer__footer-list__title">{{ titleLiens }}</div>
							<div v-for="(site, j) in sites" :key="`number-${j}`">
								<a :href="site.url" class="footer-container__placer__footer-list__item link">
									{{ site.libelle }}
								</a>
							</div>
						</ul>

						<ul class="footer-container__placer__footer-list">
							<div class="footer-container__placer__footer-list__title">{{ titleFollow }}</div>
							<div class="footer-container__placer__footer-list__items-container">
								<li class="footer-container__placer__footer-list__items-container__item" v-for="(reseau, i) in reseaux" :key="`number-${i}`">
									<a :href="reseau.url">
										<img :src="`/images/${reseau.url_image}`" :alt="`${reseau.alt}`">
									</a>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="subfooter">
			<p class="text">{{ copyright }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.subfooter {
	background-color: #000000;
	padding: 10px;

	.text {
		font-size: 14px;
		font-weight: bold;
		color: $white;
		text-align: center;
	}
}
.footer-container {
	background-color: $black;
	padding-top: 55px;
	padding-bottom: 55px;

	.footer-infos {
		display: flex;
		width: 80%;
		justify-content: space-between;

		@include tablet {
			width: 100%;
			margin-top: 40px;
		}

		@include mobile {
			margin-top: 0;
			flex-direction: column;
		}
	}

	&__placer {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;

		@include tablet {
			flex-direction: column;
			align-items: flex-start;
		}

		&__footer-list {
			color: $white;

			@include mobile {
				margin-top: 40px;
			}

			&__items-container {
				display: flex;

				&__item {
					margin-right: 15px;
				}
			}

			&__title {
				font-weight: bold;
				margin-bottom: 20px;
			}

			&__item {
				position: relative;
				padding-left: 30px;
				margin-bottom: 10px;

				&.link {
					display: block;
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
			}
		}
	}
}

</style>

<script>
	export default {
		name: 'footerCustom',
		props: {
			title: {
        		type: String,
        		default: true
			},
			logo: {
        		type: String,
        		default: true
			},
			titleLiens: {
        		type: String,
        		default: true
			},
			titleFollow: {
        		type: String,
        		default: true
			},
			items: {
        		type: Array,
        		required: true
			},
			sites: {
        		type: Array,
        		required: true
			},
			reseaux: {
        		type: Array,
        		required: true
			},
			copyright: {
        		type: String,
        		required: true
			},
		}
	}
</script>

