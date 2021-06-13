export const state = () => ({
  manga: [],
  recommended: [],
  latest: [],
  loading: true
})

export const mutations = {
  manga(state, payload) {
    state.manga = payload
  },
  recommended(state, payload) {
    state.recommended = payload
  },
  latest(state, payload) {
    state.latest = payload
  },
  loading(state, payload) {
    state.loading = payload
  },
}

export const actions = {
  getRecommended({ commit }) {
    this.$axios
      .get("https://mangamint.kaedenoki.net/api/recommended")
      .then(_ => {
        commit('recommended', _.data.manga_list)
        commit('loading', false)
      })
      .catch(_ => console.log(_))
  },
  getLatest({ commit }) {
    this.$axios
      .get("https://mangamint.kaedenoki.net/api/manga/page/1")
      .then(_ => {
        commit('latest', _.data.manga_list)
        commit('loading', false)
      })
      .catch(_ => console.log(_))
  },
}
