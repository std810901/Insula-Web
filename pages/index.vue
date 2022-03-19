<template>
  <div>
    <Home />
  </div>
</template>
<script>
export default {
  name: 'index',
  head() {
    return {
      title: 'Insula',
      meta: [
        {
          property:'og:image',
          content: 'https://talfin-resource.s3.ap-northeast-1.amazonaws.com/activity/insula/img_insula_link_preview.jpg'
        }
      ]
    }
  },
}
</script>
