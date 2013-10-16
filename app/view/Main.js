Ext.define('TouchTomatoes.view.Main', {
    extend: 'Ext.Panel',
    xtype: "main",

    requires: [
        'TouchTomatoes.view.MovieSearch',
        'TouchTomatoes.view.MoviesListView'
    ],

    config: {
        fullscreen: true,
        layout:"card",
        ui: 'light',
        items: [
            {
                title: 'Opening Movies',
                menu: "opening",
                xtype: 'movieslistview',
                autoLoad: true,
                proxy: {
                    service: "ad/"
                }
            },
            {
                title: 'In Theatres Now',
                menu: "theatres",
                xtype: 'movieslistview',
                enablePaging: true,
                proxy: {
                    service: "ad/"
                }
            },
            {
                title: 'Upcoming Movies',
                menu: "upcoming",
                xtype: 'movieslistview',
                proxy: {
                    service: "ad/"
                }
            },
            {
                title: 'Top Box Office',
                menu: "top",
                xtype: 'movieslistview',
                proxy: {
                    service: "ad/"
                }
            },
            {
                menu: "search",
                xtype: 'moviesearch'
            }
        ]
    }
});