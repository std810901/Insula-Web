<template>
  <div></div>
</template>

<script>
export default {
  layout: 'noNavbarAndFooter',
  middleware (context) {
    // if (process.server) {
    //   const { req, res, beforeNuxtRender } = context
    //   console.log('伺服器context', { req, res, beforeNuxtRender })
    // }
    // // Client-side
    // if (process.client) {
    //   const { from, nuxtState } = context
    //   console.log('Client-side context', { from, nuxtState })
    // }
  },
  fetch (context) {
    // console.log('伺服器 fetch context', context)
    // // Client-side
    // if (process.server) {
    //   const { req, res, beforeNuxtRender } = context
    //   console.log('伺服器 fetch context', { req, res, beforeNuxtRender })
    // }
    // // Client-side
    // if (process.client) {
    //   const { from, nuxtState } = context
    //   console.log('Client-side fetch context', { from, nuxtState })
    // }
  }
}
</script>

<style>
</style>
