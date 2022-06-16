//import modules
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapboxStyleSwitcherControl } from 'mapbox-gl-style-switcher';
import 'mapbox-gl-style-switcher/styles.css';
// We will do the followings later.
//import MapboxPopupControl from '@watergis/mapbox-gl-popup';
//import '@watergis/mapbox-gl-popup/css/styles.css';
//import MapboxLegendControl from '@watergis/mapbox-gl-legend';
//import '@watergis/mapbox-gl-legend/css/styles.css';
//import { MapboxExportControl}  from '@watergis/mapbox-gl-export';
//import '@watergis/mapbox-gl-export/css/styles.css';


var mapgl = mapboxgl;  // if you change here to maplibregl, please make sure that you import the module as well.
mapgl.accessToken = 'pk.eyJ1IjoidC11YnVrYXdhIiwiYSI6ImNrb3NuemYxeDAwazQybm55YXUwZ281MmkifQ.MDqjOP45DIUcpLSCI9JAGg'; //Use your accessToken
const map = new mapgl.Map({ //edit map info
  container: 'map',
  //style: 'nyc-Terrain.json', 
  center: [-73.99182, 40.74609],
  hash: true,
  zoom: 10,
  minZoom: 6,
  maxZoom: 16
});

map.addControl(new mapgl.NavigationControl(), 'bottom-right');
map.addControl(new mapgl.ScaleControl({
    maxWidth: 200, unit: 'metric'
}) );


//style-switcher
const styles = [
    { 'title': 'terrain', 'uri': 'nyc-Terrain.json' },
    { 'title': 'no-terrain', 'uri': 'nyc-noTerrain.json' },
    { 'title': 'test-red', 'uri': 'red.json' },
];
MapboxStyleSwitcherControl.DEFAULT_STYLE = styles[0].title;
map.addControl(new MapboxStyleSwitcherControl(styles), 'top-right');
