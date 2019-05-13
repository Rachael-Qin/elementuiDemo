<template>
	<div class="container">
		<h3>基本用法</h3>
		<p>结合使用 el-carousel 和 el-carousel-item 标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在el-carousel-item标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置trigger属性为click，可以达到点击触发的效果。</p>
		<el-row class="box">
			<div class="inline-box">
				<span>默认 Hover 指示器触发</span>
				<el-carousel height="150px">
			      <el-carousel-item v-for="item in 4" :key="item">
				      <h5 class="small">{{item}}</h5>
				  </el-carousel-item>
			    </el-carousel>
			</div>
		    <div class="inline-box">
				<span>Click 指示器触发</span>
				<el-carousel trigger="click" height="150px">
			      <el-carousel-item v-for="item in 4" :key="item">
				      <h5 class="small">{{item}}</h5>
				  </el-carousel-item>
			    </el-carousel>
		    </div>
	    </el-row>
		<h3>指示器位置</h3>
		<p> indicator-position 属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为outside则会显示在外部；设置为none则不会显示指示器。</p>
		<el-row class="box">
			<div>
				<el-carousel indicator-position="outside" height="150px">
				    <el-carousel-item v-for="item in 4" :key="item">
				      <h5>{{ item }}</h5>
				    </el-carousel-item>
				</el-carousel>
			</div>
		</el-row>
		<h3>切换箭头</h3>
		<p>arrow属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将arrow设置为always，则会一直显示；设置为never，则会一直隐藏。</p>
		<el-row class="box">
			<div>
				<el-carousel indicator-position="outside" height="150px" arrow='never'>
				    <el-carousel-item v-for="item in 4" :key="item">
				      <h5>{{ item }}</h5>
				    </el-carousel-item>
				</el-carousel>
			</div>
		</el-row>
		<h3>卡片化</h3>
		<p>将type属性设置为card即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。</p>
		<el-row class="box">
			<div>
				<el-carousel height="150px" type="card">
				    <el-carousel-item v-for="item in 4" :key="item">
				      <h5>{{ item }}</h5>
				    </el-carousel-item>
				</el-carousel>
			</div>
		</el-row>
		<h3>方向</h3>
		<p>默认情况下，direction 为 horizontal。通过设置 direction 为 vertical 来让走马灯在垂直方向上显示。</p>
		<el-row class="box">
			<div>
				<el-carousel height="150px" direction="vertical" :autoplay="false">
				    <el-carousel-item v-for="item in 4" :key="item">
				      <h5>{{ item }}</h5>
				    </el-carousel-item>
				</el-carousel>
			</div>
		</el-row>
	</div>
</template>

<script>
 export default{
 	data(){
 		return {
 			disabled:false,
 			currentDate: new Date()
 		}
 	},
 	methods:{
 	}
 }
</script>

<style scoped>
    .box>div{
    	width: 400px;
    	margin-bottom: 20px;
    }
	.el-carousel__item h5 {
	    margin: 0;
	    color: #475669;
	    font-size: 14px;
	    line-height: 150px;
	    text-align: center;
	    opacity: 0.75;
	}
	.el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

</style>
