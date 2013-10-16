Ext.define('ShopAfter.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: [
        "ShopAfter.view.AdDetails",
        "Ext.util.InputBlocker"
    ],

    config: {
        refs: {
            main: 'main',
            adsList: 'adsearch > list',
            searchField: 'adsearch > toolbar > formpanel > searchfield'
        },

        control: {
            searchField: {
                action: 'onSearch'
            },

            'adslistview > toolbar > button': {
                tap: function () {
                    Ext.Viewport.toggleMenu("left");
                }
            },

            'insertadform > toolbar > button': {
                tap: function () {
                    Ext.Viewport.toggleMenu("left");
                }
            },

            'menu > button': {
                tap: function (btn) {
                    console.log('controller.Main menu > button');
                    console.log('controller.Main btn = %s', btn);

                    if (btn.getMenu() === 'insert') {
                        var newActiveItem = Ext.ComponentQuery.query("insertadform");
                    } else {
                        var newActiveItem = Ext.ComponentQuery.query("adslistview[menu=" + btn.getMenu() + "]");
                    }
                    console.log('controller.Main newActiveItem = %s', newActiveItem);
                    var main = this.getMain();

                    console.log('controller.Main btn.getMenu() = ' + btn.getMenu());
                    console.log('controller.Main this.getMain() = ' + this.getMain());

                    newActiveItem = newActiveItem.length > 0 ? newActiveItem[0] : null;
                    if (newActiveItem) {
                        main.setActiveItem(newActiveItem);
                        Ext.Viewport.hideAllMenus();

                        Ext.Viewport.getTranslatable().on('animationend', function () {
                            var list = newActiveItem.down("list"),
                                store;
                            if (list) {
                                store = list.getStore();
                                if (!store.isLoaded()) {
                                    store.load();
                                }
                            }
                        }, this, {single: true});
                    }
                }
            },
            'addetails': {
                swipe: function (addetails, e) {
                    var target = Ext.fly(e.target);
                    if (target.findParent('.x-scroll-container', 10, true)) return;
                    if (e.direction === "up") {
                        addetails.hide();
                    }
                }
            },
            'addetails > button[action="close"]': {
                tap: function (button) {
                    var details = button.up("addetails");
                    details.hide();
                    Ext.util.InputBlocker.unblockInputs();
                }
            },
            'adslistview > list': {
                itemtap: function (list, index, item, record, event) {
                    this._adDetails = this.getAdDetails();
                    this._adDetails.setRecord(record);
                    Ext.Viewport.add(this._adDetails);
                    Ext.util.InputBlocker.blockInputs();

                    this._adDetails.on({
                        show: {
                            fn: function () {
                                list.deselectAll(true);
                            },
                            scope: this,
                            single: true
                        }
                    });

                    this._adDetails.show();
                }
            }
        }
    },

    onSearch: function () {
        console.log('controller.Main onSearch');
        var searchField = this.getSearchField();
        this.fireAction('search', [searchField.getValue()], 'doSearch');
    },

    doSearch: function (search) {
        console.log('controller.Main doSearch');
        search = search.replace(/^\s+|\s+$/g, '');
        if (search.length <= 0) return;
        var adsList = this.getAdsList(),
            adsStore = adsList.getStore();
        adsStore.currentPage = 1;
        adsStore.filter('query', search);

        adsList.setScrollToTopOnRefresh(true);
        adsStore.load();
    },

    getAdDetails: function () {
        console.log('controller.Main getAdDetails');
        if (!this._adDetails) {
            this._adDetails = Ext.create("ShopAfter.view.AdDetails");
        }
        return this._adDetails;
    }
});
