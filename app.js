//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

Ext.application({
    name: 'ShopAfter',

    requires: ['Ext.device.Storage','Ext.Menu', 'ShopAfter.components.MenuButton'],
    controllers: ['ShopAfter.controller.Main'],
    views: ['ShopAfter.view.Main', 'ShopAfter.view.WelcomeOverlay'],

    launch: function() {
        Ext.getBody().removeCls('loading');
        Ext.create('ShopAfter.view.Main');

        if (Ext.device.Storage.getItem('isFirstTime') !== "false") {
            Ext.device.Storage.setItem('isFirstTime', false);

            var overlay = Ext.create('ShopAfter.view.WelcomeOverlay');
            Ext.Viewport.add(overlay);
            overlay.show();
        }

        var menu = Ext.create("Ext.Menu", {
            defaults: {
                xtype: "menubutton"
            },
            width: '80%',
            scrollable: 'vertical',
            items: [
                {
                    text: 'Latest',
                    iconCls: 'time',
                    menu:"opening"
                },
                {
                    text: 'Nearest',
                    iconCls: 'locate',
                    menu: "theatres"
                },
                {
                    text: 'Popular',
                    iconCls: 'team',
                    menu:"upcoming"
                },
//                {
//                    text: 'Top',
//                    iconCls: 'bank',
//                    menu:'top'
//                },
                {
                    text: 'Search',
                    iconCls: 'search',
                    menu:"search"
                },
                {
                    text: 'Post Ad',
                    iconCls: 'add',
                    menu:"top"
                }
            ]
        });

        Ext.Viewport.setMenu(menu, {
            side: 'left',
            reveal: true
        });
    }
});

