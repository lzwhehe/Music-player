<template>
  <div class="itemMusicList">
    <div class="itemMusicListTop">
      <div class="itemMusicListTopLeft">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span class="All"
          >播放全部<span class="AllSongs"
            >(共{{ itemList.length }}首)</span
          ></span
        >
      </div>
      <div class="itemMusicListTopRight">
        <button>+ 收藏({{ subscribedCount }})</button>
      </div>
    </div>
    <div class="itemMusicListContent">
      <ul>
        <li class="oneMusic" v-for="(music, i) in itemList" :key="music.id">
          <div class="oneMusicLeft" @click="playMusic(i)">
            <span class="num">{{ i + 1 }}</span>
            <div class="onMusicContent">
              <p class="songName">{{ music.name }}</p>
              <div class="titleNameContainer">
                <span
                  class="titleName"
                  v-for="(item1, index) in music.ar"
                  :key="index"
                >
                  {{ item1.name }}
                </span>
              </div>
            </div>
          </div>
          <div class="onMusicRight">
            <div class="mv">
              <svg class="icon" aria-hidden="true" v-if="music.mv !== 0">
                <use xlink:href="#icon-shipin"></use>
              </svg>
            </div>
            <div class="liebiao">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiaoxiangmu"></use>
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  setup(props) {
    console.log(props);
  },
  props: ["itemList", "subscribedCount"],
  methods:{
    playMusic:function(i){
      this.updatePlayList(this.itemList)
      this.updatePlayIndex(i);
    },
    ...mapMutations(['updatePlayList','updatePlayIndex'])
}
}
</script>

<style lang="less">
.itemMusicList {
  width: 100%;
  height: 100%;
  border-radius: 0.4rem 0.4rem 0rem 0rem;
  background-color: #fff;
  .itemMusicListTop {
    display: flex;
    height: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;

    .itemMusicListTopLeft {
      display: flex;
      width: 3rem;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .span {
        font-weight: 700;
        .span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
      }
    }
    .itemMusicListTopRight {
      height: 100%;
      padding: 0.1rem;
      button {
        width: 2.4rem;
        height: 100%;
        border-radius: 0.6rem;
        background-color: red;
        border-style: none;
        color: #fff;
      }
    }
  }
  .itemMusicListContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0.2rem;
    .oneMusic {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.7rem;
      height: 1rem;
      .oneMusicLeft {
        display: flex;
        height: 100%;
        .num {
          width: 20px;
          height: 100%;
          text-align: center;
          line-height: 1rem;
          color: #666;
          margin-right: 0.16rem;
        }
        .onMusicContent {
          height: 100%;
          margin-top: 0.2rem;
          // 直接通过标签原有的块特性换行,这种情况用flex属于是强行加戏了
          .songName {
            width: 4.54rem;
            height: 0.4rem;
            margin-bottom: 0.04rem;
            // 超过加省略号
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          .titleNameContainer {
            width: 3rem;
            height: 0.4rem;
            // background-color: red;
            overflow: hidden;
            text-overflow: ellipsis;
            // 强制同一行显示文本
            white-space: nowrap;
            .titleName {
              margin-right: 0.08rem;
              font-weight: 400;
              font-size: 0.24rem;
              color: #999;
            }
          }
        }
      }
      .onMusicRight {
        display: flex;
        width: 20%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        .icon {
          width: 0.6rem;
          height: 0.6rem;
          .mv {
            position: absolute;
            right: 0;
          }
          .liebiao {
            position: absolute;
            left: 0;
          }
        }
      }
    }
  }
}
</style>