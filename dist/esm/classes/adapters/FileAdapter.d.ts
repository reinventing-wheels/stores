import { Adapter } from '../../interfaces';
export declare class FileAdapter implements Adapter {
    private readonly path;
    constructor(path: string);
    read(def: any): Promise<any>;
    write(obj: any): Promise<void>;
}
