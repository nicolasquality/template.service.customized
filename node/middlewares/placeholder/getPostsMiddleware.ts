async function getPostsMiddleware(ctx: Context, next: () => Promise<unknown>) {
  const {
    clients: { placeholder },
  } = ctx

  try {
    const response = await placeholder.getPosts()
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
export default getPostsMiddleware
