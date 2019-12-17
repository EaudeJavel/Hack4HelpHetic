<template>
    <div class="footer-container">
		<div class="footer-container__placer">
			<a href="/" class="footer-container__placer__logo">
				<img class="footer-container__placer__logo__img" src="~/assets/images/logo-hack.svg">
			</a>

			<ul class="footer-container__placer__footer-list">
				<div class="footer-container__placer__footer-list__title"> Nous contacter</div>
				<li class="footer-container__placer__footer-list__item">
					<img class="puce" src="~/assets/images/puce.svg" alt="">
					Lorem : 01-23-45-67-89
				</li>
				<li class="footer-container__placer__footer-list__item"> 
					<img class="puce" src="~/assets/images/puce.svg" alt="">
					Lorem ipsum : 01-23-45-67-89
				</li>
				<li class="footer-container__placer__footer-list__item">
					<img class="puce" src="~/assets/images/puce.svg" alt=""> 
					Lorem dolor si amet: 01-23-45-67-89
				</li>
			</ul>

			<ul class="footer-container__placer__footer-list">
				<div class="footer-container__placer__footer-list__title"> Liens</div>
				<li class="footer-container__placer__footer-list__item">
					<img class="puce" src="~/assets/images/puce.svg" alt=""> 
					Mentions légales 
				</li>		
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
</template>

<style lang="scss" scoped>

.footer-container {
	height: 200px;
	background-color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	@include tabletLandscape {		
		height: 200px;
		justify-content: space-between;	
	}

	@include tablet {
		justify-content: center;
		height: 400px;
		flex-direction: column;
		align-items: baseline;		
	}

	&__placer {

		display: flex;
		width: 100%;
		justify-content: space-around;

		@include tablet {
			flex-direction: column;				
		}		

		&__logo {		
			width: 180px;
			height: 100px;
			margin-right: 130px;		

			@include tabletLandscape {
				margin-left: 20px;
				width: 130px;
				margin-right: 0;
			}

			@include tablet {
				margin-left: 15px;
				width: 110px;	
				margin-right: 0;					
			}

			&__img {
				width: 100%;			
			}
		}

		&__footer-list {
			color: white;		

			@include tabletLandscape {
				margin-left: 15px;
				margin-right: 0;
			}

			@include tablet {
				margin-left: 15px;
				margin-right: 0;
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
				margin-bottom: 15px;		
				
				.puce {
					margin-right: 12px;
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

