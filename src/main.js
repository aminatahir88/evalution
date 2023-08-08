import { createApp } from 'vue';
import App from './App.vue';
import LoginView from './components/LoginView.vue';
import SignupView from './components/SignupView.vue';
import { createRouter, createWebHistory } from 'vue-router';
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const vuetify = createVuetify({
  components,
  directives,
});
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginView },
    { path: '/signup', component: SignupView },
  ],
});
const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');