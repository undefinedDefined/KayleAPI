import { Endpoints } from "../constants/endpoints";
import { MatchsParams } from '../interfaces/matchs';
import { queryConverter, urlConverter, riotRequest } from '../utils';



class Matchs{

    private key: string;
    public continent: string;

    constructor({key, continent}: {key: string, continent: string}){
        this.key = key;
        this.continent = continent;
    }

    public SummonerMatches(puuid: string, params: MatchsParams = {start:0, count:20}): Promise<any>
    {
        let query = queryConverter(params);
        let url = urlConverter(Endpoints.GET_SUMMONER_MATCHES_BY_PUUID, {
            'puuid': puuid, 
            'continent': this.continent, 
            'query': query
        });

        return riotRequest({riotKey: this.key, url: url});
    }


    public MatchById(matchId: string): Promise<any>
    {
        let url = urlConverter(Endpoints.GET_MATCH_BY_ID, {
            'matchId': matchId, 
            'continent': this.continent
        });

        return riotRequest({riotKey: this.key, url: url});
    }


    public MatchTimeline(matchId: string): Promise<any>
    {
        let url = urlConverter(Endpoints.GET_MATCH_TIMELINE, {
            'matchId': matchId, 
            'continent': this.continent
        });

        return riotRequest({riotKey: this.key, url: url});
    }
}


export { Matchs };