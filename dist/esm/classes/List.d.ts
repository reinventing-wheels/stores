export declare class List<V> extends Array<V> {
    readonly size: number;
    has(value: V): boolean;
    get(index: number): V | undefined;
    set(index: number, value: V): this;
    add(value: V): this;
    delete(index: number): boolean;
    clear(): void;
}
