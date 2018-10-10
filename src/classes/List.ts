export class List<V> extends Array<V> {
  get size() {
    return this.length
  }

  has(value: V) {
    return this.includes(value)
  }

  get(index: number): V | undefined {
    return this[index]
  }

  set(index: number, value: V) {
    this[index] = value
    return this
  }

  add(value: V) {
    this.push(value)
    return this
  }

  delete(index: number) {
    return !!this.splice(index, 1).length
  }

  clear() {
    this.splice(0)
  }
}
