import type { ClientsConfig, ServiceContext, RecorderState } from '@vtex/api'
import { method, Service } from '@vtex/api'

import { Clients } from './clients'
import { getUsersById } from './middlewares/getUsersById'
import { status } from './middlewares/status'
import { updateClientAws } from './event/updateClientAws'

const TIMEOUT_MS = 800

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    code: number
  }
}

export default new Service({
  clients,
  routes: {
    users: method({
      GET: [getUsersById],
    }),
    status: method({
      GET: [status],
    }),
  },

  events: {
    updClientAws: updateClientAws
  }    
})
