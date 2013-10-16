Ext.define('ShopAfter.proxy.RottenTomatoes', {
//    extend: 'Ext.data.proxy.JsonP',
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.rottentomatoes',

    config: {
        type: 'ajax',
        url: "http://m.shopafter.com:9999/",
        reader: {
            type: "json",
            rootProperty: "ads"
        },
        service: "movies.json"
    },
    getUrl: function() {
        return this._url + this.getService();
    },
    encodeFilters: function(filters) {
        if (Ext.isArray(filters) && filters.length > 0) return filters[0].getValue();
        return "";
    }
});

/*
 config: {
 url: "http://api.rottentomatoes.com/api/public/v1.0/",
 extraParams: {
 apikey: 'hbjgfgryw8tygxztr5wtag3u'
 },
 filterParam: "q",
 limitParam: "page_limit",
 service: "movies.json",
 reader: {
 type: "json",
 rootProperty: "movies"
 }
 },
 getUrl: function() {
 return this._url + this.getService();
 },
 encodeFilters: function(filters) {
 if (Ext.isArray(filters) && filters.length > 0) return filters[0].getValue();
 return "";
 }
 */