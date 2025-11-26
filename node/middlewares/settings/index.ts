import { Apps } from '@vtex/api'

export async function getAppSettings(ctx: Context) {
  const app = new Apps(ctx.vtex)

  const settings = (await app.getAppSettings(
    process.env.VTEX_APP_ID || ''
  )) as Promise<{
    appKeyGetProductByID: string
    appTokenGetProductByID: string
  }>

  return settings
}
