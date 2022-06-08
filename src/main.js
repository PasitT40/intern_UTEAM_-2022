import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { loadFonts } from './plugins/webfontloader';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

loadFonts();

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);
app.use(router);

app.mount('#app');
