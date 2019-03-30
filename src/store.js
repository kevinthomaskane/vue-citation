import Vue from 'vue'
import Vuex from 'vuex'
import siteInfo from './assets/sites.json'
import dateFormat from 'dateformat'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    citationType: '',
    url: siteInfo.url,
    articleTitle: siteInfo.articleTitle,
    dateOfPublication: siteInfo.dateOfPublication,
    authorFirstname: siteInfo.authorFirstname,
    authorLastname: siteInfo.authorLastname,
    website: siteInfo.website,
    formattedCitation: ''
  },
  getters: {
    citationType: state => state.citationType,
    formattedCitation: state => state.formattedCitation,
    fullState: state => state,
  },
  mutations: {
    setCitationType (state, ctype) {
      state.citationType = ctype
    },
    updateFormattedCitation (state, ctype) {
      const date = new Date(state.dateOfPublication)
      switch (ctype) {
        case 'MLA':
          state.formattedCitation = `${state.authorLastname}, ${state.authorFirstname}. "${state.articleTitle}." ${state.website}, ${state.dateOfPublication}, ${state.url}.`
          break;
        case 'APA': 
          state.formattedCitation = `${state.authorLastname}, ${state.authorFirstname}. (${dateFormat(date, 'yyyy')}, ${dateFormat(date, 'mmmm')} ${dateFormat(date, 'dd')}). ${state.articleTitle}. ${state.url}.`
          break;
        case 'Chicago': 
          state.formattedCitation = `${state.authorLastname}, ${state.authorFirstname}. "${state.articleTitle}." ${state.website}. ${dateFormat(date, 'mmmm')} ${dateFormat(date, 'dd')}, ${dateFormat(date, 'yyyy')}. ${state.url}.`
          break;
        default:
          null;
          break;
      }
    },
    updateCitationValues (state, obj) {
      for (let prop in obj) {
        this.state[prop] = obj[prop]
      }
    }
  },
  actions: {
    setCitationType ({commit}, ctype) {commit('setCitationType', ctype)},
    updateFormattedCitation ({commit}, ctype) {commit('updateFormattedCitation', ctype)},
    updateCitationValues ({commit}, payload) {commit('updateCitationValues', payload)}
  }
})