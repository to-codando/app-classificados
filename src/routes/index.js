import { routerFactory } from 'lemejs'

import { appNotFound } from '../components/appNotFound'
import { appDashboard } from '../components/appDashboard'
import { appProfile } from '../components/appProfile'
import { appUnityRegistration } from '../components/appUnityRegistration'

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/$/,
  component: appDashboard,
  isInitial: true
})
router.add({
  hash: '/profile',
  validator: /^#\/profile$/,
  component: appProfile
})
router.add({
  hash: '/unity-registration',
  validator: /^#\/unity-registration$/,
  component: appUnityRegistration
})

router.add({
  hash: 'not-found',
  validator: /^#\/not-found$/,
  component: appNotFound,
  isDefault: true
})

export { router }
