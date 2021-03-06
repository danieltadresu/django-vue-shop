import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-dialog', BaseDialog);
app.use(router);
app.use(store);
app.mount('#app');
