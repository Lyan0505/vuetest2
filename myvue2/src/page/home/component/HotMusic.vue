<template>
  <div class="tab-content">
      <!-- top -->
      <div class="tab-top">
          <ul>
              <li :class="[flag==false ?'active':'']" @click='choose()'>推荐音乐</li>
              <li :class="[flag==true ?'active':'']" @click='chooseB()'>热门音乐</li>
          </ul>
      </div>

      <div class="tab-content">
          <!-- 推荐音乐 -->
          <div class="tuijian tab-item" v-if="flag">
              <!-- 推荐歌单 -->
              <div class="item">
                  <div class="title">
                      推荐歌单
                  </div>
                  <div class="content">
                      <ul>
                          <li class="list">
                              <a href="https://music.163.com/m/playlist?id=2121028740">
                                  <div class="img">
                                      <img src="http://p1.music.126.net/cSkRr3TbM6gFAHOR6UJO8Q==/18880813672743105.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                                  </div>
                                  <div class="text">假如你有时光机，你想回到童年吗?</div>
                              </a>
                          </li>
                          <li class="list">
                              <a href="">
                                  <div class="img">
                                      <img src="http://p1.music.126.net/_Ej6TahANI-aqsJCTf7uCA==/109951163240060789.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp" alt="">
                                  </div>
                                  <div class="text">“温柔点吧，这个世界已经够浮躁的了”</div>
                              </a>
                          </li>
                          <li class="list"></li>
                      </ul>
                  </div>

              </div>

          </div>
          <!-- 热歌榜 -->
          <div class="hot tab-item" v-else>
              这是热门音乐

          </div>
      </div>
  </div>


</template>

<script>
export default {
    data(){
        return{
        flag:false
        }
    },
    methods:{
        choose(){
            this.flag=true

        },
        chooseB(){
            this.flag=false
        }
    }
  
}
</script>

<style lang="less">

.tab-content{
    .tab-top{
      
       li{
          display: inline-block;
          font-size: 15px;
          color: #333;
          line-height: .4rem;
        }
    }
    .tab-content{
        .tab-item{
            //title
            .title{
                position: relative;
                padding-left: 9px;
                margin-bottom: 14px;
                font-size: 17px;
                height: 20px;
                line-height: 20px;
            }
        }
    }
    
}

</style>


