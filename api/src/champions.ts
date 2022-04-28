
import { Endpoints } from "../constants/endpoints";
import { dragonRequest, urlConverter } from "../utils";


class Champions {


    public language: string;

    constructor(language: string){
        this.language = language;
    }

    public list(){
        let url = urlConverter(Endpoints.DRAGON_CHAMPIONS_LIST, {
            language: this.language
        });
        return dragonRequest(url)
    }

    public details(championName: string){

        championName = championName.trim().replace(' ', '').replace('\'', '');
        let url = urlConverter(Endpoints.DRAGON_CHAMPION_DETAILS, {
            language: this.language, 
            champion: championName
        });
        return dragonRequest(url);
    }


}

export { Champions };