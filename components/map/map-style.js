import MAP_STYLE from './config.json'

const mapStyle = {
  ...MAP_STYLE,
  sources: { ...MAP_STYLE.sources },
  layers: MAP_STYLE.layers.slice(),
  style: 'mapbox://styles/mapbox/dark-v10'
}

mapStyle.sources['spain'] = {
  type: 'geojson',
  data: '../data/geojson/spain-communities.geojson'
}

mapStyle.layers.push(
  {
    id: 'spain-fill',
    source: 'spain',
    type: 'fill',
    paint: {
      'fill-outline-color': '#fff',
      'fill-color': '#4b9c3b',
      'fill-opacity': 1
    }
  },
  {
    id: 'spain-outline',
    source: 'spain',
    type: 'line',
    paint: {
      'line-width': 1,
      'line-color': '#fff'
    }
  }
)

export default mapStyle
