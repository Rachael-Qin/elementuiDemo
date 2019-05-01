import VueRouter from "vue-router";

import todolist from "./components/todolist.vue";
import icon from "./components/icon.vue";
import button from "./components/button.vue";
import link from "./components/link.vue";

import radio from "./components/radio.vue";
import checkbox from "./components/checkbox.vue";
import input from "./components/input.vue";
import inputNumber from "./components/inputNumber.vue";



//创建路由对象
var router = new VueRouter({
	routes:[
	   { path:'/', redirect:'/todolist' },
	   { path:'/todolist', component:todolist },
	   { path:'/icon', component:icon },
	   { path:'/button', component:button },
	   { path:'/link', component:link },
	   { path:'/radio', component:radio },
	   { path:'/checkbox', component:checkbox },
	   { path:'/input', component:input },
	   {path:'/inputNumber',component:inputNumber}
	],
	linkActiveClass:'mui-active' //覆盖默认的类
});

export default router;