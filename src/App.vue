<template>
	<q-layout v-if="$isMobile()" view="lHh lpR fff">
		<q-page-container class="page">
			<HeaderMobile id="about" />
			<BenefitsMobile />
			<ProductMobile id="product"/>
			<BrandsMobile  />
			<ContactMobile id="contact" />
			<!-- <ScrollerMobile /> -->
			<FooterMobile />
		</q-page-container>
	</q-layout>

	<q-layout v-else view="lHh lpR fff">
		<q-page-container class="page">
			<Header id="about" />
			<Benefits />
			<Product id="product"/>
			<Brands  />
			<Contact id="contact" />
			<!-- <Scroller /> -->
			<Footer />
		</q-page-container>
	</q-layout>
</template>

<script>
	

	import Header from './components/desktop/Header.vue'
	import Benefits from './components/desktop/Benefits.vue'
	import Brands from './components/desktop/Brands.vue'
	import Product from './components/desktop/Product.vue'
	import Contact from './components/desktop/Contact.vue'
	// import Scroller from './components/desktop/Scroller.vue'
	import Footer from './components/desktop/Footer.vue'

	import HeaderMobile from './components/mobile/HeaderMobile.vue'
	import BenefitsMobile from './components/mobile/BenefitsMobile.vue'
	import BrandsMobile from './components/mobile/BrandsMobile.vue'
	import ProductMobile from './components/mobile/ProductMobile.vue'
	import ContactMobile from './components/mobile/ContactMobile.vue'
	// import ScrollerMobile from './components/mobile/ScrollerMobile.vue'
	import FooterMobile from './components/mobile/FooterMobile.vue'

	export default {
		name: 'LayoutDefault',
		components: {
			Header,
			Benefits,
			Product,
			Brands,
			Contact,
			// Scroller,
			Footer,

			HeaderMobile,
			BenefitsMobile,
			ProductMobile,
			BrandsMobile,
			ContactMobile,
			// ScrollerMobile,
			FooterMobile,

		},
		created() {
			console.log(this.$isMobile());
		},
		setup() {
			return { }
		}
	}
</script>
<style lang="sass">
	
</style>