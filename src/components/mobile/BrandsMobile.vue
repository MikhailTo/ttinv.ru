<template>
	<section id="brands" class="brands page-section">
		<div class="caption">
			<h3 class="caption__title">
				Бренды с которыми мы работаем
			</h3>
			<span class="line line--short"></span>
			<!--<p class="caption__subtitle"></p>-->
		</div>
		<!-- <q-page class="flex flex-center"> -->
		<div class="q-pa-md">
			<q-carousel v-model="slide" swipeable 
			animated infinite :autoplay="4500" 
			padding arrows 
			control-color="black" 
			transition-prev="slide-right" 
			transition-next="slide-left" 
			height="10rem">
				<q-carousel-slide :name="1">
					<div class="row fit justify-evenly items-center q-gutter-xs q-col-gutter no-wrap">
						<q-img class="col-1" src="@/assets/img/brands/10gpz.png" />
						<q-img class="col-1" src="@/assets/img/brands/craft.png" />
						<q-img class="col-1" src="@/assets/img/brands/epk.png" />

					</div>
				</q-carousel-slide>
				<q-carousel-slide :name="2">
					<div class="row fit justify-evenly items-center q-gutter-xs q-col-gutter no-wrap">
						<q-img class="col-1" src="@/assets/img/brands/fkl.png" />
						<q-img class="col-1" src="@/assets/img/brands/nachi.png" />
						<q-img class="col-1" src="@/assets/img/brands/nsk.png" />
					</div>
				</q-carousel-slide>
				<q-carousel-slide :name="3">
					<div class="row fit justify-evenly items-center q-gutter-xs q-col-gutter no-wrap">
						<q-img class="col-1" src="@/assets/img/brands/gpz.png" />
						<q-img class="col-1" src="@/assets/img/brands/harp.png" />
						<q-img class="col-1" src="@/assets/img/brands/mpz.png" />
					</div>
				</q-carousel-slide>
				<q-carousel-slide :name="4">
					<div class="row fit justify-evenly items-center q-gutter-xs q-col-gutter no-wrap">
						<q-img class="col-1" src="@/assets/img/brands/ntn.png" />
						<q-img class="col-1" src="@/assets/img/brands/skf.png" />
						<q-img class="col-1" src="@/assets/img/brands/spz4.png" />
					</div>
				</q-carousel-slide>
			</q-carousel>
		</div>
		<!-- </q-page> -->
	</section>
</template>
  
<style>

</style>
  
<script>
	import {
		ref
	} from 'vue'
	export default {
		name: 'Brands-component',
		setup() {
			return {
				slide: ref(1)
			}
		}
	}
</script>
  