import type { ClientsConfig, ServiceContext, RecorderState, EventContext } from '@vtex/api'
import {  LRUCache, method, Service } from '@vtex/api'

import { Clients } from './clients'
import { getUsersById } from './middlewares/getUsersById'
import { status } from './middlewares/status'
import { prodlist } from './middlewares/prodlist'
import { validate } from './middlewares/validate'
//import { allStates } from './middlewares/allStates'
import { someStates } from './middlewares/someStates'

const TIMEOUT_MS = 800

const memoryCache = new LRUCache<string, any>({ max: 5000 })

metrics.trackCache('status', memoryCache)

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    status: {
      memoryCache,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    code: number
  }

  interface StatusChangeContext extends EventContext<Clients> {
    body: {
      email: string
      domain: string
      orderId: string
      currentState: string
      lastState: string
      currentChangeDate: string
      lastChangeDate: string
    }
  }
}

export default new Service({
  clients,
  routes: {
    users: method({
      GET: [getUsersById],
    }),
    status: method({
      GET: [validate, status],
    }),
    prodlist: method({
      GET: [prodlist]
    }),
  },
  events: {
    someStates,
  },    
})
