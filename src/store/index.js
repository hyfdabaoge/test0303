import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],
  currentNote: {}
}

const actions = {
  addNote ({commit}) {
    commit('ADD_NOTE')
  },
  editNote ({commit}, text) {
    commit('EDIT_NOTE', text)
  },
  updateActiveNote ({commit}, note) {
    commit('SET_ACTIVE_NOTE', note)
  },
  toggleFavorite ({commit}) {
    commit('TOGGLE_FAVORITE')
  },
  deleteNote ({commit}) {
    commit('DELETE_NOTE')
  }
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'new Note',
      imp: false
    }
    state.notes.push(newNote)
    state.currentNote = newNote
  },
  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },
  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },
  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },
  DELETE_NOTE (state) {
    for (var i = 0; i < state.notes.length; i++) {
      if (state.notes[i] === state.activeNote) {
        state.notes.splice(i, 1)
      }
    }
    state.activeNote = state.notes[0]
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
