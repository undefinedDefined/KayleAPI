"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matchs = void 0;
const endpoints_1 = require("../constants/endpoints");
const utils_1 = require("../utils");
class Matchs {
    constructor({ key, continent }) {
        this.key = key;
        this.continent = continent;
    }
    SummonerMatches(puuid, params = { start: 0, count: 20 }) {
        let query = (0, utils_1.queryConverter)(params);
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_SUMMONER_MATCHES_BY_PUUID, {
            'puuid': puuid,
            'continent': this.continent,
            'query': query
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
    MatchById(matchId) {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_MATCH_BY_ID, {
            'matchId': matchId,
            'continent': this.continent
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
    MatchTimeline(matchId) {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_MATCH_TIMELINE, {
            'matchId': matchId,
            'continent': this.continent
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
}
exports.Matchs = Matchs;
