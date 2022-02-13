import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import L from 'leaflet';
import React from 'react';
import { useLeafletContext, createPathComponent } from '@react-leaflet/core';

export const MarkerCluster = React.memo(createPathComponent(({ children: _, ...props }) => {
    const context = useLeafletContext();

    const options = {
        removeOutsideVisibleBounds: true,
    };
    const listeners = {};

    Object.entries(props).forEach(([propName, propValue]) => {
        propName.startsWith('on')
            ? options[propName] = propValue
            : listeners[propName] = propValue;
    });

    const cluster = new L.markerClusterGroup(options);

    Object.entries(listeners).forEach(([eventAsProp, callback]) => {
        const event = `cluster${eventAsProp.substring(2).toLowerCase()}`;
        cluster.on(event, callback);
    });

    return {
        instance: cluster,
        context: {
            ...context,
            layerContainer: cluster
        }
    }
}));
