<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian1"></use>
      </svg>
      <span>推荐</span>
    </div>
     <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-diantai"></use>
      </svg>
      <span>私人FM</span>
    </div>
     <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.iconList {
    display: flex;
    width: 100%;
    height: 2rem;
    margin-top: .2rem;
    justify-content: space-around;
    align-content: center;
    .iconItem {
        display: flex;
        flex: 1;
        height: 100%;
        flex-direction: column;
        align-items: center;
        .icon{
            width: 1rem;
            height: 1rem;
        }
    }
}
</style>