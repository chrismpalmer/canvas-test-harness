import {create} from "zustand";

export interface NodeProperty {
    name: string;
    desc: string;
    val: string | number;
}

interface PropertiesStore {
    properties: NodeProperty[];

}
export const usePropertiesStore = () => {
    create()
}