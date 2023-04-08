import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueMobileDetection from 'vue-mobile-detection'

let VueScrollTo = require('vue-scrollto')

createApp(App)
.use(Quasar, quasarUserOptions)
.use(VueMobileDetection)
.use(VueScrollTo, {
	container: "body",
	duration: 500,
	easing: "ease",
	offset: 0,
	force: true,
	cancelable: true,
	onStart: false,
	onDone: false,
	onCancel: false,
	x: false,
	y: true
})
.mount('#app')
