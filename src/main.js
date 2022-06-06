import 'vuetify/styles';
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import { loadFonts } from './plugins/webfontloader';
import './index.css';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

loadFonts();

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);

app.mount('#app');
