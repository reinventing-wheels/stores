"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = require("../List");
class ListStore extends List_1.List {
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
exports.ListStore = ListStore;
