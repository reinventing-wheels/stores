import { ExtendedArray } from '../ExtendedArray';
export class ArrayStore extends ExtendedArray {
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
