export const state = () => ({
    theme: ''
})

export const mutations = {
    setTheme(state, data) {
        state.theme = data
    }
}
