import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
Vue.use(VueRouter);

Vue.mixin({
  methods: {
    image_url(image){
      if(image === '' || image === 'null'){
        return "/static/image_not_available.png"
      } else {
        return window.hostURL + image;
      }
    }
  }
});

var routes = [{
  path: '/',
  component: resolve => require(['./layout.vue'], resolve),
  children: [{
          path: '',
          component: resolve => require(['./components/index.vue'], resolve)
  },{
          path: 'create',
          component: resolve => require(['./components/create.vue'], resolve)
  },{
          path: 'items/:id',
          component: resolve => require(['./components/detail.vue'], resolve)
  },{
          path: 'items/update/:id',
          component: resolve => require(['./components/update.vue'], resolve)
  }

  ]
  }
];

const router = new VueRouter({
    routes,
    linkActiveClass: "active"
});

new Vue({
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app');
