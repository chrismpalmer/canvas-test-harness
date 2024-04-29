import {NodeParam} from './meta'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    setProperties,selectProperties
} from './propertiesSlice';
import { useState } from 'react';

function Properties() {

    const [nodeInfo] = useState<any>(null);

    return (
        <div>
            <span>PROPERTIES</span>
        </div>
    )
}


export default Properties;