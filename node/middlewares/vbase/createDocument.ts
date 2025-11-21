import { json } from 'co-body'

export async function createDocument(ctx: Context, next: () => Promise<void>) {
  const {
    clients: { vbase },
  } = ctx

  let parameters = null
  try {
    parameters = await json(ctx.req)
  } catch (error) {
    ctx.status = 400
    ctx.body = {
      error: `Invalid JSON body ${error instanceof Error ? error.message : ''}`,
    }
    return
  }

  let responseSearchBucket = null

  try {
    try {
      responseSearchBucket = await vbase.getJSON(
        'nicolas-orders',
        'nicolasPath'
      )
    } catch {
      responseSearchBucket = null
    }

    // Se responseSearchBucket é um array, adiciona o novo documento
    // Se não existir ou for null, cria uma nova lista com o primeiro documento
    const newList = Array.isArray(responseSearchBucket)
      ? [...responseSearchBucket, parameters]
      : [parameters]

    await vbase.saveJSON('nicolas-orders', 'nicolasPath', newList)

    ctx.status = 200
    ctx.body = { message: 'Documento criado com sucesso:', newList }
    await next()
  } catch (error) {
    ctx.status = 500
    ctx.body = {
      error: error instanceof Error ? error.message : 'Erro ao criar documento',
    }
  }
}
