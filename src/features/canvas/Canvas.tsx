
import styles from './Canvas.module.css';
import { Allotment } from 'allotment';
import 'allotment/dist/style.css';
import Flow from './Flow'
import { ReactFlowProvider } from 'reactflow';
import Properties from './Properties';

export function Canvas() {

    return (
        <div className={styles.container}>
            <Allotment vertical={false} defaultSizes={[500,200]} >
                <div className={styles.canvas}>
                    <ReactFlowProvider>
                        <Flow/>
                    </ReactFlowProvider>
                </div>
                <div className={styles.properties}>
                    <Properties/>
                </div>
            </Allotment>
        </div>
    );
}