import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'
import { postModule } from '@/store/postModule'

const vuexPersist = new VuexPersist({
  key: 'blog',
  storage: window.localStorage
})

export default createStore({
  modules: {
    post: postModule
  },
  plugins: [vuexPersist.plugin]
})
