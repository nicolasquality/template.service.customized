export async function deleteDocument(ctx: Context, next: () => Promise<void>) {
  const {
    clients: { vbase },
  } = ctx

  try {
    vbase.deleteFile('nicolas-orders', 'nicolasPath')

    ctx.status = 200
    ctx.body = {
      message: 'Documentos deletados com sucesso',
    }
  } catch (error) {
    ctx.status = 404
    ctx.body = { error: error.message }
  }
  await next()
}
