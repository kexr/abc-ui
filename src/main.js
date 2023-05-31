import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus'
import '/node_modules/element-plus/dist/index.css'

import  'highlight.js/styles/mono-blue.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

// hljs.registerLanguage('javascript', javascript);

createApp(App)
.use(router)
.use(ElementPlus)
.use(hljsVuePlugin)
.mount('#app')
