import { Store, Adapter } from '../../interfaces';
export declare class MapStore<K = any, V = any> extends Map<K, V> implements Store {
    private readonly adapter;
    constructor(adapter: Adapter);
    load(): Promise<this>;
    save(): Promise<this>;
}
