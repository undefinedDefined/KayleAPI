"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Langues = exports.Dragon = void 0;
const champions_1 = require("./champions");
const main_1 = require("./main");
Object.defineProperty(exports, "Langues", { enumerable: true, get: function () { return main_1.Langues; } });
class Dragon {
    constructor(language) {
        this.language = language;
    }
    champions() {
        return new champions_1.Champions(this.language);
    }
}
exports.Dragon = Dragon;
