Simple abstractions over `Array`, `Map` and `Set` classes

## Installation

```sh
yarn add reinventing-wheels/stores
```

## Usage

We need an adapter:

```ts
import { LocalStorageAdapter } from 'stores/dist/esm/browser'
const localStorageAdapter = new LocalStorageAdapter('store')
```

```ts
import { FileAdapter } from 'stores'
const fileAdapter = new FileAdapter('store.json')
```

And also a store:

```ts
import { ArrayStore } from 'stores'
const arrayStore = new ArrayStore(adapter)
```

```ts
import { MapStore } from 'stores'
const mapStore = new MapStore(adapter)
```

```ts
import { SetStore } from 'stores'
const setStore = new SetStore(adapter)
```

And we're good to go:

```ts
await mapStore.load()

console.log('Previous values:')
console.log([...mapStore])

mapStore
  .set('foo', Math.random())
  .set('bar', Math.random())
  .set('baz', Math.random())

await mapStore.save()
```
