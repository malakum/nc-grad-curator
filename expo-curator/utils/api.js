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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = fetchData;
exports.fetchData2 = fetchData2;
exports.fetchDataPackage = fetchDataPackage;
exports.fetchDataDetailPackage = fetchDataDetailPackage;
exports.fetchData3 = fetchData3;
var axios_1 = require("axios");
var getTagList = [];
var getPackageList = [];
var getGroupList = [];
var getMuseumObject = [];
var museumObject = {
    id: 0,
    age: 30,
    isStudent: false,
};
var getMuseumObjectDetail = "";
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://data.nhm.ac.uk/api/3';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url + '/action/tag_list')];
                case 2:
                    response1 = _a.sent();
                    getTagList = response1.data.result.slice(0, 10);
                    console.log("tag list" + getTagList);
                    return [2 /*return*/, getTagList];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching data:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchData();
//export default fetchData;
function fetchData2() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://data.nhm.ac.uk/api/3';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url + '/action/package_list')];
                case 2:
                    response1 = _a.sent();
                    getPackageList = response1.data.result.slice(0, 10);
                    console.log("package list" + getPackageList);
                    return [2 /*return*/, getPackageList];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error fetching data:', error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchData2();
function fetchData3() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://data.nhm.ac.uk/api/3';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url + '/action/group_list')];
                case 2:
                    response1 = _a.sent();
                    getGroupList = response1.data.result.slice(0, 10);
                    console.log("group list" + getGroupList);
                    return [2 /*return*/, getGroupList];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error fetching data:', error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchData3();
function fetchDataPackage() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response1, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = 'https://collectionapi.metmuseum.org/public/collection/v1';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url + '/objects')];
                case 2:
                    response1 = _a.sent();
                    //console.log(response1.data);
                    getMuseumObject = response1.data.objectIDs.slice(0, 10);
                    console.log("package list" + getMuseumObject);
                    return [2 /*return*/, getMuseumObject];
                case 3:
                    error_4 = _a.sent();
                    console.error('Error fetching data:', error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchDataPackage();
function fetchDataDetailPackage() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response1, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://collectionapi.metmuseum.org/public/collection/v1";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url + "/objects/2")];
                case 2:
                    response1 = _a.sent();
                    // console.log(response1.data);
                    getMuseumObjectDetail = response1.data;
                    // museumObject = response1.data;
                    console.log('package detail data');
                    console.log(getMuseumObjectDetail);
                    return [2 /*return*/, getMuseumObjectDetail];
                case 3:
                    error_5 = _a.sent();
                    console.error('Error fetching data:', error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchDataDetailPackage();
