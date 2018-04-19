<template>
   <div class="home-containr">
       <!-- <router-view></router-view> -->
       <Header > 
           <h1>这是一个头部</h1>
       </Header>
       <!-- 轮播 -->
       <div class="slider-content">
          <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="item in items" :key="item"> 
                <img :src="item" class="index_img">
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>
       </div>   

       <!-- 这是一个tab 切换 -->
       <HotMusic/>



   </div>
</template>

<script>
import Header from "../../../src/component/header/header.vue";
import HotMusic from './component/HotMusic.vue';


import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      items: [
        "https://sr.aihuishou.com/cms/image/6365359597414257001245378094.png",
        "https://sr.aihuishou.com/cms/image/6365793341709099801746851724.png",
        "https://sr.aihuishou.com/cms/image/6365852065505734201885211726.jpg"
      ],
      swiperOption: {
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        centeredSlides: true,
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    };
  },
  methods: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },

  components: {
    Header,
    swiper,
    swiperSlide,
    HotMusic
  }
};
</script>

<style lang="less">
@import "../../less/swiper.min.css";
.slider-content{
    width: 100%;
    margin-top: .44rem;
    img{
        width: 100%;
    }
}

</style>


