Ext.define('ShopAfter.view.Main', {
    extend: 'Ext.Panel',
    xtype: "main",

    requires: [
        'ShopAfter.view.MovieSearch',
        'ShopAfter.view.MoviesListView',
        'ShopAfter.view.ad.InsertAdForm'
    ],

    config: {
        fullscreen: true,
        layout:"card",
        ui: 'light',
        items: [
            {
                title: 'Latest Ads',
                menu: "opening",
                xtype: 'movieslistview',
                autoLoad: true,
                proxy: {
                    service: "ad/"
                }
            },
            {
                title: 'Nearest Ads',
                menu: "theatres",
                xtype: 'movieslistview',
                enablePaging: true,
                proxy: {
                    service: "ad/"
                }
            },
            {
                title: 'Latest Ads',
                menu: "upcoming",
                xtype: 'movieslistview',
                proxy: {
                    service: "ad/"
                }
            },
            {
                menu: "search",
                xtype: 'moviesearch'
            },
            {
//                title: 'Sell it!',
                menu: "insert",
                xtype: 'insertadform'
            }
        ]
    }
});