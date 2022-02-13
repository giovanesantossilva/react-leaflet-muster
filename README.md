# React Leaflet Muster

> A modern study React wrapper of marker cluster for react-leaflet

React wrapper of [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet)
based in [react-leaflet-markercluster](https://github.com/yuzhva/react-leaflet-markercluster)

![React leaflet markercluster](./preview.png)

## Table of contents

- [Main](#main)
- [Getting started](#getting-started)
- [API](#api)
- [Credits](#credits)
- [License](#license)

## Main

```text
dist/
└── index.min.js    
```

## Getting started

### Requirements

```shell
yarn add leaflet leaflet.markercluster react-leaflet
```

### Installation

```shell
yarn add react-leaflet-muster
```

### Usage

#### Basic Example

```jsx
<MarkerMuster>
    <Marker position={[-21.210309, -47.647063]}/>
    <Marker position={[-21.210309, -47.647063]}/>
</MarkerMuster>
```

#### Full Example

```jsx
import { MarkerMuster } from "react-leaflet-muster";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map() {
    return(
        <MapContainer
            zoom={14}
            center={position}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerMuster>
                <Marker position={[-21.210309, -47.647063]}/>
                <Marker position={[-21.210309, -47.647063]}/>
            </MarkerMuster>
        </MapContainer>
    )
}
```

## API

You can see the properties in [Leaflet.markercluster All Options](https://github.com/Leaflet/Leaflet.markercluster#all-options)

#### Example options

```jsx
<MarkerMuster
    showCoverageOnHover={false}
    zoomToBoundsOnClick={false}
>
    <Marker position={[-21.210309, -47.647063]}/>
    <Marker position={[-21.210309, -47.647063]}/>
</MarkerMuster>
```

#### Example listeners

```jsx
<MarkerMuster
    onCLick={e => console.log(e)}
    onMouseOver={e => console.log(e)}
>
    <Marker position={[-21.210309, -47.647063]}/>
    <Marker position={[-21.210309, -47.647063]}/>
</MarkerMuster>
```


## Credits

All credits and rights to [Yevhen Uzhva](https://github.com/yuzhva)
of [react-leaflet-markercluster](https://github.com/yuzhva/react-leaflet-markercluster)

## License
[ISC](https://opensource.org/licenses/ISC) © [Giovane Santos](https://giovanesantossilva.github.io/)
