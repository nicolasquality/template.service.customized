/* eslint-disable no-console */
import { getAppSettings } from '../settings'

export async function getProductByIDMiddleware(
  ctx: Context,
  next: () => Promise<void>
) {
  const {
    vtex: {
      route: { params },
    },
    clients: { catalog },
  } = ctx

  const { id } = params

  if (!id) {
    throw new Error('Product ID is required')
  }

  try {
    const appSettings = await getAppSettings(ctx)
    const appKeyGetProductByID = appSettings.appKeyGetProductByID
    const appTokenGetProductByID = appSettings.appTokenGetProductByID
    console.log('App Key:', appKeyGetProductByID)
    console.log('App Token:', appTokenGetProductByID)
    console.log('Product ID:', id)
    const response = catalog.getProductByID(
      id.toString(),
      appKeyGetProductByID,
      appTokenGetProductByID
    )

    ctx.status = 200
    ctx.body = response
    await next()

    return response
  } catch (error) {
    ctx.status = error.response?.status
    ctx.body = {
      error: `Error fetching product by ID ${error}`,
      details: error.message,
    }
    await next()
    return
  }
}
export default getProductByIDMiddleware
