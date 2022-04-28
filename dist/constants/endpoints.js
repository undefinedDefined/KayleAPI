"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoints = void 0;
var Endpoints;
(function (Endpoints) {
    Endpoints["GET_SUMMONER_BY_NAME"] = "https://%region%.api.riotgames.com/lol/summoner/v4/summoners/by-name/%summonerName%";
    Endpoints["GET_SUMMONER_BY_ACCOUNT_ID"] = "https://%region%.api.riotgames.com/lol/summoner/v4/summoners/by-account/%encryptedAccountId%";
    Endpoints["GET_SUMMONER_BY_SUMMONER_ID"] = "https://%region%.api.riotgames.com/lol/summoner/v4/summoners/$encryptedSummonerId$";
    Endpoints["GET_SUMMONER_BY_PUUID"] = "https://%region%.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/%encryptedPUUID%";
    Endpoints["GET_ALL_MASTERIES"] = "https://%region%.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/%encryptedSummonerId%";
    Endpoints["GET_CHAMPION_MASTERY"] = "https://%region%.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/%encryptedSummonerId%/by-champion/%championId%";
    Endpoints["GET_MASTERIES_SCORE"] = "https://%region%.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/%encryptedSummonerId%";
    Endpoints["GET_SUMMONER_MATCHES_BY_PUUID"] = "https://%continent%.api.riotgames.com/lol/match/v5/matches/by-puuid/%puuid%/ids?%query%";
    Endpoints["GET_MATCH_BY_ID"] = "https://%continent%.api.riotgames.com/lol/match/v5/matches/%matchId%";
    Endpoints["GET_MATCH_TIMELINE"] = "https://%continent%.api.riotgames.com/lol/match/v5/matches/%matchId%/timeline";
    Endpoints["GET_TOPTIER_MATCHES"] = "https://%region%.api.riotgames.com/lol/league-exp/v4/entries/%queue%/%tier%/%division%/I?%query%";
    Endpoints["DRAGON_CHAMPIONS_LIST"] = "http://ddragon.leagueoflegends.com/cdn/12.6.1/data/%language%/champion.json";
    Endpoints["DRAGON_CHAMPION_DETAILS"] = "http://ddragon.leagueoflegends.com/cdn/12.6.1/data/%language%/champion/%champion%.json";
})(Endpoints = exports.Endpoints || (exports.Endpoints = {}));
