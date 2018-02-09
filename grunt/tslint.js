module.exports = {
    default: {
        options: {
            // can be a configuration object or a filepath to tslint.json 
            configuration: "tslint.json"
        },
        files: {
            src: [
                "sources/client/src/**/*.ts",
                "sources/client/src/**/*.tsx",
                "sources/server/src/**/*.ts",
                "sources/server/src/**/*.tsx",
            ]
        }        
    }
};
