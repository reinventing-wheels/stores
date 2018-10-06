import { Adapter } from '../../interfaces'
import { promisify } from 'util'
import * as fs from 'fs'

const open = promisify(fs.open)
const read = promisify(fs.readFile)
const write = promisify(fs.writeFile)
const close = promisify(fs.close)

export class FileAdapter implements Adapter {
  constructor(private readonly path: string) {}

  async read(def: any) {
    const file = await open(this.path, 'a+')
    const json = await read(file, 'utf8')
    await close(file)
    return json ? JSON.parse(json) : def
  }

  async write(obj: any) {
    const json = JSON.stringify(obj)
    const file = await open(this.path, 'w')
    await write(file, json, 'utf8')
    await close(file)
  }
}
