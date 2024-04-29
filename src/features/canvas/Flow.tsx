import { nanoid } from 'nanoid';
import { useState, useCallback, useEffect } from 'react';
import ReactFlow, {
  Panel,
  Background,
  Controls,  
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  DefaultEdgeOptions,
  OnEdgesChange,
  OnNodesChange,
  OnConnect,
  useOnSelectionChange,
  NodeTypes
} from 'reactflow';
import "reactflow/dist/style.css";
import './button.css';
import DecisionNode from './nodes/DecisionNode';
import ResultNode from './nodes/ResultNode';
import {NodeParam} from './meta';
import {PropertyNode} from './types';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    setProperties
} from './propertiesSlice';

const initialNodes: Node[] = [];

const initialEdges: Edge[] = [];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: false,
};

const nodeTypes: NodeTypes = {
    decisionNode: DecisionNode,
    resultNode: ResultNode
}

function Flow() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [node,setNode] = useState<any>(null);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const onClick = useCallback( () =>{
    const id = nanoid();
    const newNode = {
      id,
      type: 'decisionNode',
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      data: {
        type: "AND"
      },
    };
    setNodes(nodes.concat(newNode));
  },[nodes]);

  const onClickResult = useCallback( () =>{
    const id = nanoid();
    const newNode = {
      id,
      type: 'resultNode',
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      data: {
        type: "Days Supply"
      },
    };
    setNodes(nodes.concat(newNode));
  },[nodes]);

  const selectionChangeLogger = useOnSelectionChange({
        onChange: ({ nodes, edges }: { nodes: Node[], edges: Edge[] }):void => {
            console.log('changed selection', nodes, edges);
            // let node: PropertyNode = {
            //   nodeMeta: {
            //     nodeType: nodes[0].data.type,
            //     nodeDesc: '',
            //     operator: undefined
            //   },
            //   condition: {
            //     paramName: '',
            //     operator: '',
            //     paramValues: []
            //   },
            //   approval: '',
            //   denial: '',
            //   documentation: '',
            //   tags: []
            // }
//            setProperties(node);
         },
    });

  return (
    <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={(changes) => {
            // console.log("onNodesChange", changes);
            onNodesChange(changes);
          }}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
        >
            <Background />
            <Controls />
            <Panel position="top-left">
                <button onClick={onClick}>add node</button>
                <button onClick={onClickResult}>add result node</button>
            </Panel>
    </ReactFlow>
  );
}

export default Flow;