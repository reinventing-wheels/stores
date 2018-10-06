import { Adapter } from '../../interfaces'

export class LocalStorageAdapter implements Adapter {
  constructor(private readonly key: string) {}

  async read(def: any) {
    const json = localStorage.getItem(this.key)
    return json ? JSON.parse(json) : def
  }

  async write(obj: any) {
    const json = JSON.stringify(obj)
    localStorage.setItem(this.key, json)
  }
}
