/**
 * class管理器:,在指定的 route 中調整要動態改變綁定在 HTML 上的 class
 *
 * 若要加入多個 class 請使用','號隔開。
 * Example:
 * dynamicBindClass:className1,className2...
 *
 * @author elvis
 * @param {*} context - Some Vue context params
 */

export default function (context) {
  const { store, route } = context
  const routeName = route.name
  // console.log('routeName:', routeName)
  switch (routeName) {
    case 'index':
      store.commit('classMapping/setClass', 'footerBlockClass:')
      store.commit('classMapping/setClass', 'headerSectionClass:p-sticky')
      break
    case 'form':
      store.commit('classMapping/setClass', 'footerBlockClass:mt-0')
      store.commit('classMapping/setClass', 'headerSectionClass:')
      break
    case '9Careers':
      store.commit('classMapping/setClass', 'footerBlockClass:mt-0')
      store.commit('classMapping/setClass', 'headerSectionClass:')
      break
    case '9Careers_isurvey':
      store.commit('classMapping/setClass', 'footerBlockClass:mt-0')
      store.commit('classMapping/setClass', 'headerSectionClass:')
      break
    default:
      break
  }
}
