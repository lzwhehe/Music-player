<template>
  <div>
    <TopNav />
    <SwiperTop />
    <iconList/>
    <MusicList />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/home/TopNav";
import SwiperTop from "@/components/home/SwiperTop";
import iconList from "@/components/home/iconList"
import MusicList from "@/components/home/MusicList";
export default {
  name: "Home",
  components: {
    TopNav,
    SwiperTop,
    iconList,
    MusicList,
  },
};
</script>
