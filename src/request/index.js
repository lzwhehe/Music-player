// 封装index.js
import axios from "axios";
//  基本部分进行抽取
let service = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 3000
})
export default service