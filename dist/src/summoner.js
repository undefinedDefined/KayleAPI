"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summoner = void 0;
const endpoints_1 = require("../constants/endpoints");
const utils_1 = require("../utils");
class Summoner {
    constructor({ key, region }) {
        this.key = key;
        this.region = region;
    }
    SummonerByName(summonerName) {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_SUMMONER_BY_NAME, {
            'summonerName': summonerName,
            'region': this.region
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
    SummonerByAccountId(encryptedAccountId) {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_SUMMONER_BY_ACCOUNT_ID, {
            'encryptedAccountId': encryptedAccountId,
            'region': this.region
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
    SummonerByPuuid(encryptedPUUID) {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_SUMMONER_BY_PUUID, {
            'encryptedPUUID': encryptedPUUID,
            'region': this.region
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
    SummonerBySummonerId(encryptedSummonerId) {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_SUMMONER_BY_SUMMONER_ID, {
            'encryptedSummonerId': encryptedSummonerId,
            'region': this.region
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
    SummonerMasteries(encryptedSummonerId) {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_ALL_MASTERIES, {
            'encryptedSummonerId': encryptedSummonerId,
            'region': this.region
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
    SummonerChampionMastery(encryptedSummonerId, championId) {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_CHAMPION_MASTERY, {
            'encryptedSummonerId': encryptedSummonerId,
            'championId': championId,
            'region': this.region
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
    SummonerMasteriesScore(encryptedSummonerId) {
        let url = (0, utils_1.urlConverter)(endpoints_1.Endpoints.GET_MASTERIES_SCORE, {
            'encryptedSummonerId': encryptedSummonerId,
            'region': this.region
        });
        return (0, utils_1.riotRequest)({ riotKey: this.key, url: url });
    }
}
exports.Summoner = Summoner;
