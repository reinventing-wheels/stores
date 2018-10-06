export class SetStore extends Set {
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
