import { Store, Adapter } from '../../interfaces';
import { ExtendedArray } from '../ExtendedArray';
export declare class ArrayStore<V = any> extends ExtendedArray<V> implements Store {
    private readonly adapter;
    constructor(adapter: Adapter);
    load(): Promise<this>;
    save(): Promise<this>;
}
