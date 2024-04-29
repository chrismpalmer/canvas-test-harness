import React, { useState, useEffect} from 'react';
import { Handle,Position,Node,NodeProps } from 'reactflow';
import { nodeTypes } from '../meta';
import styles from './DecisionNode.module.css';

type NodeInfo = {
    type: string;
}

type NodeData = {
    type: string;
}

type CustomNode = Node<NodeData>

export default function DecisionNode({data}: NodeProps<NodeData>) {
    
    const [nodeType,setNodeType] = useState(data.type);
    const [nodeInfo,setNodeInfo] = useState(data);

    useEffect(()=> console.log("XXX new selection "+nodeType),[nodeType]);
    
    return (
        <div className={styles.container}>
            <Handle type="target" position={Position.Top} id="c"/>
            <Handle type="source" position={Position.Right} id="a"/>
            <Handle type="target" position={Position.Left} id="d" />
            <Handle type="source" position={Position.Bottom} id="b"/>
            <div className={styles.header}>
                <span>{nodeType}</span>
            </div>
            <div className={styles.type}>
                <label>
                    <span>Type</span>
                </label>
                <select className="nodrag" value={nodeType} 
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {setNodeType(e.target.value);}}>
                    {
                        nodeTypes.map( nodeParam => <option key={nodeParam.nodeType} value={nodeParam.nodeType}>{nodeParam.nodeDesc}</option>)
                    }
                </select>
            </div>
        </div>
        
    )
}