import { Champions } from "./champions";
import { Langues } from "./main";


class Dragon{

    public language: string;

    constructor(language: string){
        this.language = language;
    }

    public champions(): Champions
    {
        return new Champions(this.language);
    }


}


export { Dragon, Langues };