import { Swipe, SwipeItem,Button,Popup  } from 'vant';

// 放入数组中,对组件进行管理
let plugins = [
    Swipe, SwipeItem,Button,Popup 
]
export default function getVant(app){
  plugins.forEach(item=>{
      return app.use(item)
  })
}