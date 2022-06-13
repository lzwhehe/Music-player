<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        class="my-swiper"
        show-indicators="false"
      >
        <van-swipe-item v-for="music in state.musicList" :key="music.id">
          <router-link :to="{path:'/itemMusic',query:{id:music.id}}">
          <img :src="music.picUrl" :alt="music.name" />
          <span class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gf-play"></use>
            </svg>
            {{ changeCount(music.playCount) }}
          </span>
          <span class="name">
            {{ music.name }}
          </span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
export default {
  /*  data() {
    return {
      musicList: [],
    };
  },
  methods: {
    async getGedan() {
      let res = await getMusicList();
      this.musicList = res.data.result;
    },
    changeCount(num) {
      // tofixed四舍五入保留几位小数的方法
      if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
  },
  mounted() {
    this.getGedan();
  }, */
  // Vue3 代码风格 - 组合式API
  setup() {
    // reactive 响应式数据
    const state = reactive({
      musicList: [],
    });
    // methods
    function changeCount(num) {
      if (num > 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num > 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    };
    // onMouted = mouted
    onMounted(async () => {
      let res = await getMusicList();
      state.musicList = res.data.result;
    });
    return { state,changeCount };
  },
};
</script>

<style lang="less">
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 4rem;
    .van-swipe-item {
      position: relative;
      margin-right: 0.2rem;
      img {
        width: 100%;
        height: 2.8rem;
        border-radius: 0.2rem;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        color: rgb(201, 201, 201);
        .icon {
          width: 0.3rem;
          height: 0.3rem;
          fill: red;
        }
      }
    }
  }
}
</style>