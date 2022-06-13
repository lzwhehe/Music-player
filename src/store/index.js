import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/item.js'
import { getPhoneLogin } from '@/request/api/home.js'
export default createStore({
  state: {
    // 使用vueX存放全局长持有的播放列表
    playList: [{
      al: {
        id: 143632285,
        name: "梁山伯与茱丽叶",
        pic: 109951167308875650,
        picUrl: "https://p2.music.126.net/jb6cZY3SwfzDg9v3tR97gg==/109951167308875648.jpg",
        pic_str: "109951167308875648",
      },
      id: 1954909440,
      name: "梁山伯与茱丽叶",
    }],
    playListIndex: 0, // 默认下标为0
    // 暂停按钮的形式
    isBtnShow: true,
    detailShow: false,
    lyricList: {},
    currentTime: 0, // 当前时间
    duration:0, // 歌曲总时长
    isLogin:false, //判断是否登录 
    isFooterMusic:true, // 判断底部组件是否需要显示

  },
  mutations: {
    pushPlayList:function(state,value){
      state.playList.push(value)
    },
    updateIsBtnShow(state, value) {
      state.isBtnShow = value
    },
    updatePlayList: function (state, value) {
      state.playList = value
      console.log(state.playList);
    },
    updatePlayIndex: function (state, value) {
      state.playListIndex = value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyric: function (state, value) {
      state.lyricList = value;
    },
    updateCurrentTime: function (state, value) {
      // console.log(state.currentTime);
      state.currentTime = value
    },
    updateDuration:function(state,value){
      state.duration=value
    },
    updateIsLogin:function(state,value){
      state.isLogin=true
    },
    updateToken:function(state,value){
      state.token=value
      localStorage.setItem('token',state.token)
    },
    updateUser:function(state,value){
      state.user=value
    }
  },
  actions: {
    // 异步获取数据
    getLyric: async function (context, value) {
      //等待歌曲数据返回时，才能获取歌曲信息
      let res = await getMusicLyric(value);
      console.log(res);
      this.commit('updateLyric', res.data.lrc);

    },
    getLogin:async function(context,value){
      let res=await getPhoneLogin(value);
      // console.log(res);
      return res
    }
  },
  modules: {
  }
})
