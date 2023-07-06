import * as React from "react";

interface LeafletMarkerClusterProps {
    showCoverageOnHover?: boolean,
    zoomToBoundsOnClick?: boolean,
    spiderfyOnMaxZoom?: boolean,
    removeOutsideVisibleBounds?: boolean,
    animate?: boolean,
    spiderLegPolylineOptions?: object,

    maxClusterRadius?: number,

    iconCreateFunction?: Function,
    spiderfyShapePositions?: Function

    chunkedLoading?: boolean,
    chunkDelay?: number,
    chunkProgress?: Function
}

export interface MarkerMusterProps extends LeafletMarkerClusterProps {
    onClick?: Function,
    onMouseOver?: Function,
    onMouseOut?: Function,
    onMouseMove?: Function
}

export class MarkerMuster extends React.Component<MarkerMusterProps> {}
