<template>
  <img src="../assets/beijing.png" alt="" class="bgimg" />
  <div class="login">
    <div class="loginTop">HI,Welcome</div>
    <div class="loginContent">
      <div class="user">
        <span>用户名:</span>
        <input
          type="text"
          name="phone"
          class="phone"
          v-model="phone"
          placeholder="请输入手机号码"
        />
      </div>
      <div class="password">
        <span>密码:</span>
        <input
          type="password"
          name="passworld"
          class="passworld"
          v-model="password"
          placeholder="请输入密码"
        />
      </div>

      <button class="btn" @click="Login">登录</button>
    </div>
  </div>
</template>
<script>
import { getLoginUser } from "@/request/api/home.js";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    Login: async function () {
      let res = await this.$store.dispatch("getLogin", {
        phone: this.phone,
        password: this.password,
      });
      console.log(res);
      if (res.data.code === 200) {
        //如果返回的code等于200，说明登录成功，就跳转个人中心页面
        this.$store.commit("updateIsLogin", true);
        this.$store.commit("updateToken", res.data.token);
        let result = await getLoginUser(res.data.account.id);
        console.log(result);
        this.$store.commit("updateUser", result);
        this.$router.push("/infoUser");
      } else {
        alert("手机号码或者密码错误");
        this.password = "";
      }
    },
  },
};
</script>
<style lang="less" scoped>
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(1rem);
}
.login {
  width: 100%;
  height: 13.34rem;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(4px);
  .loginTop {
    margin-top: 2rem;
    font-size: 1rem;
    color: #fff;
  }
  .loginContent {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 1.5rem;
    .user,.password {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            width: 1.2rem;
        }
    }
    input,
    button {
      border-radius: .4rem;
      border-style: none;
    }
    .phone,
    .passworld {
      width: 5rem;
      height: 1rem;
      border: 0.02rem solid #999;
    }
    .btn {
      width: 2rem;
      height: 0.6rem;
    }
  }
}
</style>
