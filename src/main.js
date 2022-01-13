import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import router from "./router.js";
import store from "./store.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('fa', FontAwesomeIcon)

const firebaseConfig = {
  apiKey: "AIzaSyCmb_xHlxSMvzXmdaIvb-dhsN6o2be3jl8",
  authDomain: "app-tree-market.firebaseapp.com",
  projectId: "app-tree-market",
  storageBucket: "app-tree-market.appspot.com",
  messagingSenderId: "759932613962",
  appId: "1:759932613962:web:1e9e8337cdaed4f31bfdb3"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
