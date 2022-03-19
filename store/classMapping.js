/**
 * 接收來自 classManeger.js Middleware 的 commit
 * 改變 class 後在組件中 mapState 動態綁定
 * @author elvis
 */

export const state = () => ({
    footerBlockClass: '',
    headerSectionClass: ''
})

export const mutations = {
    setLang (state, data) {
        state.lang = data
    },
    setClass (state, targetAndClass) {
        const config = targetAndClass.split(':')
        const target = config[0]
        const classes = config[1].replace(/,/g, ' ')
        state[target] = classes
    }
}
