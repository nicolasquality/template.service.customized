import { IOClients } from '@vtex/api'

import Status from './status'
import Placeholder from './placeholder'
import CatalogCustom from './catalog'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
  public get placeholder() {
    return this.getOrSet('placeholder', Placeholder)
  }
  public get catalog() {
    return this.getOrSet('catalog', CatalogCustom)
  }
}
