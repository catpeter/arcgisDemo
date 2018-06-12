<template>
  <div class="eleMap">
    <div id="viewDiv"></div>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader'
export default {
  name: 'baseTileLayer',
  data () {
    return {
      map: null,
      view: null
    }
  },
  mounted () {
    this.createMap()
  },
  methods: {
    createMap () {
      // 引入依赖
      esriLoader.loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/BaseTileLayer',
        'esri/config',
        'esri/layers/support/TileInfo',
        'esri/geometry/Extent',
        'esri/geometry/SpatialReference'
      ]).then(([EsriMap, MapView, BaseTileLayer, esriConfig, TileInfo, Extent, SpatialReference]) => {
        let TintLayer = BaseTileLayer.createSubclass({
          properties: {
            urlTemplate: null
          },
          constructor: function () {
            this.version = '1.0.0'
            this.identifier = 'test'
            this.imageFormat = 'image/jpeg'
            this.tileMatrixSet = 'EPSG:26911_test'
            this.spatialReference = new SpatialReference({
              wkid: 26911
            })
            this.fullExtent = new Extent(99060.14981104789, 79979.58902610709, 120364.69590849926,
              100053.90054778713,
              new SpatialReference({
                wkid: 26911
              }))
            this.initialExtent = new Extent(99060.14981104789, 79979.58902610709, 120364.69590849926,
              100053.90054778713,
              new SpatialReference({
                wkid: 26911
              }))
            this.tileInfo = new TileInfo({
              dpi: 96,
              compressionQuality: 75.0,
              format: 'image/png',
              spatialReference: new SpatialReference({
                wkid: 26911
              }),
              size: 256,
              origin: {
                x: -5120900.0,
                y: 9998100.0
              },
              lods: [{
                level: '0',
                scale: 250000,
                resolution: 66.1459656252646
              }, {
                level: '1',
                scale: 125000,
                resolution: 33.0729828126323
              }, {
                level: '2',
                scale: 64000,
                resolution: 16.933367200067735
              }, {
                level: '3',
                scale: 32000,
                resolution: 8.466683600033868
              }, {
                level: '4',
                scale: 16000,
                resolution: 4.233341800016934
              }]
            })
            this.loaded = true
          },
          getTileUrl: function (level, row, col) {
            var levelMap = ''
            levelMap = 'http://localhost:8080/geowebcache/service/wmts' +
              '?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile' +
              '&LAYER=' + this.identifier + '&STYLE=_null' + '&FORMAT=image/jpeg' +
              '&TILEMATRIXSET=EPSG:26911_test' +
              '&TILEMATRIX=EPSG:26911_test:' + level + '&TILEROW=' + row + '&TILECOL=' + col
            return levelMap
          }
        })
        // Add stamen url to the list of servers known to support CORS specification.
        esriConfig.request.corsEnabledServers.push('http://localhost:8080')
        // Create a new instance of the TintLayer and set its properties
        var stamenTileLayer = new TintLayer()
        // add the new instance of the custom tile layer the map
        this.map = new EsriMap({
          layers: [stamenTileLayer]
        })
        // create map with the given options at a DOM node w/ id 'mapNode'
        this.view = new MapView({
          container: 'viewDiv',
          center: [15000, 15000],
          zoom: 1,
          map: this.map
        })
      })
    }
  }
}
</script>

<style scoped>
  @import url('http://192.168.65.96:80/arcgis_js_api/library/4.6/esri/css/main.css');

  #viewDiv {
    height: 800px;
    width: 100%;
    z-index: -1;
  }

</style>
