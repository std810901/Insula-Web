
## 針對 ...Manager.js 檔案的說明 (他們都是類似的開發邏輯和資料流向):
### **Manager.js
  - Manager結尾的.js檔為各種管理器，具體管理什麼請點進去檔案內看
  - 經研究判斷後像這樣寫管理器寫在 middleware 許多好處
 
1. Nuxt Lifecycle 會先進入伺服端 middleware，且我們可以在 middleware 內操作 vuex store 以及判斷 route，因此一些判斷及計算可以提前交給伺服端。

2. Lifecycle middleware 結束後，前端只要負責用 computed 取值，將會比在各自的 component 內 computed 中判斷後再做動作還要快速。

3. 各組件可以因此隔離依賴在裡面的 route 判斷，專注在使用 state mapping 出來的值


### 若你的程式中有許多需要在組件裡面判斷 $route 配合 store state 做其他事情的狀況，比如:
```javasctipt

<template>
  <div>
    <div v-if="$route.path==='...'"></div>
    <div>{{ app() }}</div>
    <img v-if="getUniverseImg" src="...">
  </div>
</template>


export default {
  computed () {
    getUniverseImg () {
      // 特定路由是否要顯示圖片
      if (this.$store.state.showUniverseImgPaths.includes(this.$route.path)) return true
      return false
    }
  },
  methods: {
    app () {
      if (this.$route.path === '...') {
        ...
        return this.$store.state.xxx
      } else {
        ...
      }
    }
  }
}

```
### 這樣路由和組件就綁在一起了，可以考慮建立這樣的資料流向:
  - 管理器內調整需要的規格(middleware) => store/...mapping.js 更新對應值 => 各組件使用取值 ex: import { mapState }
  - 截至目前 2012/10/20 有兩個 manager.js，一個管理class，一個管理圖片是否顯示
### 請開發者可自行全域搜尋組件內取值及綁定的HTML
### Author: Elvis