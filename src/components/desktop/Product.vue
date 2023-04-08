<template>
	<section id="product" class="product page-section">
		<div class="caption">
			<h3 class="caption__title">
				{{ caption.title }}
			</h3>
			<span class="line line--short"></span>
			<!-- <p class="caption__subtitle">{{ caption.subtitle }}</p> -->
		</div>
		<div class="product__items q-pa-md row items-center q-gutter-md no-wrap container">
			<q-card class="product__item" v-for="item in products" :key="item.id" flat bordered>
				<q-img class="product__img" :alt="item.imgAlt" :src="item.imgSrc" />
				<q-card-section>
					<!-- <div class="text-overline text-orange-9">Overline</div> -->
					<div class="text-h5 q-mt-sm q-mb-xs">{{ item.title }}</div>
					<div class="text-caption text-grey">
						{{ item.subtitle }}
					</div>
				</q-card-section>

			</q-card>
		</div>
	</section>
</template>
<script>
	export default {
		name: "Product-component",
		setup() {
			return {
				caption: {
					title: "Продукция",
					// subtitle: ""
				},
				products: [{
					title: "Подшипники",
					subtitle: "",
					imgSrc: require('@/assets/img/products/bearings.webp'),
					imgAlt: "Bearings",
				},
				{
					title: "Ремни",
					subtitle: "",
					imgSrc: require('@/assets/img/products/belts.webp'),
					imgAlt: "Belts",
				},
				{
					title: "Смазочные материалы",
					subtitle: "",
					imgSrc: require('@/assets/img/products/lubricant.webp'),
					imgAlt: "Lubricant",
				}]
			}
		}
	}
</script>
<style lang="sass">
	.product
		&__item
			padding: 25px
			width: 100%
			max-width: 350px
		&__img
			width: 100%
</style>