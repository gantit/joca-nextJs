import { useState, useCallback, useMemo } from 'react'
import ReactMapGL, { LinearInterpolator, Popup } from 'react-map-gl'

import ControlPanel from 'components/panel'
import MAP_STYLE from './map-style'
import data from 'public/data/latest.json'

import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN = process.env.NEXT_PUBLIC_MAPBOXKEY

const map = () => {
  const [hoverInfo, setHoverInfo] = useState(null)
  const [details, setDetails] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: 40.46477932457649,
    longitude: -3.6682128906258726,
    zoom: 5,
    bearing: 0,
    pitch: 0
  })

  const onHover = useCallback((event) => {
    const [feature] = event.features
    const countyName = feature && feature.properties.name
    setHoverInfo({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
      countyName
    })
  }, [])

  const selectedCounty = (hoverInfo && hoverInfo.countyName) || ''
  const filter = useMemo(() => ['in', 'COUNTY', selectedCounty], [
    selectedCounty
  ])

  const onClick = (event) => {
    const [feature] = event.features
    console.log({
      feature,
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    })
    if (feature) {
      const countyName = feature.properties.name
      const contryInfo = data[countyName]
      setDetails({
        countyName,
        ...contryInfo
      })

      setViewport({
        ...viewport,
        transitionInterpolator: new LinearInterpolator({
          around: [event.offsetCenter.x, event.offsetCenter.y]
        }),
        transitionDuration: 1000
      })
    }
  }

  return (
    <>
      {details?.perimetralComunity && (
        <ControlPanel data={details} setData={setDetails} />
      )}
      <div className="container">
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle={MAP_STYLE}
          onClick={onClick}
          onHover={onHover}
          onViewportChange={setViewport}
          mapboxApiAccessToken={TOKEN}
        >
          {selectedCounty && (
            <Popup
              longitude={hoverInfo.longitude}
              latitude={hoverInfo.latitude}
              closeButton={false}
              className="county-info"
            >
              {selectedCounty}
            </Popup>
          )}
        </ReactMapGL>
      </div>
      <p className="source">
        Fuentes:{' '}
        <a
          href="https://administracion.gob.es/pag_Home/espanaAdmon/boletinesYLegislacion/BO_CCAA.html"
          target="_blank"
        >
          Boletines Oficiales de las distintas comunidades autónomas
        </a>
      </p>
      <style jsx>{`
        .map {
          width: 800px;
          height: 800px;
        }
        .container {
          margin: 0 auto;
          width: 800px;
          height: 800px;
          max-height: 800px;
          max-width: 800px;
          position: relative;
        }
        .source {
          color: var(--black);
          text-align: center;
        }
        .source a {
          text-decoration: underline;
        }
        @media (max-width: 420px) {
          .container {
            width: 400px;
            height: 400px;
          }
        }
      `}</style>
    </>
  )
}

export default map
