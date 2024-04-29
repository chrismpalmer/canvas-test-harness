import React, { useState, useEffect} from 'react';
import { Handle,Position,Node,NodeProps } from 'reactflow';
import styles from './DecisionNode.module.css';
import { nanoid } from 'nanoid';

const types = [
    "Days Supply",
    "Amount",
    "Percent",
    "Min",
    "Max",
    "Yes",
    "No"
];

type NodeInfo = {
    type: string;
}

type NodeData = {
    type: string;
}

type CustomNode = Node<NodeData>

export default function ResultNode({data}: NodeProps<NodeData>) {
    
    const [nodeType,setNodeType] = useState(data.type);
    const [nodeInfo,setNodeInfo] = useState(data);

    useEffect(()=> console.log("XXX new selection "+nodeType),[nodeType]);
    
    return (
        <div className={styles.container}>
            <Handle type="target" position={Position.Top} id="a"/>
            <Handle type="target" position={Position.Right} id="b"/>
            <div className={styles.header} style={{backgroundColor: "Denied" === nodeType ? 'red' : 'green'}}>
                <span>{nodeType}</span>
            </div>
            <div className={styles.type}>
                <label>
                    <span>Type</span>
                </label>
                <select className="nodrag" value={nodeType} 
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {setNodeType(e.target.value);}}>
                    {
                        types.map( selectType => <option key={selectType} value={selectType}>{selectType}</option>)
                    }
                </select>
            </div>
        </div>
        
    )
}