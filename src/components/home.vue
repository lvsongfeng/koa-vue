<template>
  <div>
      <Slider v-if="this.newList" :topStore="this.newList.top_stories"></Slider>
      <List  v-if="this.newList" :stories="this.newList.stories"></List>
      <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios"
import Slider from "@/components/slider";
import List from "@/components/list";
export default {
  components: {
    Slider,
    List
  },
  data() {
    return {
      newList: {}
    };
  },
  methods: {
    async getNew() {
      console.log("开始获取");
      let res = await axios.get("api/zhihu/latest", {
        params: {}
      })
      if(res.data.code === 200){
        this.newList = res.data.data
        //Object.assign(this.newList,res.data.data)
      }
    }
  },
  mounted() {
    this.getNew();
  }
};
</script>

