import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class ProdList extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://httpstat.us', context, options)
  }

  public async getProdList(): Promise<string> {
    return this.http.get(ProdList.toString(), {
      metric: 'prodlist-get',
    })
  }

  public async getStatusWithHeaders(): Promise<IOResponse<string>> {
    return this.http.getRaw(ProdList.toString(), {
      metric: 'prodlist-get-raw',
    })
  }
}
