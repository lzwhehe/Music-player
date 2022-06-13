<template>
  <!-- router占位符号，根据路由的变化，将相关组件放置该插槽中 -->
  <router-view/>
  <footerMusic v-show="$store.state.isFooterMusic"/>
</template>
<script>
import footerMusic from "@/components/item/footerMusic.vue";
export default {
   components: {
      footerMusic
   }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: .5rem;
  height: .5rem;  
}
a {
  color: black;
}
::-webkit-scrollbar{
display:none; 
}
</style>
