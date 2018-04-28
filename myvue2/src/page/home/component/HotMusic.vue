<template>
  <div class="tab-content">
      <!-- top -->
      <div class="tab-top">
          <ul>
              <li :class="[flag==true ?'active':'']" @click='choose()'>推荐音乐</li>
              <li :class="[flag==false ?'active':'']" @click='chooseB()'>热门音乐</li>
          </ul>
      </div>

      <div class="tab-content">
          <!-- 推荐音乐 -->
          <div class="tuijian" v-if="flag">
              <!-- 推荐歌单 -->
              <div class="item">
                  <div class="title">
                      推荐歌单
                  </div>
                  <div class="content">
                      <ul>
                          <li class="list">

                          </li>
                          <li class="list"></li>
                          <li class="list"></li>
                      </ul>
                  </div>

              </div>

          </div>
          <!-- 热歌榜 -->
          <div class="hot" v-else>
              这是热门音乐

          </div>
      </div>
  </div>


</template>

<script>
export default {
    data(){
        return{
        flag:true
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
        font-size: 20px;

    }
    
}

</style>


