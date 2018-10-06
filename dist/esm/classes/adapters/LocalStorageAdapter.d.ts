import { Adapter } from '../../interfaces';
export declare class LocalStorageAdapter implements Adapter {
    private readonly key;
    constructor(key: string);
    read(def: any): Promise<any>;
    write(obj: any): Promise<void>;
}
