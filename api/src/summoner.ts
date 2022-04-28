import { Endpoints } from "../constants/endpoints";
import { urlConverter, riotRequest } from "../utils";


class Summoner{

    private key: string;
    public region: string;

    constructor({key, region}: {key: string, region: string}){
        this.key = key;
        this.region = region;
    }

    public SummonerByName(summonerName: string): Promise<any>
    {
        let url = urlConverter(Endpoints.GET_SUMMONER_BY_NAME, {
            'summonerName': summonerName,
            'region': this.region
        });

        return riotRequest({riotKey: this.key, url: url});
    }
    
    public SummonerByAccountId(encryptedAccountId: string): Promise<any>
    {
        let url = urlConverter(Endpoints.GET_SUMMONER_BY_ACCOUNT_ID, {
            'encryptedAccountId': encryptedAccountId, 
            'region': this.region
        });

        return riotRequest({riotKey: this.key, url: url});
    }


    public SummonerByPuuid(encryptedPUUID: string): Promise<any>
    {
        let url = urlConverter(Endpoints.GET_SUMMONER_BY_PUUID, {
            'encryptedPUUID': encryptedPUUID, 
            'region': this.region
        });

        return riotRequest({riotKey: this.key, url: url});
    }


    public SummonerBySummonerId(encryptedSummonerId: string): Promise<any>
    {
        let url = urlConverter(Endpoints.GET_SUMMONER_BY_SUMMONER_ID, {
            'encryptedSummonerId': encryptedSummonerId, 
            'region': this.region
        });

        return riotRequest({riotKey: this.key, url: url});
    }

    public SummonerMasteries(encryptedSummonerId: string): Promise<any>
    {
        let url = urlConverter(Endpoints.GET_ALL_MASTERIES, {
            'encryptedSummonerId': encryptedSummonerId, 
            'region': this.region
        });

        return riotRequest({riotKey: this.key, url: url});
    }


    public SummonerChampionMastery(encryptedSummonerId: string, championId: number): Promise<any>
    {
        let url = urlConverter(Endpoints.GET_CHAMPION_MASTERY, {
            'encryptedSummonerId': encryptedSummonerId, 
            'championId': championId, 
            'region': this.region
        });

        return riotRequest({riotKey: this.key, url: url});
    }

    
    public SummonerMasteriesScore(encryptedSummonerId: string): Promise<any>
    {
        let url = urlConverter(Endpoints.GET_MASTERIES_SCORE, {
            'encryptedSummonerId': encryptedSummonerId, 
            'region': this.region
        });

        return riotRequest({riotKey: this.key, url: url});
    }

}


export { Summoner };