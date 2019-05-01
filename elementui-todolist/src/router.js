import VueRouter from "vue-router";

import todolist from "./components/todolist.vue";
//创建路由对象
var router = new VueRouter({
	routes:[
	   { path:'/', redirect:'/home' },
	   { path:'/todolist', component:todolist },
	   { path:'/member', component:MemberContainer },
	   { path:'/shopcart', component:ShopcartContainer },
	   { path:'/search', component:SearchContainer },
	   { path:'/home/newslist', component:NewsList },
	   { path:'/home/newsinfo/:id', component:NewsInfo },
	   { path:'/home/photolist', component:PhotoList },
	   { path:'/home/photoinfo/:id', component:PhotoInfo },
	   { path:'/home/goodslist', component:GoodsList },
	   { path:'/home/goodsinfo/:id', component:GoodsInfo },
	   { path:'/home/goodsdesc/:id', component:GoodsDesc , name:"goodsdesc" },
	   { path:'/home/goodscomment/:id', component:GoodsComment }
	],
	linkActiveClass:'mui-active' //覆盖默认的类
});

export default router;