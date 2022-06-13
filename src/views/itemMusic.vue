<template>
  <itemMusicTop :playlist="state.playlist" />
  <itemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList,getItemList } from "@/request/api/item.js";
import itemMusicTop from "@/components/item/itemMusicTop";
import itemMusicList from "@/components/item/itemMusicList";
export default {
  components: {
    itemMusicTop,
    itemMusicList,
  },
  setup() {
    // 相当于vue2-data
    const state = reactive({
      playlist: {},
      itemList:[]
    });
    onMounted(async () => {
      // 得到页面id
      let id = useRoute().query.id;
      // 获取歌单详情页
      let res = await getMusicItemList(id);
      // 获取歌单的歌曲
      let result = await getItemList(id);

      // 将api数据存入data
      state.playlist = res.data.playlist;
      state.itemList = result.data.songs
      // 由于可能会dom加载完成之后，数据没过来，导致数据丢失
      // 所以这里将数据保存到sessionSroage里面
      sessionStorage.setItem("itemDetail", JSON.stringify(state));

      // playlist
      console.log('@playList',res.data.playlist);
      // itemList
      console.log('@itemList',result.data.songs);
    });
    return { state };
  },
};
</script>

<style>
</style>