<template>
  <div class="footerMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div class="MusicTitle">
        <p class="title">{{ playList[playListIndex].name }}</p>
        <p class="info">横滑可以切换上下首哦</p>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon" aria-hidden="true" @click="play" v-if="isBtnShow">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao-"></use>
      </svg>
      <audio
        ref="audio"
        :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
      ></audio>
      <van-popup
        v-model:show="detailShow"
        position="right"
        :style="{ height: '100%', width: '100%' }"
      >
        <musicDetail
          :musicList="playList[playListIndex]"
          :play="play"
          :isBtnShow="isBtnShow"
          :addDuration="addDuration"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import musicDetail from "@/components/item/musicDetail";
export default {
  data() {
    return {
      interVal: 0,
    };
  },
  computed: {
    ...mapState(["playList", "playListIndex", "isBtnShow", "detailShow"]),
  },
  mounted() {
    console.log(this.$refs);
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
  },
  updated() {
    this.$store.dispatch("getLyric", this.playList[this.playListIndex].id);
    this.addDuration();
  },
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsBtnShow(false);
        this.updateTime();
      } else {
        this.$refs.audio.pause();
        this.updateIsBtnShow(true);
        // 暂停清除定时器
        clearInterval(this.interVal);
      }
    },
    addDuration: function () {
      this.updateDuration(this.$refs.audio.duration);
    },
    updateTime: function () {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime);
      }, 1000);
    },
    ...mapMutations([
      "updateIsBtnShow",
      "updateDetailShow",
      "updateCurrentTime",
      "updateDuration",
    ]),
  },
  watch: {
    playListIndex: function () {
      // 监听下标，如果下标发生改变则自动播放
      this.$refs.audio.autoplay = true;
      // 如果检测到为播放态，则修改按钮为暂停
      if (this.$refs.audio.paused) {
        this.updateIsBtnShow(false);
      }
    },
    playList: function () {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true;
        this.updateIsBtnShow(false);
      }
    },
  },
  components: {
    musicDetail,
  },
};
</script>

<style lang="less">
.footerMusic {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.3rem;
  position: fixed;
  bottom: 0;
  padding: 0.2rem;
  background: #fff;
  border-top: 1px solid #999;
  .footerLeft {
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
    }
    .MusicTitle {
      .info {
        color: #999;
        font-size: 12px;
      }
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>