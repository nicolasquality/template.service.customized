import { InstanceOptions, IOContext, JanusClient } from '@vtex/api'
export default class CatalogCustom extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    })
  }
  public getProductByID = async (
    id: string,
    appKey: string,
    appToken: string
  ) => {
    const response = await this.http.get(
      `https://acctglobal.vtexcommercestable.com.br/api/catalog/pvt/product/${id}`,
      {
        headers: {
          'X-VTEX-API-AppKey': appKey,
          'X-VTEX-API-AppToken': appToken,
          'Content-Type': 'application/json',
        },
      }
    )
    return response
  }
}
