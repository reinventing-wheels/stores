(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.stores = {})));
}(this, (function (exports) { 'use strict';

  class LocalStorageAdapter {
      constructor(key) {
          this.key = key;
      }
      async read(def) {
          const json = localStorage.getItem(this.key);
          return json ? JSON.parse(json) : def;
      }
      async write(obj) {
          const json = JSON.stringify(obj);
          localStorage.setItem(this.key, json);
      }
  }

  class ExtendedArray extends Array {
      get size() {
          return this.length;
      }
      has(value) {
          return this.includes(value);
      }
      get(index) {
          return this[index];
      }
      set(index, value) {
          this[index] = value;
          return this;
      }
      add(value) {
          this.push(value);
          return this;
      }
      delete(index) {
          return !!this.splice(index, 1).length;
      }
      clear() {
          this.splice(0);
      }
  }

  class ArrayStore extends ExtendedArray {
      constructor(adapter) {
          super();
          this.adapter = adapter;
      }
      async load() {
          for (const v of await this.adapter.read([]))
              this.push(v);
          return this;
      }
      async save() {
          await this.adapter.write(this);
          return this;
      }
  }

  class MapStore extends Map {
      constructor(adapter) {
          super();
          this.adapter = adapter;
      }
      async load() {
          for (const [k, v] of await this.adapter.read([]))
              this.set(k, v);
          return this;
      }
      async save() {
          await this.adapter.write([...this]);
          return this;
      }
  }

  class SetStore extends Set {
      constructor(adapter) {
          super();
          this.adapter = adapter;
      }
      async load() {
          for (const v of await this.adapter.read([]))
              this.add(v);
          return this;
      }
      async save() {
          await this.adapter.write([...this]);
          return this;
      }
  }

  exports.LocalStorageAdapter = LocalStorageAdapter;
  exports.ArrayStore = ArrayStore;
  exports.MapStore = MapStore;
  exports.SetStore = SetStore;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=stores.js.map
