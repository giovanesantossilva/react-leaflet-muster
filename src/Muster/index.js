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

function getOptionsAndListeners(props) {
    const options = {
        removeOutsideVisibleBounds: true,
    };
    const listeners = {};
    Object.entries(props).forEach(([propName, propValue]) => {
        !propName.startsWith('on')
            ? options[propName] = propValue
            : listeners[propName] = propValue;
    });
    return { options, listeners };
}

function setListenerInMarkerClusterGroup(listeners, cluster) {
    Object.entries(listeners).forEach(([eventAsProp, callback]) => {
        const event = `cluster${eventAsProp.substring(2).toLowerCase()}`;
        cluster.on(event, callback);
    });
}

export const MarkerMuster = createPathComponent((props, context) => {
    console.log(props);
    const { options, listeners } = getOptionsAndListeners(props);
    const cluster = new L.markerClusterGroup(options);
    setListenerInMarkerClusterGroup(listeners, cluster);
    return createElementObject(
        cluster,
        extendContext(context, { layerContainer: cluster })
    );
});
