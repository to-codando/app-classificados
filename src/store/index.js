import { storeFactory } from 'lemejs'

import { state } from './state'
import { toolbarMutations } from './mutations/toolbar'

const mutations = {
  ...toolbarMutations
}

export const store = storeFactory({
  state,
  mutations
})
