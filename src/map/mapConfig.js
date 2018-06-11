/*
arcgis初始化配置
*/
export function arcgisConfig () {
  window.arcgis = {
    config: {
      proxyUrl: 'http://192.168.65.96:80/arcgis_js_api/library/4.7/init.js',
      baseUrl: 'http://192.168.65.96:80/arcgis_js_api/library/4.7/init.js',
      dojoUrl: 'http://192.168.65.96:80/arcgis_js_api/library/4.7/dojo',
      offlineMapWkid: 26911,
      getBaseUrl: function () {
        return this.baseUrl
      },
      getDojoUrl: function () {
        return this.dojoUrl
      },
      getWkid: function () {
        return this.offlineMapWkid
      }
    }
  }
}
