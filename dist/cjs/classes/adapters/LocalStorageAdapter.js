"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.LocalStorageAdapter = LocalStorageAdapter;
