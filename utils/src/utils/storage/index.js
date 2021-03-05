import { createStore } from './store-engine'
import storages from './storages/all'
import expirePlugin from './plugins/expire'

export default function (namespace) {
  return createStore([...storages], expirePlugin, namespace)
}
