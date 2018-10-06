import { Store, Adapter } from '../../interfaces';
export declare class SetStore<V = any> extends Set<V> implements Store {
    private readonly adapter;
    constructor(adapter: Adapter);
    load(): Promise<this>;
    save(): Promise<this>;
}
