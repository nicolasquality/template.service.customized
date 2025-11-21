import { method } from '@vtex/api'

import { validate } from './validate'
import { status } from './status'

export default method({
  GET: [validate, status],
})
