import { Store, Adapter } from '../../interfaces'

export class MapStore<K = any, V = any> extends Map<K, V> implements Store {
  constructor(private readonly adapter: Adapter) {
    super()
  }

  async load() {
    for (const [k, v] of await this.adapter.read([]))
      this.set(k, v)
    return this
  }

  async save() {
    await this.adapter.write([...this])
    return this
  }
}
