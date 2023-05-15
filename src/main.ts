import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/js/router'
import { createPinia } from 'pinia'
import VueCollapsiblePanel from '@swoga/vue-collapsible-panel'

import { FluentBundle, FluentResource } from '@fluent/bundle'

import { createFluentVue } from 'fluent-vue'

import enLang from "@/assets/lang/en.ftl?raw"
import frLang from "@/assets/lang/fr.ftl?raw"

// Create bundles for locales that will be used
const enBundle = new FluentBundle('en')
enBundle.addResource(new FluentResource(enLang))
const frBundle = new FluentBundle('fr')
frBundle.addResource(new FluentResource(frLang))

// Create plugin istance
// bundles - The current negotiated fallback chain of languages
const fluent = createFluentVue({
    bundles: [enBundle, frBundle]
  })

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VueCollapsiblePanel)
app.use(fluent)

app.mount('#app')
