async function createPostMiddleware(
  ctx: Context,
  next: () => Promise<unknown>
) {
  const {
    clients: { placeholder },
  } = ctx

  const { title, body, userId } = ctx.params

  try {
    const response = await placeholder.createPost({ title, body, userId })
    ctx.status = 200
    ctx.body = response
  } catch (error) {
    ctx.status = 500
    ctx.body = {
      error: error instanceof Error ? error.message : 'Erro ao buscar posts',
    }
  }
  await next()
}
export default createPostMiddleware
