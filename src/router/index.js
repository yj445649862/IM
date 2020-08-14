import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

export default {}

// export default new VueRouter({
//     // base:process.env.NODE_ENV !== 'local' ? process.env.VUE_APP_REQUESTURL : '',
//     mode: 'history',
//     routes:[
//         {path:'/a',component:()=>import('../pages/First')},
//         {path:'/b',component:()=>import('../pages/Second')},
//         {path:'/c',component:()=>import('../pages/Third')},
//     ]
// });

