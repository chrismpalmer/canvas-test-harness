import { NodeParam } from './meta';

export type Condition = {
    paramName: string,
    operator: string,
    paramValues: string[]
}    

export type PropertyNode = {
    nodeMeta: NodeParam,
    condition: Condition,
    approval: string,
    denial: string,
    documentation: string
    tags: string[],
    
}