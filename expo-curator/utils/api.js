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
exports.getArticles = void 0;
exports.fetchData = fetchData;
exports.fetchData2 = fetchData2;
exports.fetchData3 = fetchData3;
exports.fetchDataPackage = fetchDataPackage;
exports.fetchDataDetailPackage = fetchDataDetailPackage;
exports.fetchDepartments = fetchDepartments;
exports.fetchMusObjects = fetchMusObjects;
exports.fetchEuropeanData = fetchEuropeanData;
var axios_1 = require("axios");
//https://api.europeana.eu/record/v2/90402/RP_P_1984_87.json?wskey=okegainerom
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
// Axios instance
var newsApi = axios_1.default.create({
    baseURL: 'https://collectionapi.metmuseum.org/public/collection/v1',
});
//Function to get articles based on topic and sorting
var getArticles = function (
// topic: string,      // Topic should be a string
// sortby: string      // Sort parameter should also be a string
) {
    return newsApi
        .get('/objects') //, { params: { topic, sort_by: sortby } })
        .then(function (res) { return res.data; }); //res.data); // Return the articles data
};
exports.getArticles = getArticles;
// Function to get an article by its ID
// export const getArticleById = (objectIDs: number): Promise<Article> => {
//   return newsApi
//     .get<ArticleResponse>(`/objects/${objectIDs}`)
//     .then((res: AxiosResponse<ArticleResponse>) => res.data); // Return the specific article
// };
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
                    getMuseumObject = response1.data.objectIDs.slice(0, 50);
                    console.log(response1.data.objectIDs.slice(0, 50));
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
function fetchDataDetailPackage(objectIDs) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response1, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://collectionapi.metmuseum.org/public/collection/v1";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url + "/objects/".concat(objectIDs))];
                case 2:
                    response1 = _a.sent();
                    getMuseumObjectDetail = response1.data;
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
fetchDataDetailPackage(2);
// interface SingleDepartmentResponse {
//   departmentId: number;
//   displayName: string;
//   description: string;
//   // You can add more fields depending on the actual API response
// }
// Create Axios instance
// const newsApi = axios.create({
//   baseURL: "https://collectionapi.metmuseum.org/public/collection/v1",
// });
console.log('departments1');
// export const getDepartments = (): Promise<Department[]> => {
//   return newsApi
//     .get<DepartmentResponse>("/departments")
//     .then((res: AxiosResponse<DepartmentResponse>) => {
//       console.log('data');
//       console.log(res.data);
//       console.log('departments2');
//       console.log(res.data.departments);
//       return res.data.departments;
//     });
// };
function fetchDepartments() {
    return __awaiter(this, void 0, void 0, function () {
        var url, response1, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://collectionapi.metmuseum.org/public/collection/v1";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1.default.get(url + "/departments")];
                case 2:
                    response1 = _a.sent();
                    //console.log(response1.data);
                    getMuseumObjectDetail = response1.data.departments;
                    // museumObject = response1.data;
                    //  console.log('package detail data');
                    console.log(getMuseumObjectDetail);
                    return [2 /*return*/, getMuseumObjectDetail];
                case 3:
                    error_6 = _a.sent();
                    console.error('Error fetching data:', error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchDepartments();
console.log('departments3');
function fetchMusObjects(departmentId, q, isHighlight) {
    return __awaiter(this, void 0, void 0, function () {
        var url, query, queryString, response1, getMusObjects, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://collectionapi.metmuseum.org/public/collection/v1";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    query = [];
                    // search?q=sunflowers
                    // search?isHighlight=true&q=sunflowers
                    // search?departmentId=6&q=cat
                    if (isHighlight)
                        query.push("isHighlight=".concat(isHighlight));
                    if (departmentId)
                        query.push("departmentId=".concat(departmentId));
                    if (q)
                        query.push("q=".concat(q));
                    queryString = query.length ? "?".concat(query.join("&")) : "";
                    return [4 /*yield*/, axios_1.default.get(url + "/search".concat(queryString))];
                case 2:
                    response1 = _a.sent();
                    getMusObjects = response1.data;
                    console.log(getMusObjects);
                    return [2 /*return*/, getMusObjects];
                case 3:
                    error_7 = _a.sent();
                    console.error('Error fetching data:', error_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchMusObjects(1, 'sunflower', false);
console.log('departments3');
// // Get department by ID
// export const getDepartmentById = (department_id: number): Promise<SingleDepartmentResponse> => {
//   return newsApi
//     .get<SingleDepartmentResponse>(`/departments/${department_id}`)
//     .then((res: AxiosResponse<SingleDepartmentResponse>) => {
//       return res.data;
//     });
// };
function fetchEuropeanData() {
    return __awaiter(this, void 0, void 0, function () {
        var url2, response1, getEuropeanData, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url2 = "https://api.europeana.eu/record/v2/90402/RP_P_1984_87.json?wskey=okegainerom";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log(url2);
                    return [4 /*yield*/, axios_1.default.get(url2)];
                case 2:
                    response1 = _a.sent();
                    getEuropeanData = response1.data;
                    console.log('get European data');
                    console.log(getEuropeanData);
                    console.log('european museum data object agents');
                    console.log(getEuropeanData.object.agents);
                    return [2 /*return*/, getEuropeanData];
                case 3:
                    error_8 = _a.sent();
                    console.error('Error fetching data:', error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
fetchEuropeanData();
