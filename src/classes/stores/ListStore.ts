import { Store, Adapter } from '../../interfaces'
import { List } from '../List'

export class ListStore<V = any> extends List<V> implements Store {
  constructor(private readonly adapter: Adapter) {
    super()
  }

  async load() {
    for (const v of await this.adapter.read([]))
      this.push(v)
    return this
  }

  async save() {
    await this.adapter.write(this)
    return this
  }
}
