import L from 'leaflet';
import React from 'react';
import {
    extendContext,
    createPathComponent,
    createElementObject
} from '@react-leaflet/core';

import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

export const MarkerMuster = createPathComponent((props, context) => {
    const options = {
        removeOutsideVisibleBounds: true,
    };
    const listeners = {};
    Object.entries(props).forEach(([propName, propValue]) => {
        !propName.startsWith('on')
            ? options[propName] = propValue
            : listeners[propName] = propValue;
    });
    const cluster = new L.markerClusterGroup(options);
    Object.entries(listeners).forEach(([eventAsProp, callback]) => {
        const event = `cluster${eventAsProp.substring(2).toLowerCase()}`;
        cluster.on(event, callback);
    });
    return createElementObject(cluster, extendContext(context, { layerContainer: cluster }));
});
