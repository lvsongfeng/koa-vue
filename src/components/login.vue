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
        <h1 @click="openAlter">来点我啊</h1>
      </div>
      <alter :options = "options" @onCancel="onCancelAction" @onConfirm="onConfirmAction"></alter>
    </div>
</template>
<script>
import axios from "axios";
import Alter from '../commonComponents/alert'
export default {
  data() {
    return {
      userName: "",
      userPassWord: "",
      options:{
        content: '内容我是内容',
        title: '标题我是标题',
        type: 'alert',
        confirm: '确定辣',
        cancel: '取消辣',
        close: true,
        showStatus: false,
        confirmHandler: function () {
          window.alert('I am alert')
        }
      }
    };
  },
  methods: {
    onCancelAction () {
      this.options.showStatus = false
      alert('点了取消')
    },
    onConfirmAction () {
      this.options.showStatus = false
      alert('点了确定')
    },
    openAlter () {
      this.options.showStatus = true
    },
    async goLogin() {
      let res = await axios.post("api/zhihu/login", {
        params: {
          userName: this.userName,
          userPassWord: this.userPassWord
        }
      });
    },
    addProps() {
      this.obj = Object.assign({},this.obj,{d:4})
      this.$nextTick(()=>{
        console.log('dom 更新完成')
      })
     // this.$set(this.obj,'d', 4)

    }
  },
  components: {
    Alter
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


