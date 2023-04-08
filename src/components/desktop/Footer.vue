<template>
	<q-footer class="footer reveal elevated bg-grey-8 text-white">
		<q-toolbar class="container">
			<!-- <div class="social-text">
				<h3 class="social-title">Наш адрес:</h3>
				<p class="social-subtitle">
					Вологодская область, <br> г. Вологда, ул. Каменный мост, д. 6, оф. 4</p>
			</div> -->
			
			<div class="copyright">
				<p>© 2023 TechTransInvest</p>
			</div>
		</q-toolbar>
	</q-footer>
</template>

<script>
	import {
		ref
	} from 'vue'
	export default {
		name: 'Footer-component',
		setup() {
			return {
				slide: ref(1),
				
			}
		}
	}
</script>

<style lang="sass">
.footer
	height: 5rem
	align-items: center
	padding-top: 10px
	padding-bottom: 40px

.copyright > p
	position: absolute
	right: 50%
	bottom: 0
	color: white
	font-size: 0.75rem
	font-weight: 400
	opacity: 0.5


</style>