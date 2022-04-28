import { Summoner } from "./summoner";
import { Matchs } from "./matchs";
import { Regions, Continent } from '../constants/regions';
import { DEFAULT_CONFIG, Config } from '../interfaces/config';
import { Langues } from '../constants/languages';
import { Dragon } from './dragon';


class KayleApi{
    private static key: string;
    public static config: Config;

    constructor(key: string, config?: Config){
        KayleApi.key = key;
        KayleApi.config = config?? DEFAULT_CONFIG;
    }

    public lol = {
        summoner: (): Summoner => new Summoner({
            key: KayleApi.key, 
            region: KayleApi.config.region
        }),
        matchs: (): Matchs => new Matchs({
            key: KayleApi.key,
            continent: KayleApi.config.continent
        }),
    }

    public dragon (): Dragon
    {
        return new Dragon(KayleApi.config.language)
    }
}

// const init = (key: string) => (config: Config|undefined) => new KayleApi(key, config);

export { KayleApi, Regions, Continent, Langues };