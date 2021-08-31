import { InstanceOptions, IOContext, JanusClient } from '@vtex/api'

export class ClientOrder extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions){
    super(context, {
      ...options,
      headers: {
        ...(options && options.headers),
        VtexIdClientAutoCookie: context.authToken,
      }
    })
  }

  public async getClientId(id: String): Promise<any> {
    return this.http.get(`/api/profile-system/pvt/profiles/${id}/personalData`)
  }
} 