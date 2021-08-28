import { IOClients } from '@vtex/api'

import Users from './users'

export class Clients extends IOClients {
  public get users() {
    return this.getOrSet('users', Users)
  }
}
