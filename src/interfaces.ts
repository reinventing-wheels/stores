export interface Adapter {
  read(def: any): Promise<any>
  write(obj: any): Promise<void>
}

export interface Store {
  load(): Promise<this>
  save(): Promise<this>
}
