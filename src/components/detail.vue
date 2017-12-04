<template>
  <div class="router-bg" v-html="newsDetail"></div>
  
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      newsDetail:''
    }
  },
  async mounted () {
    let id = this.$route.params.id
     let res = await axios.get(`api/zhihu/detail/${id}`,{
      params:{}
    })
    this.newsDetail = res.data.data.body
    console.log(res)
  }
}
</script>

