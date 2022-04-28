import axios from "axios";
import { URLSearchParams } from "url";
import { RiotRequest, DragonRequest } from "./interfaces/request";

function urlConverter(endpoint: string, toReplace: {[key: string]: any}): string
{
    Object.entries(toReplace).forEach( entry => {
        const [key, value] = entry;
        endpoint = endpoint.replace(`%${key}%`, encodeURI(value))
    })

    return endpoint;

}

function queryConverter(queries: {[key: string]: any}): string
{
    const params = new URLSearchParams(queries);

    return params.toString();
}

function invertEntries(object: {[key:string|number]: any}): {[key:number|string]: any}
{
    const inverted: {[key:string|number]: any} = {};
    Object.keys(object).forEach(key => {
        inverted[object[key]] = key;
    })

    return inverted;
}

function riotRequest(params: RiotRequest): Promise<any>
{
    let header = {"X-Riot-Token": params.riotKey};
    const response: Promise<any> = axios.get(params.url, {headers: header})
    .then( ({data: res}) => {
        return Object(res);
    })
    .catch(err => {
        console.error(err);
    })

    return response;
}

function dragonRequest(url: string): Promise<any>
{
    const response: Promise<any> = axios.get(url)
    .then( ({data: {type, format, version, data}}) => {
        return Object(data);
    })
    .catch( err => {
        console.error(err);
    })

    return response;
}

export { urlConverter, invertEntries, riotRequest, queryConverter, dragonRequest };