import { Store, Adapter } from '../../interfaces'
import { ExtendedArray } from '../ExtendedArray'

export class ArrayStore<V = any> extends ExtendedArray<V> implements Store {
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
