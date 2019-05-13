<template>
	<div class="container">
		<h3>基本用法</h3>
		<p> el-image 标签。可通过fit确定图片如何适应到容器框，同原生 object-fit。</p>
		<div class="demo-image">
			<div class="inline-box" v-for="fit in fits" :key="fit">
			    <span class="demonstration">{{ fit }}</span>
				<el-image
				      style="width: 100px; height: 100px"
				      :src="url"
				      :fit="fit"></el-image>
		    </div> 
		</div>
		<h3>占位内容</h3>
		<p>可通过slot = placeholder可自定义占位内容。</p>
		<div class="demo-image">
			<div class="inline-box">
				<span class="demonstration">默认</span>
				<el-image :src="url"></el-image>
			</div>
			<div class="inline-box">
				<span class="demonstration">自定义</span>
				<el-image :src="url">
					<div slot="placeholder" class="image-slot">
				        加载中<span class="dot">...</span>
				    </div>
				</el-image>
			</div>
		</div>
		<h3>占位内容</h3>
		<p>可通过 slot = error 可自定义占位内容。</p>
		<div class="demo-image">
			<div class="inline-box">
				<span class="demonstration">默认</span>
				<el-image></el-image>
			</div>
			<div class="inline-box">
				<span class="demonstration">自定义</span>
				<el-image>
					<div slot="error" class="image-slot">
				        <i class="el-icon-picture-outline"></i>
				    </div>
				</el-image>
			</div>
		</div>
		<h3>懒加载</h3>
		<p>可通过lazy开启懒加载功能，当图片滚动到可视范围内才会加载。可通过scroll-container来设置滚动容器，若未定义，则为最近一个overflow值为auto或scroll的父元素。</p>
		<div class="demo-image__lazy">
		  <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
		</div>
	</div>
</template>

<script>
 export default{
 	data(){
 		return {
 			fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
	        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
	        urls: [
	          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
	          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
	          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
	          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
	          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
	          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
	          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
	        ]
 		}
 	},
 	methods:{
 		handleChange(val){
 			console.log(val);
 		}
 	}
 }
</script>

<style scoped>
	.box-card{
		width:500px;
	}
	.inline-box{display: inline-block;width: 200px; margin-right: 20px;}
	.inline-box span{display: block;color: #999;}
	.el-image{width: 100px;height: 100px;}
	.demo-image__lazy{width: 400px; height: 400px;overflow: scroll;}
	.demo-image__lazy .el-image{display: block;width: 100%; height: 400px;}
</style>
