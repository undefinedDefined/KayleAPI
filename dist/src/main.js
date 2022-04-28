"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Langues = exports.Continent = exports.Regions = exports.KayleApi = void 0;
const summoner_1 = require("./summoner");
const matchs_1 = require("./matchs");
const regions_1 = require("../constants/regions");
Object.defineProperty(exports, "Regions", { enumerable: true, get: function () { return regions_1.Regions; } });
Object.defineProperty(exports, "Continent", { enumerable: true, get: function () { return regions_1.Continent; } });
const config_1 = require("../interfaces/config");
const languages_1 = require("../constants/languages");
Object.defineProperty(exports, "Langues", { enumerable: true, get: function () { return languages_1.Langues; } });
const dragon_1 = require("./dragon");
class KayleApi {
    constructor(key, config) {
        this.lol = {
            summoner: () => new summoner_1.Summoner({
                key: KayleApi.key,
                region: KayleApi.config.region
            }),
            matchs: () => new matchs_1.Matchs({
                key: KayleApi.key,
                continent: KayleApi.config.continent
            }),
        };
        KayleApi.key = key;
        KayleApi.config = config !== null && config !== void 0 ? config : config_1.DEFAULT_CONFIG;
    }
    dragon() {
        return new dragon_1.Dragon(KayleApi.config.language);
    }
}
exports.KayleApi = KayleApi;
