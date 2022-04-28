"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Champions = void 0;
const endpoints_1 = require("../constants/endpoints");
const utils_1 = require("../utils");
class Champions {
    constructor(language) {
        this.language = language;
    }
    list() {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.DRAGON_CHAMPIONS_LIST, {
            language: this.language
        });
        return (0, utils_1.dragonRequest)(url);
    }
    details(championName) {
        championName = championName.trim().replace(' ', '').replace('\'', '');
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.DRAGON_CHAMPION_DETAILS, {
            language: this.language,
            champion: championName
        });
        return (0, utils_1.dragonRequest)(url);
    }
}
exports.Champions = Champions;
