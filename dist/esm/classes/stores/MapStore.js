export class MapStore extends Map {
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
