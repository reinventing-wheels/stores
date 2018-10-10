"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class List extends Array {
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
exports.List = List;
