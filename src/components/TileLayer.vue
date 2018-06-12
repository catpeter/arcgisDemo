<template>
  <div class="eleMap">
    <div id="viewDiv"></div>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader'
export default {
  name: 'tileLayer',
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
      esriLoader.loadModules([
        'esri/Map',
        'esri/views/MapView',
        'esri/layers/TileLayer'
      ]).then(([EsriMap, MapView, TileLayer]) => {
        var layer = new TileLayer({
          url: 'http://desktop-dnnmeqj:6080/arcgis/rest/services/twomap/MapServer'
        })
        this.map = new EsriMap()
        this.map.add(layer)
        this.view = new MapView({
          container: 'viewDiv',
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
