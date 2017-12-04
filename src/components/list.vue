<template>
  <div>
      <ul>
          <li v-for="(item,index) in stories" :key="index" @click="goDetail(item.id)">
                  {{item.title}}
              
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  props: ["stories"],
  methods: {
    goDetail(id) {
     this.$router.push({ name: 'detail', params: { id:id }})
    }
  }
};
</script>
<style >
ul li {
  text-align: left;
  line-height: 40px;
}
</style>

