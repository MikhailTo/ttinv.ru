<template>
	<section id="benefit" class="benefit page-section">
		<div class="caption">
			<!-- <h3 class="caption__title">
				{{ caption.title }}
			</h3> -->
			<q-img :alt="logo.alt" :src="logo.src" />
			<span class="line line--short"></span>
			<p class="caption__subtitle">{{ caption.subtitle }}</p>
		</div>
		<div class="benefit__items q-pa-md row items-start q-gutter-md" >
			<q-card class="benefit__item" flat v-for="item in benefits" :key="item.id">
				<q-img class="benefit__icon" :alt="item.iconAlt" :src="item.iconSrc" style="height:100px; width: 100px;" />
				<div class="text-h6 q-mt-sm q-mb-xs">{{ item.title }}</div>
				<div class="benefit__subtitle">{{ item.subtitle }}</div>
			</q-card>
		</div>
	</section>
</template>
<script>
	export default {
		name: 'Benefits-component',

		setup() {
			return {
				logo: {
					alt: "ТехТрансИнвест",
					src: require('@/assets/img/logo.svg')
				},
				caption: {
					title: "Техтранс Инвест",
					subtitle: "Мы всегда выстраиваем долгосрочные и взаимовыгодные отношения и будем рады видеть Вашу компанию в числе наших партнёров!"
				},
				benefits: [
					{ 
						iconSrc: require('@/assets/img/benefits/good.svg'),
						iconAlt: "pro",
						title: "Осуществляем консультации по подбору",
						subtitle: "А также проводим консультации по условиям работы и выявлению причин выхода из строя подшипников и узлов" },
					{	
						iconSrc: require('@/assets/img/benefits/clock.svg'),
						iconAlt: "time",
						title: "Опыт работы более 8 лет",
						subtitle: "За это время зарекомендовала себя как надёжный поставщик подшипников и элементов промышленных трансмиссий для различных отраслей промышленности" },
					{ 
						iconSrc: require('@/assets/img/benefits/multitask.svg'),
						iconAlt: "work",
						title: "Доставка собственным транспортом",
						subtitle: "Осуществляем достувку даже в небольшие населенные пункты!"
					}
				]
			}
		}
	}
</script>

<style lang="sass">
.page
	
.benefit
	position: relative
	display: flex
	z-index: 1
	flex-direction: column
	justify-content: space-between
	align-items: center
	column-gap: 32px
	// background: left top no-repeat url('@/assets/img/bg/bg1.jpg')
	// background-size: 40%
	

	&__items
		display: flex
		flex-direction: row
		// background: right -200px top no-repeat url('@/assets/img/bg/bg2.jpg')
		// background-size: 50%
		// z-index: 0
	&__item
		display: flex
		flex-direction: column
		justify-content: flex-start
		align-items: center
		row-gap: 25px
		height: 100%
		width: 460px
		background-color: transparent !important
	&__icon
		fill: $mid-orange
		height: 50px
		width: 50px
		

	&__title
		color: $dark-grey
		font-size: 20px
		font-weight: 700
		line-height: 24px
		text-align: center

	&__subtitle
		color: $mid-grey
		font-size: 14px
		font-weight: 400
		line-height: 20px
		text-align: center
		max-width: 380px
		margin: 0 0 80px 0
</style>