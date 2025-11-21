import { method } from '@vtex/api'
import { createDocument } from '../node/middlewares/vbase/createDocument'
import { deleteDocument } from '../node/middlewares/vbase/deleteDocument'
import { getDocument } from '../node/middlewares/vbase/getDocument'

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
}
