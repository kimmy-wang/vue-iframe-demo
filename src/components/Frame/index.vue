<template>
  <div class="layout-frame">
    <iframe class="iframe" :src="link" referrerpolicy="origin-when-cross-origin" sandbox="allow-scripts allow-same-origin" />
  </div>
</template>

<script>
export default {
  name: 'Frame',
  props: {
    link: {
      type: String,
      default: ''
    }
  },
  watch: {
    link() {
      console.log('link', this.link)
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    }
  },
  created() {
    console.log('created', this.link)
  },
  activated() {
    console.log('activated', this.link)
    this.$nextTick(() => {
      this.$forceUpdate()
    })
  }
}
</script>

<style lang="scss" scoped>
  .layout-frame {
    height: calc(100vh - 102px);
    .iframe {
      width: 100%;
      height: 100%;
      border: 0;
      overflow-x: scroll;
      overflow-y: hidden;
    }
  }

</style>
