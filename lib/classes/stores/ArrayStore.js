"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExtendedArray_1 = require("../ExtendedArray");
class ArrayStore extends ExtendedArray_1.ExtendedArray {
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
exports.ArrayStore = ArrayStore;
