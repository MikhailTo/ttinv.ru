<template>
	<q-header elevated class="header text-black">
		<div class="container">
			<q-toolbar>
				<a v-if="showLogo" class="logo__link" href="#">
					<img class="logo__img" :alt="logo.alt" :src="logo.src">
				</a>
				<nav class="nav">
					<ul>
						<li v-for="item in nav" :key="item.id" class="nav__item">
							<a class="nav__link" href="#" v-scroll-to="item.link"> 
										{{ item.name }}
									</a>
						</li>
					</ul>
				</nav>
				<q-space />
				<!-- <a class="social__link" href="tel:8(8172)70-10-61" alt="tel">
						<q-btn icon="phone" label="8 (8172) 70-10-61" color="red" />
					</a> -->
				<div class="q-pa-md q-gutter-sm row">
					<a class="social__link" v-for="item in social" :key="item.id" :href="item.href">
						<q-btn round class="social__button" :color="item.color" :icon="item.icon" />
						<!-- :label="item.label"/> -->
					</a>
				</div>
			</q-toolbar>
		</div>
	</q-header>
</template>

<script>
	import {
		ref
	} from 'vue'
	
	export default {
		name: 'Header-component',
		setup() {
			return {
				showLogo: ref(true),
				logo: {
					alt: "ТехТрансИнвест",
					src: require('@/assets/img/logo.svg')
				},
				nav: [{
						name: "О нас",
						link: "#about"
					},
					{
						name: "Продукция",
						link: "#product"
					},
					{
						name: "Контакты",
						link: "#contact"
					},
				],
				social: [{
						icon: "map",
						label: "Найти нас",
						color: "green",
						href: "https://yandex.ru/maps/?rtext=~59.221150%2C39.891226"
					},
					{
						icon: "mail",
						label: "Написать нам",
						color: "blue",
						href: "mailto:textrans.invest@mail.ru"
					},
					{
						icon: "phone",
						label: "Позвонить нам",
						color: "red",
						href: "tel:8(8172)70-10-61",
					},
				]
			}
		}
	}
</script>

<style lang="sass">
@import '@/styles/quasar.variables.sass'
.header
	background-color: $header-background 
	
.logo
	&__link
		height: $logo-height
	&__img
		max-width: 12.5rem
		height: 100%
		margin: 0 10px 0 0

.nav
	height: 100%
	transition: 0.3s

	> ul
		display: flex
		justify-content: flex-start
		align-items: center
		column-gap: 1.25rem
		height: 100%
	&__item
		list-style-type: none

	&__link
		text-decoration: none
		text-transform: uppercase
		color: $nav-link-color
		font-size: .875rem
		font-weight: 700
		opacity: 0.69

		&:hover
			color: $nav-link-color-hover
			text-shadow: #000 0 .4px 0
		
		&--current
			position: relative
			opacity: 1
			&:after
				position: absolute
				left: 0
				bottom: -5px
				height: 2px
				width: 100%
				content: ""
				background-color: $nav-link-color-current

.social
	&__button
		width: 12.25rem	
	&-text 
		display: flex
		flex-direction: column
		justify-content: space-between
		flex-basis: 460px
	&-title
		color: white
		font-size: 20px
		font-weight: 700
		margin: 0
		padding: 0 0 0 1.25rem
	&-subtitle
		color: #86878b
		font-size: 14px
		font-weight: 400
		line-height: 20px
		margin: 0
		padding: 0 0 0 1.25rem
</style>