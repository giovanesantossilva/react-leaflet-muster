import { MarkerMuster } from '.';
import {MapContainer, Marker, TileLayer} from "react-leaflet";

import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

describe('MarkerMuster Component', function () {

    it('should render and unmount component', function () {
        const position = [-22.2108112, -49.6771926];
        const { container, unmount } = render(
            <MapContainer
                zoon={10}
                center={position}
            >
                <MarkerMuster>
                    <Marker position={position} />
                    <Marker position={position} />
                </MarkerMuster>
            </MapContainer>
        );
        expect(container).toMatchSnapshot();
        unmount();
    });

});
