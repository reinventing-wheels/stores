"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const fs = require("fs");
const open = util_1.promisify(fs.open);
const read = util_1.promisify(fs.readFile);
const write = util_1.promisify(fs.writeFile);
const close = util_1.promisify(fs.close);
class FileAdapter {
    constructor(path) {
        this.path = path;
    }
    async read(def) {
        const file = await open(this.path, 'a+');
        const json = await read(file, 'utf8');
        await close(file);
        return json ? JSON.parse(json) : def;
    }
    async write(obj) {
        const json = JSON.stringify(obj);
        const file = await open(this.path, 'w');
        await write(file, json, 'utf8');
        await close(file);
    }
}
exports.FileAdapter = FileAdapter;
