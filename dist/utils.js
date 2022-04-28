"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dragonRequest = exports.queryConverter = exports.riotRequest = exports.invertEntries = exports.urlConverter = void 0;
const axios_1 = __importDefault(require("axios"));
const url_1 = require("url");
function urlConverter(endpoint, toReplace) {
    Object.entries(toReplace).forEach(entry => {
        const [key, value] = entry;
        endpoint = endpoint.replace(`%${key}%`, encodeURI(value));
    });
    return endpoint;
}
exports.urlConverter = urlConverter;
function queryConverter(queries) {
    const params = new url_1.URLSearchParams(queries);
    return params.toString();
}
exports.queryConverter = queryConverter;
function invertEntries(object) {
    const inverted = {};
    Object.keys(object).forEach(key => {
        inverted[object[key]] = key;
    });
    return inverted;
}
exports.invertEntries = invertEntries;
function riotRequest(params) {
    let header = { "X-Riot-Token": params.riotKey };
    const response = axios_1.default.get(params.url, { headers: header })
        .then(({ data: res }) => {
        return Object(res);
    })
        .catch(err => {
        console.error(err);
    });
    return response;
}
exports.riotRequest = riotRequest;
function dragonRequest(url) {
    const response = axios_1.default.get(url)
        .then(({ data: { type, format, version, data } }) => {
        return Object(data);
    })
        .catch(err => {
        console.error(err);
    });
    return response;
}
exports.dragonRequest = dragonRequest;
