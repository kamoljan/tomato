Ext.define('ShopAfter.model.Movie', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: "profileId", type: "int"},
            { name: "image", type: "string" },
            { name: "thumb", type: "string" },
            { name: "Number", type: "int" },
            { name: "description", type: "string" },
            { name: "price", type: "int" },
            { name: "phone", type: "string"},
            { name: "loc"},
            { name: "date"}
        ]
    }
});

/*
 fields: [
 { name: "id", type: "string"},
 { name: "title", type: "string" },
 { name: "synopsis", type: "string" },
 { name: "year", type: "int" },
 { name: "mpaa_rating", type: "string" },
 { name: "runtime", type: "int" },
 { name: "posters"},
 { name: "abridged_cast"},
 { name: "ratings"}
 ]
 */