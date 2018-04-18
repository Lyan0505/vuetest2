<template>
  
<header :class="['header-contain', 'fixed-header', isBottomBorder ? 'bottom-border' : '', className]" :style="{backgroundColor: bgColor}">
      <slot></slot>
</header>
</template>
<script>
export default {
      name: "header",
      props: ["type", "bgColor", "fixed", "className"],
    data(){
        return{
            isBottomBorder:false
        }
    }
  
}
</script>

<style lang="less">
.header-contain{
   
    z-index: 200;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: .44rem;
    background: #fff;
    line-height: .44rem;
   
    h1{
        text-align: center;
        font-size: 24px;
        font-weight: 500;
    }
   
}

</style>


