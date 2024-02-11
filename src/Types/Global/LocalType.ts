import { ReactNode } from "react";

export class LocalType<T> {
    localStorageKey: string = ""
    copyingErrorHappen:boolean = false;

    constructor(localStorageKey: string) {
        this.localStorageKey = localStorageKey
    }
    setLocalObject() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this));
    }
    getLocalObject(): T | null {
        var localVersion = localStorage.getItem(this.localStorageKey)
        return localVersion ? JSON.parse(localVersion) as T : null
    }
}
export interface CustomContextProviderProps {
    children: ReactNode;
}