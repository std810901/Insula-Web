export const state = () => ({
    lang: process.server ? '' : localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh'
})

export const mutations = {
    setLang(state, data) {
        state.lang = data
    }
}
