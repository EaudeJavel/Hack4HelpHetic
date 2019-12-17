<template>
    <div class="footer-container">
		<a src="../../assets/img/logo.svg" href="/" class="footer-container__logo"></a>

		<ul class="footer-container__footer-list">
			<div class="footer-container__footer-list__title"> Nous contacter</div>
			<li class="footer-container__footer-list__item"> Lorem : 01-23-45-67-89</li>
			<li class="footer-container__footer-list__item"> Lorem ipsum : 01-23-45-67-89</li>
			<li class="footer-container__footer-list__item"> Lorem dolor si amet: 01-23-45-67-89</li>			
		</ul>

		<ul class="footer-container__footer-list">
			<div class="footer-container__footer-list__title"> Suivez-nous</div>
			<li class="footer-container__footer-list__item">
				<a href="#" src="../../assets/icons/instagram.svg"></a>
			</li>
			<li class="footer-container__footer-list__item">
				<a href="#" src="../../assets/icons/linkedin.svg"></a>
			</li>
			<li class="footer-container__footer-list__item">
				<a href="#" src="../../assets/icons/twitter.svg"></a>
			</li>
		</ul>

	</div>
</template>

<style lang="stylus" scoped>

.footer-container
	height 194px
	background-color #000
	display flex
	justify-content center
	align-items center
	width 100%
	position absolute
	bottom 0

	&__logo
		background-color green
		width 100px
		height 100px
		margin-right 130px

	&__footer-list
		color white
		margin-right 115px

		&__title 
			font-weight bold
			margin-bottom 20px

		&__item		
			margin-bottom 15px
			

</style>

<script>
	export default {
		name: 'footer',
	}
</script>

