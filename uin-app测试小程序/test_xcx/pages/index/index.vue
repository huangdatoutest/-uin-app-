<template>
	<view>
		<view class="uni-padding-wrap">
			<swiper class="swiper" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in testData.banner_lists" :key="index">
					<image class="swiper_img" :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			indicatorDots: true, // 是否显示面板指示点
			circular: true, // 衔接滑动
			autoplay: true, // 是否自动切换
			interval: 2000, // 自动切换时间间隔
			duration: 500, // 滑动动画时长
			testData:'', // 接收数据
		}
	},
	onLoad() {

	},
	onShow() {
		let data= {
			aa:1,
			bb:22
		}
	   this.$Api(this.$Url.getGameSet,{ ...data }).then(res =>{
		   this.testData = res.data
		   console.log(this.testData,11111)
		},(error) =>{

		})
	},
	methods: {
		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay
		},
		intervalChange(e) {
			this.interval = e.target.value
		},
		durationChange(e) {
			this.duration = e.target.value
		}
	}
}
</script>

<style scoped lang='less'>
	.uni-padding-wrap, .swiper{
		width: 100%;
		height: 500upx;
	}
	.swiper_img{
		width: 100%;
		height: 100%;
	}
</style>
