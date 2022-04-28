import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { KayleApi, Regions, Continent, Langues } from "./src/main";
import { urlConverter } from './utils';

dotenv.config();

// Pour éviter les erreurs de types sur les variables d'environnement
declare var process: {
    env: {
        PORT: number,
        HOST: string
    }
}


const app: Express = express();
const port = process.env.PORT;
const hostname = process.env.HOST;

app.get('/' , async (req: Request, res: Response) => {

    const kayle = new KayleApi('RGAPI-274893f6-dd54-4bb8-ba49-f6b6a19271b8');
    const summoner = kayle.lol.summoner();
    const summonerInfos = await summoner.SummonerByName('Dallas92');
    // console.log(summonerInfos);

    const dragon = kayle.dragon();
    const dragonChampions = dragon.champions();
    const dragonChampionsList = await dragonChampions.list();
    const dragonChampionDetails = await dragonChampions.details('Aatrox');
    // console.log(dragonChampionsList);


    res.json(dragonChampionDetails);

    // res.setHeader('Content-type', 'text/html');
    // res.end('<h1>Hello Typescript !</h1>');
})

app.listen(port, hostname, () => {
    console.log(`[Server]: Server is running at https://${hostname}:${port}/`);
})