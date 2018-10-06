import { Store, Adapter } from '../../interfaces'

export class SetStore<V = any> extends Set<V> implements Store {
  constructor(private readonly adapter: Adapter) {
    super()
  }

  async load() {
    for (const v of await this.adapter.read([]))
      this.add(v)
    return this
  }

  async save() {
    await this.adapter.write([...this])
    return this
  }
}
