"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const main_1 = require("./src/main");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const hostname = process.env.HOST;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kayle = new main_1.KayleApi('RGAPI-274893f6-dd54-4bb8-ba49-f6b6a19271b8');
    const summoner = kayle.lol.summoner();
    const summonerInfos = yield summoner.SummonerByName('Dallas92');
    // console.log(summonerInfos);
    const dragon = kayle.dragon();
    const dragonChampions = dragon.champions();
    const dragonChampionsList = yield dragonChampions.list();
    const dragonChampionDetails = yield dragonChampions.details('Aatrox');
    // console.log(dragonChampionsList);
    res.json(dragonChampionDetails);
    // res.setHeader('Content-type', 'text/html');
    // res.end('<h1>Hello Typescript !</h1>');
}));
app.listen(port, hostname, () => {
    console.log(`[Server]: Server is running at https://${hostname}:${port}/`);
});
