import { Regions, Continent, regionToContinent } from "../constants/regions"
import { Langues } from "../constants/languages"

const DEFAULT_CONFIG: Config = {
    region: Regions.EU_WEST,
    get continent() {
        return regionToContinent(this.region)
    },
    language: Langues.FRENCH
}

interface Config {
    region: Regions,
    continent: Continent,
    language: string
}


export { DEFAULT_CONFIG, Config};