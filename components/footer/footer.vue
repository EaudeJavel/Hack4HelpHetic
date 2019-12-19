<template>
	<div>
		<div class="footer-container">
			<div class="footer-container">
				<div class="footer-container__placer container">
					<a href="/" class="footer-container__placer__logo">
						<img class="footer-container__placer__logo__img" src="~/assets/images/logo-hack-white.svg">
					</a>

					<div class="footer-infos">
						<ul class="footer-container__placer__footer-list">
							<div class="footer-container__placer__footer-list__title"> Nous contacter</div>
							<li class="footer-container__placer__footer-list__item">
								Lorem : 01-23-45-67-89
							</li>
							<li class="footer-container__placer__footer-list__item">
								Lorem ipsum : 01-23-45-67-89
							</li>
							<li class="footer-container__placer__footer-list__item">
								Lorem dolor si amet: 01-23-45-67-89
							</li>
						</ul>

						<ul class="footer-container__placer__footer-list">
							<div class="footer-container__placer__footer-list__title"> Liens</div>
							<a href="https://www.hetic.net/" class="footer-container__placer__footer-list__item link">
								Hetic
							</a>
							<a href="" class="footer-container__placer__footer-list__item link">
								Mentions légales
							</a>
						</ul>

						<ul class="footer-container__placer__footer-list">
							<div class="footer-container__placer__footer-list__title"> Suivez-nous</div>
							<div class="footer-container__placer__footer-list__items-container">
								<li class="footer-container__placer__footer-list__items-container__item">
									<a href="#">
										<img src="~/assets/icons/instagram.svg" alt="instagram">
									</a>
								</li>
								<li class="footer-container__placer__footer-list__items-container__item">
									<a href="#">
										<img src="~/assets/icons/linkedin.svg" alt="">
									</a>
								</li>
								<li class="footer-container__placer__footer-list__items-container__item">
									<a href="#" >
										<img src="~/assets/icons/twitter.svg" alt="">
									</a>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="subfooter">
			<p class="text">Copyright 2019 - HACK4HELP - Tout droits réservés</p>
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
	}
</script>

