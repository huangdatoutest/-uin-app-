<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
						<swiper-item v-for="(item,index) in testData.banner_lists" :key="index">
							<image class="swiper_img" :src="item"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			testData:''
		}
	},
	onLoad() {

	},
	onShow() {
	   this.$Api(this.$Url.getGameSet,{
			 aa:1,
			 bb:22
		 }).then(res =>{
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
	.swiper_img{
		width: 100%;
		height: 100%;
	}
</style>
