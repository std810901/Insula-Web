/**
 * 圖片管理器: 管理<img>圖檔是否顯示
 * 語法同 classManager.js
 * @author elvis
 * @param {*} context - Some Vue context params
 */

export default function (context) {
  const { store, route } = context
  const routeName = route.name

  // 另一種判斷方式，但以後 if 會過多
  // const showUniverseImgPaths = [
  //   '/'
  // ]
  // let showUniverse = false
  // if (showUniverseImgPaths.includes(routeName)) {
  //   showUniverse = true
  // }
  // store.commit('enableImgMapping/setEnable', `useUniverseImg:${showUniverse}`)

  // 用開關的方式控制各個圖片在各個路由是否要開啟
  switch (routeName) {
    case 'index':
      store.commit('enableImgMapping/setEnable', 'useUniverseImg:true')
      break
    case 'form':
      store.commit('enableImgMapping/setEnable', 'useUniverseImg:false')
      break
    case '9Careers':
      store.commit('enableImgMapping/setEnable', 'useUniverseImg:false')
      break
    case '9Careers_isurvey':
      store.commit('enableImgMapping/setEnable', 'useUniverseImg:false')
      break
    default:
      break
  }
}
