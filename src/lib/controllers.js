import arrayDiff from './arrayDiff';

const controllers = {
  attributionControl: (oldVal, newVal) => ([
    {
      type: 'do',
      do: newVal ?
        leafletMap => leafletMap.attributionControl.addTo(leafletMap) :
        leafletMap => leafletMap.attributionControl.remove(),
    },
  ]),

  zoomControl: (oldVal, newVal) => ([
    {
      type: 'do',
      do: newVal ?
        leafletMap => leafletMap.zoomControl.addTo(leafletMap) :
        leafletMap => leafletMap.zoomControl.remove(),
    },
  ]),

  boxZoom: (oldVal, newVal) => ([
    {
      type: 'do',
      do: newVal ?
        leafletMap => leafletMap.boxZoom.enable() :
        leafletMap => leafletMap.boxZoom.disable(),
    },
  ]),

  doubleClickZoom: (oldVal, newVal) => ([
    {
      type: 'do',
      do: newVal ?
        leafletMap => leafletMap.doubleClickZoom.enable() :
        leafletMap => leafletMap.doubleClickZoom.disable(),
    },
  ]),

  dragging: (oldVal, newVal) => ([
    {
      type: 'do',
      do: newVal ?
        leafletMap => leafletMap.dragging.enable() :
        leafletMap => leafletMap.dragging.disable(),
    },
  ]),

  center: (oldVal, newVal) => ([
    {
      type: 'op',
      op: { targetCenter: newVal },
    },
  ]),

  zoom: (oldVal, newVal) => ([
    {
      type: 'op',
      op: { targetZoom: newVal },
    },
  ]),

  minZoom: (oldval, newVal) => ([
    {
      type: 'do',
      do: leafletMap => leafletMap.setMinZoom(newVal),
    },
  ]),

  maxZoom: (oldVal, newVal) => ([
    {
      type: 'do',
      do: leafletMap => leafletMap.setMaxZoom(newVal),
    },
  ]),

  layers: (oldVal, newVal) => {
    const { additions, deletions } = arrayDiff(oldVal, newVal);
    return deletions.map(l => ({
      type: 'do',
      do: leafletMap => leafletMap.removeLayer(l),
    })).concat(additions.map(l => ({
      type: 'do',
      do: leafletMap => leafletMap.addLayer(l),
    })));
  },

  maxBounds: (oldVal, newVal) => ([
    {
      type: 'do',
      do: leafletMap => leafletMap.setMaxBounds([
        [newVal.get('xMin'), newVal.get('yMin')],
        [newVal.get('xMax'), newVal.get('yMax')],
      ]),
    },
  ]),

  keyboard: (oldVal, newVal) => ([
    {
      type: 'do',
      do: newVal ?
        leafletMap => leafletMap.keyboard.enable() :
        leafletMap => leafletMap.keyboard.disable(),
    },
  ]),

  scrollWheelZoom: (oldVal, newVal) => ([
    {
      type: 'do',
      do: newVal ?
        leafletMap => leafletMap.scrollWheelZoom.enable() :
        leafletMap => leafletMap.scrollWheelZoom.disable(),
    },
  ]),

  tap: (oldVal, newVal) => ([
    {
      type: 'do',
      do: newVal ?
        leafletMap => leafletMap.tap.enable() :
        leafletMap => leafletMap.tap.disable(),
    },
  ]),

  touchZoom: (oldVal, newVal) => ([
    {
      type: 'do',
      do: newVal ?
        leafletMap => leafletMap.touchZoom.enable() :
        leafletMap => leafletMap.touchZoom.disable(),
    },
  ]),
};

export default controllers;
