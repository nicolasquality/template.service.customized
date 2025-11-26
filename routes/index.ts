import { method } from '@vtex/api'
import { createDocument } from '../node/middlewares/vbase/createDocument'
import { deleteDocument } from '../node/middlewares/vbase/deleteDocument'
import { getDocument } from '../node/middlewares/vbase/getDocument'
import getPostsMiddleware from '../node/middlewares/placeholder/getPostsMiddleware'
import getPostByIdMiddleware from '../node/middlewares/placeholder/getPostByIdMiddleware'
import createPostMiddleware from '../node/middlewares/placeholder/createPostMiddleware'
import getProductByIdMiddleware from '../node/middlewares/catalog/getProductById'

export const routes = {
  getDocument: method({
    GET: [getDocument],
  }),
  createDocument: method({
    POST: [createDocument],
  }),
  deleteDocument: method({
    DELETE: [deleteDocument],
  }),
  getPosts: method({
    GET: [getPostsMiddleware],
  }),
  getPostById: method({
    GET: [getPostByIdMiddleware],
  }),
  createPost: method({
    POST: [createPostMiddleware],
  }),
  getProductById: method({
    GET: [getProductByIdMiddleware],
  }),
}
