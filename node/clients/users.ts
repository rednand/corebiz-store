import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default class Users extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(
      'https://mdz06pnka0.execute-api.us-east-2.amazonaws.com',
      context,
      options
    )
  }

  public async getStatus(id: string): Promise<string> {
    return this.http.get(id)
  }
}
