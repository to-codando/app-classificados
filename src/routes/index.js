import { routerFactory } from 'lemejs'

import { appNotFound } from '../components/appNotFound'
import { appDashboard } from '../components/appDashboard'
import { appProfile } from '../components/appProfile'
import { appUnityRegistration } from '../components/appUnityRegistration'

const router = routerFactory()

router.add({
  label: 'Início',
  hash: '/',
  validator: /^#\/$/,
  component: appDashboard,
  isInitial: true
})

router.add({
  label: 'Perfil',
  hash: '/profile',
  validator: /^#\/profile$/,
  component: appProfile
})

router.add({
  label: 'Anúncios',
  hash: '/campaign',
  validator: /^#\/campaign$/,
  component: appUnityRegistration
})

router.add({
  label: 'Página desconhecida',
  hash: 'not-found',
  validator: /^#\/not-found$/,
  component: appNotFound,
  isDefault: true
})

export { router }
