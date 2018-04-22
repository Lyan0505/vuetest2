# 作为菜鸟搭建vue 项目
### 首先node 安装，
* 安装vue-cli  npm intsall vue-cli -g
* 使用vue-cli 初始化项目  
> vue init webpack-simple  my-project
* 然后进入到目录 cd my-project
* 安装依赖  npm install
* 开始运行  npm run dev

### vue 计算属性
* methods 代替computed 效果是一样的，但是 computed 基于他的依赖缓存，只有相关依赖发生变换的时候才会取值，methods 在重新渲染的时候 函数就会重新执行；
* 计算属性默认只有 getter 
* Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

### 过渡动画

```
<div id="example-2">
  <button @click="show = !show">Toggle show</button>
  <transition name="bounce">
    <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
  </transition>
</div>

new Vue({
  el: '#example-2',
  data: {
    show: true
  }
})


```

#### 2.20 新增 显性过渡持续的时间
* <transition :duration="1000">...</transition>
* 也可以定制进入移除的时间 ：<transition :duration="{ enter: 500, leave: 800 }">...</transition>

