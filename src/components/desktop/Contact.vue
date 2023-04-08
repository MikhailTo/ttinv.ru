<template>
	<section id="contact" class="contact page-section">
		<div class="caption">
			<h3 class="caption__title">
				Контакты
			</h3>
			<span class="line line--short"></span>
			<!--<p class="caption__subtitle"></p>-->
		</div>
		<div class="map">
			<Map />
			<q-card class="card--map" flat shadow-5>
				<q-card-section horizontal>
					<!-- <q-card-section class="q-pt-xs col-10">
					<Map />
				</q-card-section> -->
					<q-card-section class="q-pt-xs">
						<div class="text-h5 q-mt-sm q-mb-xs">Адрес</div>
						<div class="text-caption">
							Вологодская область, г. Вологда, ул. Каменный мост, д. 6, оф. 4
						</div>
						<div class="text-h5 q-mt-sm q-mb-xs">Часы работы</div>
						<div class="text-caption">
							ПН - ПТ: 9:00 - 17:00
						</div>
						<div class="text-caption">
							СБ - ВС: Выходной
						</div>
						<div class="text-h5 q-mt-sm q-mb-xs">Телефон: </div>
						<div class="text-h6 q-mt-sm q-mb-xs">8 (8172) 70-10-61</div>
						<q-btn label="Реквизиты" color="primary" icon="description" @click="showRequisites = true" />
						<q-dialog v-model="showRequisites">
							<q-card>
								<q-card-section>
									<div class="text-h6">Реквизиты</div>
								</q-card-section>
								<q-card-section class="q-pt-none">
									<q-list bordered separator class="rounded-borders">
										<q-item clickable v-ripple v-for="item in requisites" :key="item.id">
											<q-item-section>
												<q-item-label overline>{{ item.title }}</q-item-label>
												<q-item-label>{{ item.subtitle }}</q-item-label>
											</q-item-section>
										</q-item>
									</q-list>
								</q-card-section>
								<q-card-actions align="right" class="text-primary">
									<!-- <q-btn flat label="Скопировать" @click="secondDialog = true" /> -->
									<a class="social__link" :href="linkPdfRequisites" download>
										<q-btn flat label="Скачать" />
									</a>
									<a class="social__link" :href="linkPdfRequisites" target="_blank">
										<q-btn flat label="Открыть" />
									</a>
									<q-btn flat label="Закрыть" v-close-popup />
								</q-card-actions>
							</q-card>
						</q-dialog>
						<!-- <q-dialog v-model="secondDialog" persistent transition-show="scale" transition-hide="scale">
						<q-card class="bg-teal text-white" style="width: 300px">
							<q-card-section>
								<div class="text-h6">Скопировано</div>
							</q-card-section>
							<q-card-actions align="right" class="bg-white text-teal">
								<q-btn flat label="OK" v-close-popup />
							</q-card-actions>
						</q-card>
					</q-dialog> -->
					</q-card-section>
				</q-card-section>
			</q-card>
		</div>
	</section>
</template>

<script>
	import Map from './Map.vue'
	import {
		ref
	} from 'vue'
	export default {
		name: "Contact-component",
		components: {
			Map
		},
		setup() {
			return {
				linkPdfRequisites: require('@/assets/pdf/requisites-10.12.2018.pdf').default,
				showRequisites: ref(false),
				// secondDialog: ref(false),
				contacts: [{
						title: "Адрес",
						data: "Вологодская область, г. Вологда, ул. Каменный мост, д. 6, оф. 4",
					},
					{
						title: "Электронный адрес",
						data: "textrans.invest@mail.ru",
					},
					{
						title: "Телефон",
						data: "8 (8172) 70-10-61",
					}
				],
				requisites: [{
						title: "Полное наименование",
						subtitle: "Общество с ограниченной ответственностью «ТехТранс Инвест»"
					},
					{
						title: "Сокращенное наименование",
						subtitle: "ООО «ТехТранс Инвест»"
					},
					{
						title: "ИНН/КПП",
						subtitle: "3525289483/352501001"
					},
					{
						title: "ОГРН",
						subtitle: "1123525017681"
					},
					{
						title: "Юридический (Физический) адрес",
						subtitle: "160000, Вологодская обл., г. Вологда, ул. Каменный мост, д. 6, оф. 4"
					},
					{
						title: "Банковские реквизиты",
						subtitle: "Р/с: 407 028 104 84 00000 2087, в Ф. ОПЕРУ Банка ВТБ (ПАО) в г. Санкт-Петербурге, К/счет: 30101810200000000704, БИК: 044030704"
					}
				]
			}
		}
	}
</script>

<style lang="sass" scoped>
.map
	position: relative
	.card
		&--map
			position: absolute
			top: 1.25rem
			left: 20px
			height: 80%
			padding: 20px
			box-shadow: -1px -1px 24px 0px rgba(50, 50, 50, 0.5)
</style>