/**
 * 接收來自 enableImgManager.js Middleware 的 commit
 * 改變 true、false 後在組件中 mapState 動態綁定是否顯示圖片
 * @author elvis
 */

export const state = () => ({
    useUniverseImg: false
})

export const mutations = {
    setEnable (state, targetAndBoo) {
        const config = targetAndBoo.split(':')
        const target = config[0]
        const booText = config[1].replace(/,/g, ' ')
        state[target] = booText === 'true' ? 1 : 0
    }
}
