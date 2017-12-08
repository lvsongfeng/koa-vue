<template>
    <div class="router-bg">
      <div class="login-box">
        <h2>用户登录</h2>
        <el-input placeholder="请输入用户名" v-model="userName">
          <template slot="prepend">用户名</template>
        </el-input>
          <el-input placeholder="请输入密码" v-model="userPassWord">
          <template slot="prepend">密码</template>
        </el-input>
      </div>
      <el-button type="primary" @click="goLogin">登录</el-button>
    </div>
    
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      userName: "",
      userPassWord: ""
    };
  },
  methods: {
    async goLogin() {
      let res = await axios.post('api/zhihu/login',{
        params:{
          userName: this.userName,
          userPassWord: this.userPassWord
        }
      })
    }
  }
};
</script>
<style scoped>
.login-box {
  padding-top: 150px;
}
.el-input,
.el-button {
  margin-top: 20px;
}
</style>


