import VueRouter from "vue-router";

import todolist from "./components/todolist.vue";
import icon from "./components/icon.vue";
import button from "./components/button.vue";
import link from "./components/link.vue";

import radio from "./components/radio.vue";

//创建路由对象
var router = new VueRouter({
	routes:[
	   { path:'/', redirect:'/todolist' },
	   { path:'/todolist', component:todolist },
	   { path:'/icon', component:icon },
	   { path:'/button', component:button },
	   { path:'/link', component:link },
	   { path:'/radio', component:radio }
	],
	linkActiveClass:'mui-active' //覆盖默认的类
});

export default router;