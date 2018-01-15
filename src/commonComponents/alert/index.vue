<template>
<div class="zp-popup-container" v-show="options.showStatus">
  <div class="zp-modal"></div>
  <div class="zp-alter is-clearfix">
    <div class="zp-popup-header is-relative">
      <div class="zp-popup__title has-text-left">{{options.showSttitleatus}}</div>
      <div class="zp-popup__close is-absolute is-pointer" @click="closeAlter">关闭</div>
    </div>
  <div class="zp-popup__body">
    <div class="zp-popup__content is-padding-15">
     {{options.content}}
    </div>
  </div>
  <div class="zp-popup__footer is-flex is-padding-15">
    <div class="zp-popup__cancel is-pointer" @click="closeAlter"> {{options.cancel}}</div>
    <div class="zp-popup__confirm is-pointer" @click="confirmAlter"> {{options.confirm}}</div>
  </div>
  </div>
</div>
 
</template>
<script>
export default {
  props: {
    options: Object
  },
  data () {
    return {

    }
  },
  methods: {
    closeAlter () {
      this.$emit('onCancel')
    },
    confirmAlter () {
      this.$emit('onConfirm')
    }
  }
}
</script>


