"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionToContinent = exports.Continent = exports.Regions = void 0;
var Regions;
(function (Regions) {
    Regions["EU_WEST"] = "EUW1";
    Regions["EU_EAST"] = "EUN1";
    Regions["RUSSIA"] = "RU";
    Regions["AMERICA_NORTH"] = "NA1";
    Regions["LAT_NORTH"] = "LA1";
    Regions["LAT_SOUTH"] = "LA2";
    Regions["BRAZIL"] = "BR1";
    Regions["OCEANIA"] = "OC1";
    Regions["TURKEY"] = "TR1";
    Regions["KOREA"] = "KR";
    Regions["JAPAN"] = "JP1";
    Regions["PBE"] = "PBE1";
})(Regions || (Regions = {}));
exports.Regions = Regions;
var Continent;
(function (Continent) {
    Continent["EUROPE"] = "EUROPE";
    Continent["AMERICAS"] = "AMERICAS";
    Continent["ASIA"] = "ASIA";
})(Continent || (Continent = {}));
exports.Continent = Continent;
function regionToContinent(region) {
    switch (region) {
        case Regions.AMERICA_NORTH:
        case Regions.BRAZIL:
        case Regions.LAT_NORTH:
        case Regions.LAT_SOUTH:
        case Regions.OCEANIA:
            return Continent.AMERICAS;
        case Regions.EU_EAST:
        case Regions.EU_WEST:
        case Regions.TURKEY:
        case Regions.RUSSIA:
            return Continent.EUROPE;
        case Regions.JAPAN:
        case Regions.KOREA:
            return Continent.ASIA;
    }
    throw new Error(`Region ${region} inconnue.`);
}
exports.regionToContinent = regionToContinent;
