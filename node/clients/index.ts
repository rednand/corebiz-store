import { IOClients } from '@vtex/api'
import { OMS } from '@vtex/clients'
import { Catalog } from '@vtex/clients'

import Status from './status'
import Users from './users'
import { ClientOrder } from './clientorder'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get users() {
    return this.getOrSet('users', Users)
  }

  public get status() {
    return this.getOrSet('status', Status)
  }

  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }

  public get oms() {
    return this.getOrSet('oms', OMS)
  }

  public get clientOrder(){
    return this.getOrSet('clientorder', ClientOrder)
  }
}
