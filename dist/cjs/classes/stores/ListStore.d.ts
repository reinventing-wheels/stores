import { Store, Adapter } from '../../interfaces';
import { List } from '../List';
export declare class ListStore<V = any> extends List<V> implements Store {
    private readonly adapter;
    constructor(adapter: Adapter);
    load(): Promise<this>;
    save(): Promise<this>;
}
