// Vue.
import Vue from 'vue';
import App from '@/App.vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
new Vue({
  components: { App },
  template: '<app />',
}).$mount('#app');
