/* eslint-disable no-console */
import { InstanceOptions, IOContext, JanusClient } from '@vtex/api'

export default class CatalogCustom extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        Accept: 'application/json',
        ...options?.headers,
      },
    })
  }

  public getProductByID = (id: string, appKey: string, appToken: string) => {
    console.log('App Key:', appKey)
    console.log('App Token:', appToken)
    console.log('Product ID:', id)
    return (
      this.http.get(
        `https://acctglobal.vtexcommercestable.com.br/api/catalog/pvt/product/${id}`
      ),
      {
        headers: {
          'X-VTEX-API-AppKey': appKey,
          'X-VTEX-API-AppToken': appToken,
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
