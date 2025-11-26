import { ExternalClient, IOContext } from '@vtex/api'

export default class Placeholder extends ExternalClient {
  constructor(context: IOContext) {
    super('https://jsonplaceholder.typicode.com', context)
  }

  public getPosts = () => {
    return this.http.get('/posts')
  }

  public getPostById = (id: number) => {
    return this.http.get(`/posts/${id}`)
  }

  public createPost = (data: {
    title: string
    body: string
    userId: number
  }) => {
    return this.http.post('/posts', data)
  }
}
