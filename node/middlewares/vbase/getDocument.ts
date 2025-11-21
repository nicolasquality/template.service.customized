export async function getDocument(ctx: Context, next: () => Promise<void>) {
  const {
    clients: { vbase },
  } = ctx

  const response = await vbase.getJSON('nicolas-orders', 'nicolasPath', true)

  try {
    ctx.status = 200
    ctx.body = response

    await next()
  } catch (error) {
    ctx.status = 404
    ctx.body = { error: error.message }
  }
}
