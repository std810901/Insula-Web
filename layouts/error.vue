<template>
  <div class="container err-page">
    <div>{{ error }}</div>
    <PageNotFound />
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .err-page {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 300px;
  }
</style>