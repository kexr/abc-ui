import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

// import  'shighlight.js/styles/stackoverflow-light.css'
// import hljs from '/node_modules/highlight.js/lib/core';
// import javascript from '/node_modules/highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

// hljs.registerLanguage('javascript', javascript);

createApp(App)
.use(router)
.use(ElementPlus)
.use(hljsVuePlugin)
.mount('#app')
