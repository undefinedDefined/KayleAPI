"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONFIG = void 0;
const regions_1 = require("../constants/regions");
const languages_1 = require("../constants/languages");
const DEFAULT_CONFIG = {
    region: regions_1.Regions.EU_WEST,
    get continent() {
        return (0, regions_1.regionToContinent)(this.region);
    },
    language: languages_1.Langues.FRENCH
};
exports.DEFAULT_CONFIG = DEFAULT_CONFIG;
